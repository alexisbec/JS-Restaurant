import contactContent from './contact';
import homeContent from './home';
import menuContent from './menu';
import Logo from './img/logo.png';

const activeButton = (button) => {
  const buttons = document.querySelectorAll('.nav-button');

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove('active');
    }
  });

  button.classList.add('active');
};

const navBar = () => {
  const nav = document.createElement('nav');

  const navLogo = new Image();
  navLogo.src = Logo;
  navLogo.classList.add('logo');

  const homeButton = document.createElement('button');
  homeButton.classList.add('nav-button');
  homeButton.textContent = 'Home';
  homeButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    activeButton(homeButton);
    homeContent();
  });

  const menuButton = document.createElement('button');
  menuButton.classList.add('nav-button');
  menuButton.textContent = 'Menu';
  menuButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    activeButton(menuButton);
    menuContent();
  });

  const contactButton = document.createElement('button');
  contactButton.classList.add('nav-button');
  contactButton.textContent = 'Contact';
  contactButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    activeButton(contactButton);
    contactContent();
  });

  nav.appendChild(navLogo);
  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);

  return nav;
};

const main = () => {
  const main = document.createElement('div');
  main.setAttribute('id', 'main');

  return main;
};

const footer = () => {
  const footer = document.createElement('footer');

  const copyright = document.createElement('p');
  copyright.textContent = 'Copyright © 2021 Alexis Varela | All rights reserved';

  footer.appendChild(copyright);

  return footer;
};

const pageContent = () => {
  const content = document.querySelector('#content');

  content.appendChild(navBar());
  content.appendChild(main());
  content.appendChild(footer());

  activeButton(document.querySelector('.nav-button'));
  homeContent();
};

export default pageContent;