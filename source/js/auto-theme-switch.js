function autoTheme() {
    let root = document.documentElement;
    window.matchMedia('(prefers-color-scheme: light)').matches ? root.setAttribute('theme', 'light') : root.setAttribute('theme', 'dark');
};
autoTheme();