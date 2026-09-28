document.addEventListener('DOMContentLoaded', () => {
  for (const shell of document.querySelectorAll('.site-header-shell')) {
    const button = shell.querySelector('.menu-toggle');
    const navigation = shell.querySelector('.site-nav');
    if (!button || !navigation) continue;

    const closeNavigation = ({ restoreFocus = false } = {}) => {
      button.setAttribute('aria-expanded', 'false');
      navigation.classList.remove('is-open');
      if (restoreFocus) button.focus();
    };

    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!open));
      navigation.classList.toggle('is-open', !open);
    });

    navigation.addEventListener('click', (event) => {
      if (!event.target.closest('a')) return;
      closeNavigation();
    });

    shell.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape' || button.getAttribute('aria-expanded') !== 'true') return;
      closeNavigation({ restoreFocus: true });
    });
  }
});
