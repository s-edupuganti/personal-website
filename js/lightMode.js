function change() {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('lightMode', 'enabled');
    } else {
        localStorage.setItem('lightMode', 'disabled');
    }

};

if (localStorage.getItem('lightMode') == 'enabled') {
    document.body.classList.toggle('light-mode');
};

