// DONNÉES CARROUSEL
        const projectData = {
            "p1": { title: "Projet 01", desc: "Description de l'illustration et du concept.", images: ["img/img_01.jpg", "img/boite_2.jpg"] },
            "p2": { title: "Projet 02", desc: "Travail sur la typographie moderne.", images: ["https://images.unsplash.com/photo-1633167606207-d840b5070fc2?w=1000", "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?w=1000"] },
            "p3": { title: "Projet 03", desc: "Art numérique et compositions.", images: ["https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1000"] },
            "p4": { title: "Projet 04", desc: "Épure et minimalisme visuel.", images: ["https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=1000"] },
            "p5": { title: "Projet 05", desc: "Identité de marque et branding.", images: ["https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1000"] },
            "p6": { title: "Projet 06", desc: "Conception d'affiches événementielles.", images: ["https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1000"] }
        };

        const burgerBtn = document.getElementById('burgerBtn');
        const fullMenu = document.getElementById('fullMenu');
        const mainLogo = document.getElementById('mainLogo');
        const logoLink = document.getElementById('logoLink');
        const heroSection = document.getElementById('accueil');
        const modal = document.getElementById('projectModal');
        const slideContainer = document.getElementById('carouselSlide');
        let currentIdx = 0;

        // MENU BURGER
        burgerBtn.addEventListener('click', () => {
            const isActive = fullMenu.classList.toggle('active');
            burgerBtn.classList.toggle('burger-active');
            document.body.style.overflow = isActive ? 'hidden' : '';
        });

        // OUVERTURE MODALE
        document.querySelectorAll('.mosaic-item').forEach(item => {
            item.addEventListener('click', () => {
                const id = item.getAttribute('data-project');
                const project = projectData[id];
                if (!project) return;

                currentIdx = 0;
                document.getElementById('modalTitle').innerText = project.title;
                document.getElementById('modalDesc').innerText = project.desc;
                slideContainer.innerHTML = project.images.map(img => `<img src="${img}">`).join('');
                
                updateCarousel();
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
        });

        // NAVIGATION CARROUSEL
        function updateCarousel() {
            slideContainer.style.transform = `translateX(${-currentIdx * 100}%)`;
        }

        document.querySelector('.next-btn').onclick = () => {
            const total = slideContainer.querySelectorAll('img').length;
            currentIdx = (currentIdx + 1) % total;
            updateCarousel();
        };

        document.querySelector('.prev-btn').onclick = () => {
            const total = slideContainer.querySelectorAll('img').length;
            currentIdx = (currentIdx - 1 + total) % total;
            updateCarousel();
        };

        // FERMETURE MODALE
        document.querySelector('.modal-close').onclick = () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        };

        window.onclick = (e) => { if (e.target == modal) { modal.style.display = 'none'; document.body.style.overflow = ''; } };

        // SCROLL EFFECTS
        window.addEventListener('scroll', () => {
            const heroBottom = heroSection.getBoundingClientRect().bottom;
            if (heroBottom <= 60) {
                burgerBtn.classList.add('is-dark');
                if (window.innerWidth <= 768) logoLink.classList.add('logo-hidden-mobile');
                else mainLogo.classList.add('logo-dark');
            } else {
                burgerBtn.classList.remove('is-dark');
                mainLogo.classList.remove('logo-dark');
                logoLink.classList.remove('logo-hidden-mobile');
            }
        });

        document.querySelectorAll('.full-menu a').forEach(link => {
            link.addEventListener('click', () => {
                fullMenu.classList.remove('active');
                burgerBtn.classList.remove('burger-active');
                document.body.style.overflow = '';
            });
        });