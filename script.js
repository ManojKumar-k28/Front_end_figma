
        function toggleMobileMenu() {
            const mobileMenu = document.getElementById('mobileMenu');
            const menuIcon = document.querySelector('.menu-icon');
            const closeIcon = document.querySelector('.close-icon');

            mobileMenu.classList.toggle('active');

            if (mobileMenu.classList.contains('active')) {
                menuIcon.style.display = 'none';
                closeIcon.style.display = 'block';
            } else {
                menuIcon.style.display = 'block';
                closeIcon.style.display = 'none';
            }
        }

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.mobile-menu-item').forEach(link => {
            link.addEventListener('click', () => {
                const mobileMenu = document.getElementById('mobileMenu');
                const menuIcon = document.querySelector('.menu-icon');
                const closeIcon = document.querySelector('.close-icon');

                mobileMenu.classList.remove('active');
                menuIcon.style.display = 'block';
                closeIcon.style.display = 'none';
            });
        });
