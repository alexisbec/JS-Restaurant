function home() {
  const home = document.createElement('div');
  home.classList.add('home');

  const hOne = document.createElement('h1');
  hOne.textContent = "Restaurant Name";
  hOne.classList.add('title');
  home.appendChild(hOne);

  const p = document.createElement('p');
  p.textContent = "The best food option in your country";
  p.classList.add("slogan");
  home.appendChild(p);

  return home;
}

function homeContent() {
  const main = document.querySelector('#main');
  main.innerHTML = '';
  main.appendChild(home());

  return main;
}

export default homeContent;