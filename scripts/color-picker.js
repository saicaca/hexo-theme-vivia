if (typeof window === "object") {
  let slider = document.getElementById("colorSlider");
  let output = document.getElementById("hueValue");
  output.innerHTML = slider.value;
  
  // const nodes = require("stylus").nodes;
  // const stylus = require("stylus");
  
  
  slider.oninput = function() {
    output.innerHTML = this.value;
  //   stylus.define("color-L16", "black")
  //   stylus.define("color-L20", "black")
  //   stylus.define("color-L25", "black")
  //   stylus.define("color-L40", "black")
  //   stylus.define("color-L75", "black")
  }
}
