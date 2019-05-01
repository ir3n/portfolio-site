import $ from "jquery";

class ChangeText {
  constructor() {
    this.description = $(".letters");
    this.text = ["FRONT-END DEVELOPER", "SINGER", "NATURE ENTHUSIAST"];
    this.counter = 0;
    this.initializeText();
  }

  initializeText() {
    this.description.html(this.text[0]);
  }
  animateText = () => {
    this.description.html(`${this.text[this.counter]}`);
    this.counter++;

    if (this.counter >= this.text.length) {
      this.counter = 0;
    }
  };
}

export default ChangeText;
