// script.js
document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('menu');
    const menuItems = document.querySelectorAll('#menu ul li a');

    // Change menu background color on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            menu.style.backgroundColor = '#555';
        } else {
            menu.style.backgroundColor = '#333';
        }
    });

    // Change font color on hover
    menuItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            item.style.color = '#ff0';
        });

        item.addEventListener('mouseout', function() {
            item.style.color = '#fff';
        });
    });
});
