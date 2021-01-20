document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.pg-content').onclick = function() {
        fetch('https://uwkee.github.io/sangreal/test.html')
        .then(data => data.text())
        .then(html => document.querySelector('.pg-content').innerHTML = html);
    };
});
