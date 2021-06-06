import Map from './img/location.png';

const contact = () => {
  const contact = document.createElement('div');
  contact.classList.add('contact');

  const hOne = document.createElement('h1');
  hOne.textContent = 'Contact';
  hOne.classList.add('contact-title');

  const pOne = document.createElement('p');
  pOne.textContent = 'You can text us at "bolly@contact.com" or you can visit our restaurant here:';
  pOne.classList.add('contact-p');

  const img = new Image();
  img.src = Map;
  img.classList.add('map');

  contact.appendChild(hOne);
  contact.appendChild(pOne);
  contact.appendChild(img);

  return contact;
};

const contactContent = () => {
  const main = document.querySelector('#main');
  main.innerHTML = '';
  main.appendChild(contact());

  return main;
};

export default contactContent;