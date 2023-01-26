const yaml = require('js-yaml');
const fs   = require('fs');
const Color = require("colorjs.io").default;

const config = yaml.load(fs.readFileSync('./themes/vix/_config.yml'));
const colors = require("../source/colors.json")
const stylus = require('stylus');

function getColorNode(l, c, h) {
    let str = new Color("oklch", [l, c, h]).to("srgb").toString({format: "hex"});
    return new stylus.Parser(str).peek().val
}

hexo.extend.filter.register('stylus:renderer', function(style) {
    let hue = config.hue;
    for (let [theme, list] of Object.entries(colors)) {
        for (let color of list) {
            style.define(`${theme}-${color.name}`, getColorNode(color.l, color.c, hue));
        }
    }
})

hexo.extend.helper.register('getColors', function() {
    return colors;
})