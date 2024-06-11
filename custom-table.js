// custom-table.js
document.addEventListener("DOMContentLoaded", function() {
    fetch('custom-table.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.table-container').innerHTML += data;
        });
});
