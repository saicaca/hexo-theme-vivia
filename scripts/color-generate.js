const stylus = require('stylus');

var getColorNode;

try{
    const Color = require("colorjs.io").default;
    getColorNode = (l, c, h) => {
        let str = new Color("oklch", [l, c, h]).to("srgb").toString({format: "hex"});
        return new stylus.Parser(str).peek().val
    }
}catch(err){
    // 差不多效果的颜色函数，适用于直接复制项目到 theme 文件夹的情况
    const val_clip = (v, _min, _max) => (v < _max ? (v > _min ? v : _min) : _max);
    const oklchToSrgb = (l, c, h) => {
        const L = parseFloat(l);                // lumine [0, 1]
        // const L = val_clip((parseFloat(l)+1.6)/1.16, 0, 1);  
        const C = parseFloat(c)*500;            // chroma [0, 0.4]
        const H = parseInt(h) * Math.PI / 180;  // hue [0, 360]
        const a = C * Math.cos(H);
        const b = C * Math.sin(H);
        let [X, Y, Z] = [L + (a / 500.0), L, L - (b / 200.0)]
        let [R, G, B] = [
            X *  3.2406 + Y * -1.5372 + Z * -0.4986,
            X * -0.9689 + Y *  1.8758 + Z *  0.0415,
            X *  0.0557 + Y * -0.2040 + Z *  1.0570
        ];  // rgb [0, 1]
        return [R, G, B].map(v => Math.floor(val_clip(v*255, 0, 255)));
    }
    const toHex = (val) => {
        const hex = val.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };
    const srgbToHex = (r, g, b) => {
        res = "#" + toHex(r) + toHex(g) + toHex(b)
        return res;
    };
    getColorNode = (l, c, h) => {
        const [r, g, b] = oklchToSrgb(l, c, h);
        return new stylus.Parser(srgbToHex(r, g, b)).peek().val;
    }
}

hexo.extend.filter.register('stylus:renderer', function(style) {
    style.define("oklchToHex", function (l, c, h) {
        return getColorNode(l, c, h);
    })
})

hexo.extend.helper.register('getColor', function(l, c, h) {
    return getColorNode(l, c, h);
})