import homeContent from './home';

function navBar() {
  const nav = document.createElement('nav');

  const homeButton = document.createElement('button');
  homeButton.classList.add('nav-button');
  homeButton.textContent = 'Home';

  const menuButton = document.createElement('button');
  menuButton.classList.add('nav-button');
  menuButton.textContent = 'Menu';

  const contactButton = document.createElement('button');
  contactButton.classList.add('nav-button');
  contactButton.textContent = 'Home';

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);

  return nav;
}

function main() {
  const main = document.createElement('div')
  main.setAttribute('id', 'main');

  return main;
}

function footer() {
  const footer = document.createElement('footer');

  const copyright = document.createElement('p');
  copyright.textContent = 'Copyright © 2021 Alexis Varela | All rights reserved';

  footer.appendChild(copyright);

  return footer;
}

function pageContent() {
  const content = document.querySelector('#content');

  content.appendChild(nav());
  content.appendChild(main());
  content.appendChild(footer());

  homeContent();
}

export default pageContent;