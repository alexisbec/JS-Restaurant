function menu() {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  const hOne = document.createElement('h1');
  hOne.textContent = "Menu";
  hOne.classList.add('title');
  menu.appendChild(hOne);

  return menu;
}

function menuContent() {
  const main = document.querySelector('#main');
  main.innerHTML = '';
  main.appendChild(menu());

  return main;
}

export default menuContent;