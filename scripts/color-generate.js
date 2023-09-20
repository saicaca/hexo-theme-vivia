const Color = require("colorjs.io").default;
const stylus = require('stylus');

function getColorNode(l, c, h) {
    let str = new Color("oklch", [l, c, h]).to("srgb").toString({format: "hex"});
    return new stylus.Parser(str).peek().val
}

hexo.extend.filter.register('stylus:renderer', function(style) {
    style.define("oklchToHex", function (l, c, h) {
        return getColorNode(l, c, h);
    })
})

hexo.extend.helper.register('getColor', function(l, c, h) {
    return getColorNode(l, c, h);
})