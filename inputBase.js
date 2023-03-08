class inputBase extends FieldBase{

  // add
  element;

  constructor(dom, options) {
    super(dom, options)
    this.dom = dom;
  }

  render() {
    this.dom.appendChild(this.element);
  }

  getValue() {
    return this.element.value;
  }

  setValue(value) {
    this.element.value = value;
  }

  isEmpty() {
    return this.element.value.trim() === "";
  }

  isValid() {
    return true;
  }
}
