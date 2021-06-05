import Soups from './img/soups.png';
import Wines from './img/wines.png';
import Salads from './img/salads.png';
import Hamburguers from './img/hamburguers.png';
import Pizzas from './img/pizzas.png';
import Pastas from './img/pastas.png';
import Desserts from './img/desserts.png';

function menu() {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  const hOne = document.createElement('h1');
  hOne.textContent = "Menu";
  hOne.classList.add('menu-title');

  const menuSoups = new Image();
  menuSoups.src = Soups;
  menuSoups.classList.add('menu-img');
  const menuOne = document.createElement('p');
  menuOne.textContent = "Soups";
  menuOne.classList.add('menu-p');

  const menuWines = new Image();
  menuWines.src = Wines;
  menuWines.classList.add('menu-img');
  const menuTwo = document.createElement('p');
  menuTwo.textContent = "Wines";
  menuTwo.classList.add('menu-p');

  const menuSalads = new Image();
  menuSalads.src = Salads;
  menuSalads.classList.add('menu-img');
  const menuThree = document.createElement('p');
  menuThree.textContent = "Salads";
  menuThree.classList.add('menu-p');

  const menuHam = new Image();
  menuHam.src = Hamburguers;
  menuHam.classList.add('menu-img');
  const menuFour = document.createElement('p');
  menuFour.textContent = "Hamburguers";
  menuFour.classList.add('menu-p');

  const menuPizzas = new Image();
  menuPizzas.src = Pizzas;
  menuPizzas.classList.add('menu-img');
  const menuFive = document.createElement('p');
  menuFive.textContent = "Pizzas";
  menuFive.classList.add('menu-p');

  const menuPastas = new Image();
  menuPastas.src = Pastas;
  menuPastas.classList.add('menu-img');
  const menuSix = document.createElement('p');
  menuSix.textContent = "Pastas";
  menuSix.classList.add('menu-p');

  const menuDesserts = new Image();
  menuDesserts.src = Desserts;
  menuDesserts.classList.add('menu-img');
  const menuSeven = document.createElement('p');
  menuSeven.textContent = "Desserts";
  menuSeven.classList.add('menu-p');

  menu.appendChild(hOne);
  menu.appendChild(menuSoups);
  menu.appendChild(menuOne);
  menu.appendChild(menuWines);
  menu.appendChild(menuTwo);
  menu.appendChild(menuSalads);
  menu.appendChild(menuThree);
  menu.appendChild(menuHam);
  menu.appendChild(menuFour);
  menu.appendChild(menuPizzas);
  menu.appendChild(menuFive);
  menu.appendChild(menuPastas);
  menu.appendChild(menuSix);
  menu.appendChild(menuDesserts);
  menu.appendChild(menuSeven);

  return menu
}

function menuContent() {
  const main = document.querySelector('#main');
  main.innerHTML = '';
  main.appendChild(menu());

  return main;
}

export default menuContent;