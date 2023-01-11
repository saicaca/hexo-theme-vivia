const yaml = require('js-yaml');
const fs   = require('fs');
const Color = require("colorjs.io").default;

const config = yaml.load(fs.readFileSync('./themes/vix/_config.yml'));
const stylus = require('stylus');

function getColorNode(l, c, h) {
    let str = new Color("oklch", [l, c, h]).to("srgb").toString({format: "hex"});
    return new stylus.Parser(str).peek().val
}

hexo.extend.filter.register('stylus:renderer', function(style) {
    let hue = config.hue;
    style.define('--main-bg-color', getColorNode(0.16, 0.015, hue))
    style.define('color-L16', getColorNode(0.16, 0.015, hue))
    style.define('color-L20', getColorNode(0.20, 0.020, hue))
    style.define('color-L25', getColorNode(0.25, 0.020, hue))
    style.define('color-L40', getColorNode(0.40, 0.040, hue))
    style.define('color-L50', getColorNode(0.50, 0.060, hue))
    style.define('color-L75', getColorNode(0.75, 0.120, hue))
})
  