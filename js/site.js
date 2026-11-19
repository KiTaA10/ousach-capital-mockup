const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');
const mobile = window.matchMedia('(max-width: 720px)');

function setMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.hidden = mobile.matches && !open;
}

function resetMenu() {
  const menuHadFocus = navigation.contains(document.activeElement);
  const buttonHadFocus = document.activeElement === menuButton;

  menuButton.hidden = !mobile.matches;
  setMenu(false);

  if (mobile.matches && menuHadFocus) menuButton.focus();
  if (!mobile.matches && buttonHadFocus) navigation.querySelector('a').focus();
}

menuButton.addEventListener('click', () => {
  setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
});

navigation.addEventListener('click', (event) => {
  const link = event.target.closest('a');
  if (!mobile.matches || !link) return;

  const destination = document.getElementById(link.hash.slice(1));
  if (destination) {
    destination.tabIndex = -1;
    destination.focus({ preventScroll: true });
  }
  setMenu(false);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuButton.focus();
  }
});

mobile.addEventListener('change', resetMenu);
resetMenu();
