function lightDarkStorage() {
    let theme = localStorage.getItem('theme');
    if (theme) {
        document.documentElement.setAttribute('theme', theme);
    }    
};
lightDarkStorage();