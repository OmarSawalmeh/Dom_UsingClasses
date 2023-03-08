class IntegerRangeField extends FieldBase {
  constructor(dom, options) {
    super(dom, options);
    this.dom = dom;
    this.fromLabel = document.createElement("label");
    this.fromLabel.innerHTML = "From";
    //this.render(this.fromLabel);

    this.fromRange = document.createElement("input");
    this.fromRange.setAttribute("type", "number");
    this.fromRange.readOnly = options.readOnly;
    this.fromRange.required = options.isRequired;
    this.fromRange.setAttribute("id", "min");
    this.fromRange.setAttribute("placeholder", "Min");
    //this.render(this.fromRange);

    this.toLabel = document.createElement("label");
    this.toLabel.innerHTML = "To";
    //this.render(this.toLabel);

    this.toRange = document.createElement("input");
    this.toRange.setAttribute("type", "number");
    this.toRange.readOnly = options.readOnly;
    this.toRange.required = options.isRequired;
    this.toRange.setAttribute("id", "max");
    this.toRange.setAttribute("placeholder", "Max");
    //this.render(this.toRange);
  }

  render() {
    //console.log('Elemnts ==>', item);
    // this.dom.appendChild(item);
    this.dom.appendChild(this.fromLabel);
    this.dom.appendChild(this.fromRange);
    this.dom.appendChild(this.toLabel);
    this.dom.appendChild(this.toRange);
  }

  getValue() {
    const obj = { from: this.fromRange, to: this.toRange };
    return obj;
  }
}
