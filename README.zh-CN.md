<br>
<div align="center">
<img alt="Vivia Logo" src="https://raw.githubusercontent.com/saicaca/resource/main/vivia-img/logo.png" width="280px">
<br>
<br>
<strong>
<a href="https://saicaca.github.io/vivia-preview/">在线预览</a>
|
<a href="https://github.com/saicaca/hexo-theme-vivia/blob/main/README.md">English</a>
</strong>
<br>
<br>
一款 <a href="https://hexo.io/">Hexo</a> 博客主题，基于 <a href="https://github.com/hexojs/hexo-theme-landscape">Landscape</a> 修改（开发中）
<br>
<br>
<a href="https://www.npmjs.com/package/hexo-theme-vivia">
   <img src="https://img.shields.io/npm/v/hexo-theme-vivia"/>
</a>
<a href="https://github.com/saicaca/hexo-theme-vivia/blob/main/LICENSE">
   <img src="https://img.shields.io/github/license/saicaca/hexo-theme-vivia"/>
</a>
</div>

## 预览

**[💻在线预览](https://saicaca.github.io/vivia-preview/)**

![home](https://raw.githubusercontent.com/saicaca/resource/main/vivia-img/home.png)

![home_dark](https://raw.githubusercontent.com/saicaca/resource/main/vivia-img/home-dark.png)

# 安装说明

> [!NOTE]
> 下列指令均在 Hexo 博客根目录下执行

### 1. 安装主题

通过 npm 安装（推荐）

```bash
npm install hexo-theme-vivia
```

通过 Git 安装

```bash
# 将主题下载至 /themes/vivia 目录
git clone https://github.com/saicaca/hexo-theme-vivia.git themes/vivia
  
# 安装主题的依赖
npm install colorjs.io stylus hexo-symbols-count-time
```

### 2. 创建主题配置文件

将主题的示例配置文件复制至 Hexo 根目录:

- 若通过 npm 安装，文件位于 `node_modules/hexo-theme-vivia/example_zh_CN_config.vivia.yml`
- 若通过 Git 安装，文件位于 `themes/vivia/example_zh_CN_config.vivia.yml`

复制后，将文件重命名为 `_config.vivia.yml`。

### 3. 自定义主题

修改 `_config.vivia.yml` 填写自定义配置。

### 4. 将 `vivia` 设置为主题

```bash
hexo config theme vivia
```

### 5. 创建 `about` 页面

```bash
hexo new page about
```

### 6. 禁用归档页面的分页

修改 `_config.yml` 填写下列配置：

```yaml
archive_generator:
  per_page: 0
```

若不添加此配置归档页最多只能显示 10 篇文章。

# To-do

- [x] 亮 / 暗模式
- [x] 自定义主题色
- [x] 自定义头图
- [x] 响应式设计
- [x] 评论
  - [x] Valine
  - [x] Twikoo
  - [ ] 其他
- [ ] 搜索
- [ ] 文内目录插件

# 致谢

<a href="https://jb.gg/OpenSourceSupport">
   <img src="https://resources.jetbrains.com/storage/products/company/brand/logos/jb_beam.png" alt="JetBrains Logo (Main) logo." width="200px" height="200px">
</a>

- [Hexo](https://hexo.io/zh-cn/index.html)
- [Landscape](https://github.com/hexojs/hexo-theme-landscape)
- [Color.js](https://colorjs.io/)
- [Font Awesome](https://github.com/FortAwesome/Font-Awesome)
- [Material Icons / Material Symbols](https://github.com/google/material-design-icons)
