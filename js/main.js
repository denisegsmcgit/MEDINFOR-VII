// MEDINFOR VII – main.js

document.addEventListener('DOMContentLoaded', () => {

  /* =========================================
     MOBILE MENU
  ========================================= */

  const toggle = document.querySelector('.nav-toggle');
  const menu   = document.querySelector('.nav-menu');
  const navbar = document.querySelector('.navbar');

  if (toggle && menu) {

    // ABRIR / FECHAR MENU
    toggle.addEventListener('click', (e) => {

      e.stopPropagation();

      const open = menu.classList.toggle('open');

      toggle.classList.toggle('open', open);

      toggle.setAttribute('aria-expanded', open);

      // trava scroll quando menu abre
      document.body.classList.toggle('menu-open', open);

    });

   /* =========================================
   DROPDOWN MOBILE
========================================= */

const dropdowns = document.querySelectorAll('.nav-dropdown');

dropdowns.forEach(drop => {

  const link = drop.querySelector('a');

  link.addEventListener('click', e => {

    // IMPORTANTE:
    // precisa bater com o CSS (1250px)
    if (window.innerWidth <= 1250) {

      e.preventDefault();

      const isOpen = drop.classList.contains('open');

      // FECHA TODOS
      dropdowns.forEach(item => {
        item.classList.remove('open');
      });

      // ABRE APENAS O CLICADO
      if (!isOpen) {
        drop.classList.add('open');
      }

    }

  });

});

/* =========================================
   ACTIVE MOBILE MENU
========================================= */

document.querySelectorAll('.nav-menu a').forEach(link => {

  link.addEventListener('click', () => {

    if (window.innerWidth <= 1250) {

      // REMOVE ACTIVE DE TODOS
      document.querySelectorAll('.nav-menu a')
        .forEach(item => item.classList.remove('active'));

      // ATIVA APENAS O CLICADO
      link.classList.add('active');

    }

  });

});

    /* =========================================
       FECHAR AO CLICAR FORA
    ========================================= */

    document.addEventListener('click', e => {

      if (
        !toggle.contains(e.target) &&
        !menu.contains(e.target)
      ) {

        menu.classList.remove('open');

        toggle.classList.remove('open');

        toggle.setAttribute('aria-expanded', 'false');

        document.body.classList.remove('menu-open');

        // fecha dropdowns também
        document.querySelectorAll('.nav-dropdown')
          .forEach(item => item.classList.remove('open'));
      }

    });

    /* =========================================
       FECHAR AO REDIMENSIONAR
    ========================================= */

    window.addEventListener('resize', () => {

      if (window.innerWidth > 1250) {

        menu.classList.remove('open');

        toggle.classList.remove('open');

        toggle.setAttribute('aria-expanded', 'false');

        document.body.classList.remove('menu-open');

        document.querySelectorAll('.nav-dropdown')
          .forEach(item => item.classList.remove('open'));
      }

    });

  }

  /* =========================================
     ACTIVE NAV LINK
  ========================================= */

  const currentPage =
    window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-menu a').forEach(a => {

    const href = a.getAttribute('href');

    if (
      href === currentPage ||
      (currentPage === '' && href === 'index.html')
    ) {
      a.classList.add('active');
    }

  });

  /* =========================================
     SCROLL TO TOP
  ========================================= */

  const scrollBtn = document.querySelector('.scroll-top');

  if (scrollBtn) {

    window.addEventListener('scroll', () => {

      scrollBtn.classList.toggle(
        'visible',
        window.scrollY > 300
      );

    });

    scrollBtn.addEventListener('click', () => {

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });

    });

  }

  /* =========================================
     FADE IN
  ========================================= */

  const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add('visible');

        observer.unobserve(entry.target);

      }

    });

  }, {
    threshold: 0.1
  });

  document
    .querySelectorAll('.fade-in')
    .forEach(el => observer.observe(el));

  /* =========================================
     NAVBAR SCROLL EFFECT
  ========================================= */

  if (navbar) {

    window.addEventListener('scroll', () => {

      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

    });

  }


  /* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

if (navbar) {

  const handleNavbarScroll = () => {

    // APENAS DESKTOP
    if (window.innerWidth > 1250) {

      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

    } else {

      // MOBILE/TABLET
      navbar.classList.remove('scrolled');

    }

  };

  handleNavbarScroll();

  window.addEventListener('scroll', handleNavbarScroll);

  window.addEventListener('resize', handleNavbarScroll);

}

});