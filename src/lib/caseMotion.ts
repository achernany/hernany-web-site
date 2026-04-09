const EASE_OUT_EXPO = "cubic-bezier(0.16, 1, 0.3, 1)";

interface EffectHandle {
  destroy?: () => void;
}

type SimpleParallaxConstructor = new (
  element: HTMLImageElement | HTMLImageElement[],
  options: Record<string, unknown>,
) => EffectHandle;

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

  const heroImg = container.querySelector<HTMLImageElement>(".cs-section--hero img");
  if (heroImg) {
    handles.push(
      new SimpleParallax(heroImg, {
        orientation: "up",
        scale: 1.08,
        delay: 0.1,
        transition: EASE_OUT_EXPO,
        maxTransition: 50,
        overflow: false,
      }),
    );
  }

  const sectionImgs = Array.from(
    container.querySelectorAll<HTMLImageElement>(
      ".cs-section:not(.cs-section--hero):not(.cs-section--closing) img",
    ),
  );

  if (sectionImgs.length > 0) {
    handles.push(
      new SimpleParallax(sectionImgs, {
        orientation: "up",
        scale: 1.12,
        delay: 0.1,
        transition: EASE_OUT_EXPO,
        maxTransition: 55,
        overflow: false,
      }),
    );
  }

  const closingImg = container.querySelector<HTMLImageElement>(".cs-section--closing img");
  if (closingImg) {
    handles.push(
      new SimpleParallax(closingImg, {
        orientation: "down",
        scale: 1.08,
        delay: 0.1,
        transition: EASE_OUT_EXPO,
        maxTransition: 50,
        overflow: false,
      }),
    );
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
