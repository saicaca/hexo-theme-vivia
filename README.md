# hexo-theme-vivia

A theme for [Hexo](https://hexo.io/), modified from [Landscape](https://github.com/hexojs/hexo-theme-landscape). (Work in progress)

[Live Demo](https://saicaca.github.io/theme-preview-test/)

## Preview

![home](preview/home.png)

![home_dark](preview/home-dark.png)

## Install

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

## To-do list

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
