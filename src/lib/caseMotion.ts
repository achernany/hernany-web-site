const EASE_OUT_EXPO = "cubic-bezier(0.16, 1, 0.3, 1)";

interface EffectHandle {
  destroy?: () => void;
}

type ParallaxMediaElement = HTMLImageElement | HTMLVideoElement;

interface ParallaxOptions {
  orientation?: "up" | "down";
  scale?: number;
  maxTransition?: number;
}

function createParallaxHandle(
  elements: ParallaxMediaElement[],
  options: ParallaxOptions,
) {
  if (elements.length === 0) {
    return null;
  }

  const activeElements = elements.filter((element) => element.isConnected);
  if (activeElements.length === 0) {
    return null;
  }

  const direction = options.orientation === "down" ? -1 : 1;
  const scale = options.scale ?? 1.14;
  const maxTransition = options.maxTransition ?? 96;
  let frameId = 0;

  const update = () => {
    frameId = 0;
    const viewportHeight = window.innerHeight || 1;

    activeElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const travel = viewportHeight / 2 + rect.height / 2;
      const distanceFromCenter = viewportHeight / 2 - (rect.top + rect.height / 2);
      const progress = Math.max(-1, Math.min(1, distanceFromCenter / Math.max(travel, 1)));
      const translateY = progress * maxTransition * direction;

      element.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0) scale(${scale})`;
    });
  };

  const scheduleUpdate = () => {
    if (frameId) {
      return;
    }

    frameId = window.requestAnimationFrame(update);
  };

  activeElements.forEach((element) => {
    element.style.willChange = "transform";
    element.style.transformOrigin = "center center";
  });

  update();

  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate);

  return {
    destroy: () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);

      activeElements.forEach((element) => {
        element.style.removeProperty("transform");
        element.style.removeProperty("transform-origin");
        element.style.removeProperty("will-change");
      });
    },
  };
}

function applyDelay(root: ParentNode) {
  root.querySelectorAll<HTMLElement>("[data-animate-delay]").forEach((element) => {
    const delay = element.dataset.animateDelay;
    if (!delay) {
      return;
    }

    element.style.setProperty("--animate-delay", `${delay}ms`);
  });
}

async function initParallax(container: HTMLElement) {
  if (window.matchMedia("(max-width: 1023px)").matches) {
    return [];
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return [];
  }

  const handles: EffectHandle[] = [];

  const heroImg = Array.from(
    container.querySelectorAll<ParallaxMediaElement>('[data-parallax="hero"] img, [data-parallax="hero"] video'),
  );
  const standardImgs = Array.from(
    container.querySelectorAll<ParallaxMediaElement>('[data-parallax="standard"] img, [data-parallax="standard"] video'),
  );
  const deepImgs = Array.from(
    container.querySelectorAll<ParallaxMediaElement>('[data-parallax="deep"] img, [data-parallax="deep"] video'),
  );
  const reverseImgs = Array.from(
    container.querySelectorAll<ParallaxMediaElement>('[data-parallax="reverse"] img, [data-parallax="reverse"] video'),
  );

  const heroHandle = createParallaxHandle(heroImg, {
    orientation: "up",
    scale: 1.14,
    maxTransition: 96,
  });
  if (heroHandle) {
    handles.push(heroHandle);
  }

  const standardHandle = createParallaxHandle(standardImgs, {
    orientation: "up",
    scale: 1.18,
    maxTransition: 120,
  });
  if (standardHandle) {
    handles.push(standardHandle);
  }

  const deepHandle = createParallaxHandle(deepImgs, {
    orientation: "up",
    scale: 1.22,
    maxTransition: 148,
  });
  if (deepHandle) {
    handles.push(deepHandle);
  }

  const reverseHandle = createParallaxHandle(reverseImgs, {
    orientation: "down",
    scale: 1.14,
    maxTransition: 96,
  });
  if (reverseHandle) {
    handles.push(reverseHandle);
  }

  return handles;
}

export function initCaseMotion(container: HTMLElement) {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  applyDelay(container);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -48px 0px" },
  );

  container
    .querySelectorAll<HTMLElement>("[data-animate]")
    .forEach((element) => {
      if (prefersReduced) {
        element.classList.add("is-visible");
        return;
      }

      observer.observe(element);
    });

  let parallaxHandles: EffectHandle[] = [];
  let isDisposed = false;

  initParallax(container)
    .then((handles) => {
      if (isDisposed) {
        handles.forEach((handle) => handle.destroy?.());
        return;
      }

      parallaxHandles = handles;
    })
    .catch(() => {
      // Parallax is optional. If it fails, reveals still work.
    });

  return () => {
    isDisposed = true;
    observer.disconnect();
    parallaxHandles.forEach((handle) => handle.destroy?.());
  };
}

export { EASE_OUT_EXPO };
