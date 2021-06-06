import Logo from './img/logo.png';

const home = () => {
  const home = document.createElement('div');
  home.classList.add('home');

  const homeLogo = new Image();
  homeLogo.src = Logo;
  homeLogo.classList.add('home-logo');

  const p = document.createElement('p');
  p.textContent = 'The best food option in your country';
  p.classList.add('slogan');

  home.appendChild(homeLogo);
  home.appendChild(p);

  return home;
};

const homeContent = () => {
  const main = document.querySelector('#main');
  main.innerHTML = '';
  main.appendChild(home());

  return main;
};

export default homeContent;