const yaml = require('js-yaml');
const fs   = require('fs');
const Color = require("colorjs.io").default;

const colors = require("../source/colors.json")
const stylus = require('stylus');

function getColorNode(l, c, h) {
    let str = new Color("oklch", [l, c, h]).to("srgb").toString({format: "hex"});
    return new stylus.Parser(str).peek().val
}

hexo.extend.filter.register('stylus:renderer', function(style) {
    let hue = hexo.config.theme_config.hue;
    let colorType = {
        'V': 1,
        'M': 0.5,
        'G': 0.25
    }
    for (let color of colors.default) {
        for (let [name, mul] of Object.entries(colorType)) {
            style.define(`default-${name}${color.name}`, getColorNode(color.l, color.c * mul, hue));
        }
    }

    for (let [theme, list] of Object.entries(colors)) {
        if (theme == 'default')
            continue;
        for (let color of list) {
            style.define(`${theme}-${color.name}`, getColorNode(color.l, color.c, hue));
        }
    }
})

hexo.extend.helper.register('getColors', function() {
    return colors;
})

hexo.extend.helper.register('getColor', function(l, c, h) {
    return getColorNode(l, c, h);
})