const myMenu = document.querySelectorAll('a.menu__link');

myMenu.forEach(item => item.onclick = selectMenu);

function selectMenu() {

  const activeItem = this.closest('li');
  const subMenuActive = activeItem.querySelector('.menu_sub');

  if (subMenuActive) {
    if (!(subMenuActive.matches('.menu_active'))) closeMenu();
    subMenuActive.classList.toggle('menu_active');
    return false;
  }
  closeMenu();
}

function closeMenu() {
  const subMenu = document.querySelectorAll('.menu_sub');
  for (let item of subMenu) {
    if (item.matches('.menu_active')) {
      item.classList.remove('menu_active');
    }
  }
}