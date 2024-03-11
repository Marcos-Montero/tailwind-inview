import plugin from "tailwindcss/plugin";

export class Inview {
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

export default inviewplugin;
