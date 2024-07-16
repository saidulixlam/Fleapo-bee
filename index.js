document.addEventListener('DOMContentLoaded', function() {
    const navContainer = document.querySelector('.nav-container');
    const menuButton = document.createElement('button');
    menuButton.className = 'menu-toggle';
    menuButton.innerHTML = '<span class="menu-icon"></span>';
    menuButton.style.color = '#FFC24B'; 
    menuButton.style.fontSize = '16px'; 
    console.log(menuButton);
    
    const logo = document.querySelector('.logo');
    if (window.innerWidth <= 768 && logo) {
        navContainer.parentNode.insertBefore(menuButton, logo);
    }

    menuButton.addEventListener('click', function(event) {
        event.stopPropagation();

        navContainer.classList.toggle('active');
        menuButton.classList.toggle('active');

        if (navContainer.classList.contains('active')) {
            
            document.addEventListener('click', closeMenu);
        } else {
            
            document.removeEventListener('click', closeMenu);
        }
    });

    function closeMenu(event) {
        if (!navContainer.contains(event.target) || event.target.tagName === 'A') {
            navContainer.classList.remove('active');
            menuButton.classList.remove('active');
            document.removeEventListener('click', closeMenu);
        }
    }
});

// Assume you have a way to determine which item is active
const shopItems = document.querySelectorAll('.shop-item');

shopItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from all items
        shopItems.forEach(i => i.classList.remove('active'));

        // Add active class to the clicked item
        item.classList.add('active');
    });
});

