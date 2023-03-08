//dom, options
class Button extends inputBase {
  constructor(dom, options) {
    super(dom, options);
    this.element = document.createElement("button");
    this.element.setAttribute("type", "button");
    this.element.setAttribute("id", options.id);
    this.element.setAttribute("name", options.name);
    this.element.textContent = options.label;
    this.options = options;
  }

  onClick() {
    this.element.addEventListener("click", () => {
      //console.log('Type Of ===>', typeof this.options.handller);
      // Handller Check if its exist and type of is function
      if (
        this.options.handller &&
        typeof this.options.handller === "function"
      ) {
        this.options.handller();
      }
    });
  }
}

 