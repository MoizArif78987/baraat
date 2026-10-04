import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

const easeOutExpo = (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t));

/**
 * Lenis smooth scroll + hero snap:
 * hero is never left half-visible — settle scrolls fully to top or fully past it.
 */
export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.35,
      easing: easeOutExpo,
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 1.35,
      wheelMultiplier: 0.9,
      infinite: false,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    let settleTimer = 0;
    let snapping = false;

    const getHeroExtent = () => {
      const hero = document.querySelector(".hero") as HTMLElement | null;
      if (!hero) return 0;
      return hero.offsetTop + hero.offsetHeight;
    };

    const snapHeroIfNeeded = () => {
      if (snapping) return;
      const extent = getHeroExtent();
      if (extent <= 0) return;

      const scroll = lenis.scroll;
      // Only act while the hero is partially on screen
      if (scroll <= 2 || scroll >= extent - 2) return;

      const target = scroll < extent * 0.5 ? 0 : extent;
      snapping = true;
      lenis.scrollTo(target, {
        duration: 1.05,
        easing: easeOutExpo,
        onComplete: () => {
          snapping = false;
        },
      });
    };

    const onScroll = () => {
      window.clearTimeout(settleTimer);
      if (snapping) return;
      settleTimer = window.setTimeout(snapHeroIfNeeded, 90);
    };

    lenis.on("scroll", onScroll);

    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a[href^='#']");
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href || href === "#") return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      snapping = true;
      lenis.scrollTo(el as HTMLElement, {
        offset: 0,
        duration: 1.6,
        easing: easeOutExpo,
        onComplete: () => {
          snapping = false;
        },
      });
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(settleTimer);
      document.removeEventListener("click", onClick);
      lenis.off("scroll", onScroll);
      lenis.destroy();
    };
  }, []);

  return null;
}
