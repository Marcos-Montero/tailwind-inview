import plugin from "tailwindcss/plugin";

class Inview {
  private observers: IntersectionObserver[];

  constructor() {
    this.observers = [];
    const elements = document.querySelectorAll(
      '[class*=" inview:"],[class*=":inview:"],[class^="inview:"],[class="inview"],[class*=" inview "],[class^="inview "],[class$=" inview"]'
    );
    elements.forEach((element) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            element.setAttribute("no-inview", "");
            return;
          }
          element.removeAttribute("no-inview");
          if (element.classList.contains("inview-once")) {
            observer.disconnect();
          }
        });
      });
      this.observers.push(observer);
      observer.observe(element);
    });
  }

  stop() {
    this.observers.forEach((observer) => observer.disconnect());
  }
}

const inviewplugin = plugin(({ addVariant }) => {
  addVariant("inview", "&:not([no-inview])");
});

/**
 * This function should be used inside a useEffect
 * ```typescript
 * // Syntax
 * useEffect(inViewSensor, [])
 *```
 * @returns A cleanup function that stops the inview detection.
 */
export const inViewSensor = () => {
  const inview = new Inview();
  return () => {
    inview.stop();
  };
};

// Plugin
export default inviewplugin;
