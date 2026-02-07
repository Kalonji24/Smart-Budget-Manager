// Burger Menu
        const burgerMenu = document.getElementById('burgerMenu');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('overlay');

        burgerMenu.addEventListener('click', () => {
            burgerMenu.classList.toggle('active');
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
        });

        overlay.addEventListener('click', () => {
            burgerMenu.classList.remove('active');
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });

        // Menu Items
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach(item => {
            item.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    burgerMenu.classList.remove('active');
                    sidebar.classList.remove('active');
                    overlay.classList.remove('active');
                }
                menuItems.forEach(i => i.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Theme Toggle
        const themeToggle = document.querySelector('.theme-toggle');
        themeToggle.addEventListener('click', () => {
            alert('Theme toggle clicked - Light/Dark mode');
        });

        // Notification
        const notificationIcon = document.querySelector('.notification-icon');
        notificationIcon.addEventListener('click', () => {
            alert('You have 3 new notifications');
        });

        // User Profile
        const userProfile = document.querySelector('.user-profile');
        userProfile.addEventListener('click', () => {
            alert('Profile settings');
        });

        // Add Card
        const addCard = document.querySelector('.add-card');
        addCard.addEventListener('click', () => {
            alert('Add new card');
        });

        // Card Dots
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.addEventListener('click', (e) => {
                e.stopPropagation();
                dots.forEach(d => d.classList.remove('active'));
                dot.classList.add('active');
            });
        });

        // Transaction Items
        const transactionItems = document.querySelectorAll('.transaction-item');
        transactionItems.forEach(item => {
            item.addEventListener('click', () => {
                const name = item.querySelector('.transaction-name').textContent;
                alert(`Transaction details: ${name}`);
            });
        });

        // View All Links
        const viewAllLinks = document.querySelectorAll('.view-all');
        viewAllLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                alert('View all items');
            });
        });

        // Search
        const searchInput = document.querySelector('.search-bar input');
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                alert(`Searching for: ${searchInput.value}`);
            }
        });

        // Add Button
        const addButton = document.querySelector('.add-button');
        if (addButton) {
            addButton.addEventListener('click', (e) => {
                e.stopPropagation();
                alert('Add new category');
            });
        }