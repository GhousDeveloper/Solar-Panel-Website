(() => {
  const TOTAL_FRAMES = 300;
  const canvas = document.getElementById('canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d', { alpha: false });
  const loadingBar = document.getElementById('loading-bar');
  const heroContainer = document.getElementById('hero-scroll-container');

  const images = new Array(TOTAL_FRAMES + 1);
  let loadedCount = 0;
  let targetFrame = 1;
  let currentFrame = 1;
  let lastDrawnIndex = -1;
  let isTicking = false;

  // Frame path generator
  function getFrameSrc(index) {
    const pad = String(index).padStart(3, '0');
    return `frames/ezgif-frame-${pad}.jpg`;
  }

  // Cover drawing for canvas
  function drawFrame(img) {
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    const scale = Math.max(cw / iw, ch / ih);
    const sw = iw * scale;
    const sh = ih * scale;
    const sx = (cw - sw) / 2;
    const sy = (ch - sh) / 2;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, 0, 0, iw, ih, sx, sy, sw, sh);
  }

  // Nearest frame fallback
  function getNearestLoadedFrame(index) {
    if (images[index] && images[index].complete && images[index].naturalWidth > 0) {
      return images[index];
    }
    for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
      const prev = index - offset;
      if (prev >= 1 && images[prev] && images[prev].complete && images[prev].naturalWidth > 0) {
        return images[prev];
      }
      const next = index + offset;
      if (next <= TOTAL_FRAMES && images[next] && images[next].complete && images[next].naturalWidth > 0) {
        return images[next];
      }
    }
    return null;
  }

  function render(index, force = false) {
    const roundedIndex = Math.max(1, Math.min(TOTAL_FRAMES, Math.round(index)));
    if (!force && roundedIndex === lastDrawnIndex) return;

    const img = getNearestLoadedFrame(roundedIndex);
    if (img) {
      drawFrame(img);
      lastDrawnIndex = roundedIndex;
    }
  }

  function resizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(window.innerWidth * dpr);
    canvas.height = Math.round(window.innerHeight * dpr);
    render(currentFrame, true);
  }

  function updateScrollTarget() {
    if (!heroContainer) return;

    const rect = heroContainer.getBoundingClientRect();
    const heroScrollDepth = heroContainer.offsetHeight - window.innerHeight;

    let progress = 0;
    if (heroScrollDepth > 0) {
      const scrolledPastTop = -rect.top;
      progress = Math.max(0, Math.min(1, scrolledPastTop / heroScrollDepth));
    }

    targetFrame = 1 + progress * (TOTAL_FRAMES - 1);

    if (!isTicking) {
      isTicking = true;
      requestAnimationFrame(animationLoop);
    }
  }

  function animationLoop() {
    const diff = targetFrame - currentFrame;

    if (Math.abs(diff) > 0.005) {
      currentFrame += diff * 0.12;
      render(currentFrame);
      requestAnimationFrame(animationLoop);
    } else {
      currentFrame = targetFrame;
      render(currentFrame);
      isTicking = false;
    }
  }

  // Preloading
  function preloadAllFrames() {
    const firstImg = new Image();
    firstImg.src = getFrameSrc(1);
    firstImg.onload = () => {
      images[1] = firstImg;
      loadedCount++;
      resizeCanvas();
      render(1, true);
      loadRemainingFrames();
    };
    firstImg.onerror = () => {
      loadRemainingFrames();
    };
  }

  function loadRemainingFrames() {
    const queue = [];
    for (let i = 2; i <= TOTAL_FRAMES; i++) {
      queue.push(i);
    }

    const CONCURRENCY = 16;
    let active = 0;

    function next() {
      while (active < CONCURRENCY && queue.length > 0) {
        const index = queue.shift();
        active++;

        const img = new Image();
        img.src = getFrameSrc(index);

        const onComplete = () => {
          images[index] = img;
          loadedCount++;
          active--;

          if (loadingBar) {
            const pct = (loadedCount / TOTAL_FRAMES) * 100;
            loadingBar.style.width = `${pct}%`;

            if (loadedCount >= TOTAL_FRAMES) {
              loadingBar.style.opacity = '0';
              setTimeout(() => {
                if (loadingBar && loadingBar.parentNode) {
                  loadingBar.parentNode.removeChild(loadingBar);
                }
              }, 600);
            }
          }

          if (Math.round(currentFrame) === index) {
            render(currentFrame, true);
          }

          next();
        };

        img.onload = onComplete;
        img.onerror = onComplete;
      }
    }

    next();
  }

  // ==========================================
  // WEB PAGE INTERACTIVE COMPONENTS LOGIC
  // ==========================================

  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const iconBars = document.getElementById('menu-icon-bars');
  const iconClose = document.getElementById('menu-icon-close');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('hidden');
      if (isOpen) {
        mobileMenu.classList.add('hidden');
        iconBars.classList.remove('hidden');
        iconClose.classList.add('hidden');
      } else {
        mobileMenu.classList.remove('hidden');
        iconBars.classList.add('hidden');
        iconClose.classList.remove('hidden');
      }
    });

    // Close mobile menu on clicking any link
    document.querySelectorAll('.mobile-nav-item').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        iconBars.classList.remove('hidden');
        iconClose.classList.add('hidden');
      });
    });
  }

  // 2. Solutions items click scroll
  document.querySelectorAll('.sol-item').forEach(item => {
    item.addEventListener('click', () => {
      const el = document.getElementById('why-choose-us');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // 3. Explore Solutions button
  const exploreBtn = document.getElementById('btn-explore-solutions');
  if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
      const el = document.getElementById('why-choose-us');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // 4. Modal Logic
  const modalContainer = document.getElementById('modal-container');
  const modalTitle = document.getElementById('modal-title');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalDoneBtn = document.getElementById('btn-modal-done');
  const consultationForm = document.getElementById('consultation-form');
  const modalSuccess = document.getElementById('modal-success');
  const successName = document.getElementById('success-name');
  const successEmail = document.getElementById('success-email');

  function openModal(title) {
    if (!modalContainer) return;
    if (modalTitle) modalTitle.textContent = title;
    if (consultationForm) consultationForm.classList.remove('hidden');
    if (modalSuccess) modalSuccess.classList.add('hidden');
    modalContainer.classList.remove('hidden');
  }

  function closeModal() {
    if (!modalContainer) return;
    modalContainer.classList.add('hidden');
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalDoneBtn) modalDoneBtn.addEventListener('click', closeModal);
  if (modalContainer) {
    modalContainer.addEventListener('click', (e) => {
      if (e.target === modalContainer) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Attach modal openers
  const getStartedBtn = document.getElementById('btn-get-started');
  if (getStartedBtn) {
    getStartedBtn.addEventListener('click', () => openModal('Get Your Free Solar Assessment'));
  }

  const aboutUsBtn = document.getElementById('btn-about-us');
  if (aboutUsBtn) {
    aboutUsBtn.addEventListener('click', () => openModal('About SunRise Solar'));
  }

  const footerCtaQuote = document.getElementById('footer-cta-quote');
  if (footerCtaQuote) {
    footerCtaQuote.addEventListener('click', () => openModal('Request Free Solar Proposal'));
  }

  document.querySelectorAll('.footer-service-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const service = btn.getAttribute('data-service') || 'Solar Service Assessment';
      openModal(service);
    });
  });

  document.querySelectorAll('.footer-legal-link').forEach(link => {
    link.addEventListener('click', () => {
      const legal = link.getAttribute('data-legal') || 'Policy & Information';
      openModal(legal);
    });
  });

  // Dynamic Copyright Year
  const copyrightYear = document.getElementById('copyright-year');
  if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
  }

  document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('click', () => {
      const title = card.getAttribute('data-title') || 'Solar Solution Details';
      openModal(title);
    });
  });

  if (consultationForm) {
    consultationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('input-fullname')?.value || 'Valued Customer';
      const email = document.getElementById('input-email')?.value || '';

      if (successName) successName.textContent = name;
      if (successEmail) successEmail.textContent = email;

      consultationForm.classList.add('hidden');
      if (modalSuccess) modalSuccess.classList.remove('hidden');
    });
  }

  // 5. Interactive Benefits List (Selection & Tilted Card Move)
  const benefitRows = document.querySelectorAll('.benefit-row');
  const tiltedCard = document.getElementById('tilted-card');

  benefitRows.forEach(row => {
    row.addEventListener('click', () => {
      benefitRows.forEach(r => {
        r.classList.remove('active-row', 'bg-gradient-to-r', 'from-[#c7f86b]', 'via-[#bdf357]', 'to-[#b1ee46]', 'shadow-md', 'border-[#a3e635]');
        r.classList.add('bg-[#f8fbf9]', 'hover:bg-[#f1f8f3]', 'border-slate-100');

        const iconWrap = r.querySelector('.benefit-icon-wrapper');
        if (iconWrap) {
          iconWrap.classList.remove('bg-white', 'text-[#0c2238]', 'shadow-xs');
          iconWrap.classList.add('bg-[#e3f3e8]', 'text-[#0f3923]');
        }

        const arrow = r.querySelector('.benefit-arrow');
        if (arrow) {
          arrow.classList.remove('text-[#1c3d24]');
          arrow.classList.add('text-[#2e5a44]');
        }

        const ul = r.querySelector('ul');
        if (ul) {
          ul.classList.remove('text-[#16361d]', 'sm:pr-24');
          ul.classList.add('text-[#475b6d]');
        }

        const dots = r.querySelectorAll('.bullet-dot');
        dots.forEach(d => {
          d.classList.remove('bg-[#16361d]');
          d.classList.add('bg-[#64748b]');
        });
      });

      // Activate clicked row
      row.classList.remove('bg-[#f8fbf9]', 'hover:bg-[#f1f8f3]', 'border-slate-100');
      row.classList.add('active-row', 'bg-gradient-to-r', 'from-[#c7f86b]', 'via-[#bdf357]', 'to-[#b1ee46]', 'shadow-md', 'border-[#a3e635]');

      const iconWrap = row.querySelector('.benefit-icon-wrapper');
      if (iconWrap) {
        iconWrap.classList.remove('bg-[#e3f3e8]', 'text-[#0f3923]');
        iconWrap.classList.add('bg-white', 'text-[#0c2238]', 'shadow-xs');
      }

      const arrow = row.querySelector('.benefit-arrow');
      if (arrow) {
        arrow.classList.remove('text-[#2e5a44]');
        arrow.classList.add('text-[#1c3d24]');
      }

      const ul = row.querySelector('ul');
      if (ul) {
        ul.classList.remove('text-[#475b6d]');
        ul.classList.add('text-[#16361d]', 'sm:pr-24');
      }

      const dots = row.querySelectorAll('.bullet-dot');
      dots.forEach(d => {
        d.classList.remove('bg-[#64748b]');
        d.classList.add('bg-[#16361d]');
      });

      // Move the tilted floating preview card into this row
      if (tiltedCard) {
        row.appendChild(tiltedCard);
      }
    });
  });

  // 6. Navigation Active Pill on Scroll
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = [
    { id: 'hero-scroll-container', name: 'Home' },
    { id: 'why-choose-us', name: 'About Us' },
    { id: 'benefits-section', name: 'Projects' },
    { id: 'contact', name: 'Contact' }
  ];

  window.addEventListener('scroll', () => {
    updateScrollTarget();

    const scrollY = window.scrollY;
    let current = 'Home';

    sections.forEach(sec => {
      const el = document.getElementById(sec.id);
      if (el) {
        const top = el.offsetTop - 120;
        if (scrollY >= top) {
          current = sec.name;
        }
      }
    });

    navLinks.forEach(link => {
      const pill = link.querySelector('.nav-active-pill');
      if (link.getAttribute('data-nav') === current) {
        link.classList.add('text-[#0c2238]', 'font-semibold');
        link.classList.remove('hover:text-[#138e4b]');
        if (!pill && link.getAttribute('data-nav') === 'Home') {
          const newPill = document.createElement('span');
          newPill.className = 'nav-active-pill absolute bottom-0 left-0 w-full h-[2.5px] bg-[#138e4b] rounded-full';
          link.appendChild(newPill);
        }
      } else {
        link.classList.remove('text-[#0c2238]', 'font-semibold');
        link.classList.add('hover:text-[#138e4b]');
        if (pill) pill.remove();
      }
    });
  }, { passive: true });

  window.addEventListener('resize', resizeCanvas, { passive: true });

  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  resizeCanvas();
  preloadAllFrames();
  updateScrollTarget();
})();
