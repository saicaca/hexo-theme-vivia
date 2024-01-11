let themeFunc = async function() {
    let btn = document.getElementById("theme-btn");
    let root = document.documentElement;
    btn.addEventListener('click', e => {
        if (root.getAttribute('theme') == 'dark') {
            root.setAttribute('theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            root.setAttribute('theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });
    let themeMedia = window.matchMedia("(prefers-color-scheme: light)");
    if (themeMedia.matches) {
        root.setAttribute('theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        root.setAttribute('theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
};
themeFunc();

