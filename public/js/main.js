// AI Tools Marathi - main.js

document.addEventListener('DOMContentLoaded', function () {
  initMobileMenu();
  initCopyButtons();
  initHeaderScroll();
});

// Mobile Navigation Toggle
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('mobile-menu-close');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function () {
      const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
      document.body.classList.toggle('overflow-hidden', !isExpanded);
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        menuBtn.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      });
    }

    // Close mobile menu when clicking outside or on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function () {
        menuBtn.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      });
    });
  }
}

// Copy Prompt Helper Function
function copyPrompt(button) {
  let promptText = '';
  const card = button.closest('.prompt-card') || button.closest('.prompt-container');

  if (card) {
    const textEl = card.querySelector('.prompt-text');
    if (textEl) {
      promptText = textEl.innerText.trim();
    }
  }

  if (!promptText && button.dataset.prompt) {
    promptText = button.dataset.prompt;
  }

  if (!promptText) {
    const prevEl = button.previousElementSibling;
    if (prevEl && prevEl.classList.contains('prompt-box')) {
      promptText = prevEl.innerText.trim();
    }
  }

  if (promptText) {
    navigator.clipboard.writeText(promptText).then(() => {
      const originalText = button.innerHTML;
      button.innerHTML = '<span>✅</span> <span>कॉपी झाला!</span>';
      button.classList.add('bg-emerald-600', 'text-white');
      showToast('Prompt क्लिपबोर्डवर यशस्वीरित्या कॉपी झाला!');

      setTimeout(() => {
        button.innerHTML = originalText;
        button.classList.remove('bg-emerald-600', 'text-white');
      }, 2000);
    }).catch(err => {
      console.error('Copy failed:', err);
      // Fallback
      fallbackCopyText(promptText, button);
    });
  }
}

function fallbackCopyText(text, button) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-9999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    const originalText = button.innerHTML;
    button.innerHTML = '<span>✅</span> <span>कॉपी झाला!</span>';
    showToast('Prompt क्लिपबोर्डवर कॉपी झाला!');
    setTimeout(() => {
      button.innerHTML = originalText;
    }, 2000);
  } catch (err) {
    console.error('Fallback copy failed', err);
  }
  document.body.removeChild(textArea);
}

// Bind all copy prompt buttons automatically
function initCopyButtons() {
  document.querySelectorAll('.btn-copy-prompt').forEach(button => {
    button.addEventListener('click', function () {
      copyPrompt(this);
    });
  });
}

// Toast notification display
function showToast(message) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#041E39] text-white px-5 py-3 rounded-xl shadow-xl border border-slate-700 transition-all duration-300';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `
    <div class="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm">✓</div>
    <div class="text-sm font-medium marathi-text">${message}</div>
  `;
  toast.classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

// Sticky header border on scroll
function initHeaderScroll() {
  const header = document.getElementById('main-header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 20) {
        header.classList.add('shadow-sm', 'bg-white/95', 'backdrop-blur-md');
        header.classList.remove('bg-white');
      } else {
        header.classList.remove('shadow-sm', 'bg-white/95', 'backdrop-blur-md');
        header.classList.add('bg-white');
      }
    });
  }
}
