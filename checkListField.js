class CheckList extends FieldBase {
  constructor(dom, options) {
    super(dom, options);
    this.dom = dom;
    this.options = options;

    this.Choices = document.createElement("ul");

    options.myChoices.forEach((item) => {
      const myItem = document.createElement("li");

      if (options.inLine) {
        myItem.id = "inline-li";
      }

      // Second way to solve style ul elemnt
      //   if(options.inLine){
      //     myItem.style.display = 'inline-block';
      //    }
      const myInput = document.createElement("input");
      myInput.type = "checkbox";
      myInput.checked = false;
      myInput.id = item.id;
      myInput.name = item.id;
      myItem.appendChild(myInput);
      // To handle every checkbox
      this.onClick(myInput);

      if (item.icon) {
        console.log(item.id, item.icon);
        const icon = document.createElement("img");
        icon.src = item.icon;
        icon.alt = "Icon";
        icon.id = `icons`;
        myItem.appendChild(icon);
      }

      const myLabel = document.createElement("label");
      myLabel.id = 'checkmark'
      myLabel.htmlFor = item.id;
      myLabel.textContent = item.text;
      myItem.appendChild(myLabel);



      this.Choices.appendChild(myItem);
    });
  }

  render() {
    this.dom.appendChild(this.Choices);
  }

  getValue() {
    var elementChecked = this.dom.querySelectorAll('input[type=checkbox]');
    //console.log('New Data ==>', elementChecked.length);
var checkedValues = [];

for (var i = 0; i < elementChecked.length; i++) {
  if (elementChecked[i].checked) {
    checkedValues.push(elementChecked[i].id);
  }
}

    return  checkedValues;
  }

  setValue(dataChecked) {
    dataChecked.forEach(function(element) {
      document.getElementById(element).checked = true
    });
  }

  onClick(myInput) {
    myInput.addEventListener("click", () => {
      if (
        this.options.onChange &&
        typeof this.options.onChange === "function"
      ) {
        //console.log('myInput ===>', myInput);
        //this.options.myChoices = this.options.myChoices.id.filter(id => id !== myInput.id)
        //console.log(this.options.myChoices);
        this.options.myChoices = this.options.myChoices.filter(item => item.id !== myInput.id)
        this.options.onChange(myInput);
        console.log(`Lists after check ${myInput.id}`, this.getValue());
      }
    });
  }
}
