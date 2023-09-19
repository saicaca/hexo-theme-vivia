<br>
<div align="center">
<img alt="Vivia Logo" src="./preview/logo.png" width="280px">
<br>
<br>
<strong>
<a href="https://saicaca.github.io/vivia-preview/">Live Demo</a>
|
<a href="https://github.com/saicaca/hexo-theme-vivia/blob/main/README.zh-CN.md">中文文档</a>
</strong>
<br>
<br>
A theme for <a href="https://hexo.io/">Hexo</a>, modified from <a href="https://github.com/hexojs/hexo-theme-landscape">Landscape</a>. (Work in progress)
<br>
<br>
<a href="https://www.npmjs.com/package/hexo-theme-vivia">
   <img src="https://img.shields.io/npm/v/hexo-theme-vivia"/>
</a>
<a href="https://github.com/saicaca/hexo-theme-vivia/blob/main/LICENSE">
   <img src="https://img.shields.io/github/license/saicaca/hexo-theme-vivia"/>
</a>
</div>

## Preview

**[💻Live Demo](https://saicaca.github.io/vivia-preview/)**

![home](preview/home.png)

![home_dark](preview/home-dark.png)

# Install

## Method One: npm install
1. Install the theme via npm.

   ```bash
   npm install hexo-theme-vivia
   ```
   
2. Copy the configuration file `node_modules/hexo-theme-vivia/example_config.vivia.yml` to the root directory of the Hexo blog and rename it as `_config.vivia.yml`.

3. Edit Hexo config file `_config.yml` and set `vivia` as the theme.

   ```yaml
   theme: vivia
   ```

4. Create the `about` page

   ```bash
   hexo new page about
   ```
## Method Two: Copy this repo to the themes folder

1. Run the following commands under the root directory of your hexo project.

   ```bash
   cd themes
   git clone <url-for-this-repo>
   ```

2. Edit the config file `_config.yml` under the root path of your hexo project folder. Change a key-value pair

   ```yaml
   theme: hexo-theme-vivia
   ```

3. Create the `about` page

   ```bash
   hexo new page about
   ```

4. Try compilation
   ```bash
   hexo clean    # clean previous cache
   hexo server   # allow temperory local server, convinent for debugging
   hexo generate # compile md files to static html website
   ```

5. Report bugs in issue if possible.

# To-do list

- [x] Light / dark mode
- [x] Custom theme color
- [x] Custom banner
- [x] Responsive design
- [x] Comments
  - [x] Valine
  - [ ] Others
- [ ] Search
- [ ] TOC widget
- [ ] Improve the styles of post contents

# Thanks
<a href="https://jb.gg/OpenSourceSupport">
   <img src="https://resources.jetbrains.com/storage/products/company/brand/logos/jb_beam.png" alt="JetBrains Logo (Main) logo." width="200px" height="200px">
</a>
