(function(){
  const menuBtn = document.querySelector('[data-menu-btn]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  if(menuBtn && mobileMenu){
    menuBtn.addEventListener('click', ()=>{
      const open = mobileMenu.getAttribute('data-open') === 'true';
      mobileMenu.setAttribute('data-open', String(!open));
      mobileMenu.style.display = open ? 'none' : 'block';
      menuBtn.setAttribute('aria-expanded', String(!open));
    });

    mobileMenu.querySelectorAll('a').forEach(a=>{
      a.addEventListener('click', ()=>{
        mobileMenu.setAttribute('data-open','false');
        mobileMenu.style.display='none';
        menuBtn.setAttribute('aria-expanded','false');
      });
    });
  }

  // Simple client-side contact form UX (works even if you later wire Formspree/Netlify)
  const form = document.querySelector('[data-contact-form]');
  const status = document.querySelector('[data-form-status]');
  if(form && status){
    form.addEventListener('submit', (e)=>{
      // If action is placeholder (#), prevent navigation and show a success message
      const action = (form.getAttribute('action') || '').trim();
      if(action === '' || action === '#'){
        e.preventDefault();
        status.textContent = 'Thanks! Your request is ready. Connect this form to Formspree/Netlify and you’ll start receiving submissions instantly.';
        status.style.display = 'block';
        form.reset();
      }
    });
  }
})();
