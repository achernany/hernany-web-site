const EASE_OUT_EXPO = "cubic-bezier(0.16, 1, 0.3, 1)";

interface EffectHandle {
  destroy?: () => void;
}

type ParallaxMediaElement = HTMLImageElement | HTMLVideoElement;

type SimpleParallaxConstructor = new (
  element: ParallaxMediaElement | ParallaxMediaElement[],
  options: Record<string, unknown>,
) => EffectHandle;

function createParallaxHandle(
  SimpleParallax: SimpleParallaxConstructor,
  elements: ParallaxMediaElement[],
  options: Record<string, unknown>,
) {
  if (elements.length === 0) {
    return null;
  }

  return new SimpleParallax(elements.length === 1 ? elements[0] : elements, options);
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

  const { default: SimpleParallaxModule } = await import("simple-parallax-js");
  const SimpleParallax = SimpleParallaxModule as unknown as SimpleParallaxConstructor;
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

  const heroHandle = createParallaxHandle(SimpleParallax, heroImg, {
    orientation: "up",
    scale: 1.14,
    delay: 0,
    transition: EASE_OUT_EXPO,
    maxTransition: 96,
    overflow: false,
  });
  if (heroHandle) {
    handles.push(heroHandle);
  }

  const standardHandle = createParallaxHandle(SimpleParallax, standardImgs, {
    orientation: "up",
    scale: 1.18,
    delay: 0,
    transition: EASE_OUT_EXPO,
    maxTransition: 120,
    overflow: false,
  });
  if (standardHandle) {
    handles.push(standardHandle);
  }

  const deepHandle = createParallaxHandle(SimpleParallax, deepImgs, {
    orientation: "up",
    scale: 1.22,
    delay: 0,
    transition: EASE_OUT_EXPO,
    maxTransition: 148,
    overflow: false,
  });
  if (deepHandle) {
    handles.push(deepHandle);
  }

  const reverseHandle = createParallaxHandle(SimpleParallax, reverseImgs, {
    orientation: "down",
    scale: 1.14,
    delay: 0,
    transition: EASE_OUT_EXPO,
    maxTransition: 96,
    overflow: false,
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
