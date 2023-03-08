class TextField extends inputBase {
  constructor(dom, options) {
    super(dom, options);
    this.element = document.createElement("input");
    this.element.setAttribute("type", options.type);
    this.element.setAttribute("id", options.id);
    this.element.setAttribute("name", options.name);
    this.element.readOnly = options.readOnly;
    this.element.required = options.isRequired;


  }
}
