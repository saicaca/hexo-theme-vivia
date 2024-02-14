function autoTheme() {
    let root = document.documentElement;
    let theme = localStorage.getItem('theme');
    if (theme) {
        root.setAttribute('theme', theme);
    } else {
    window.matchMedia('(prefers-color-scheme: light)').matches ? root.setAttribute('theme', 'light') : root.setAttribute('theme', 'dark');
    }
};
autoTheme();