function contact() {
  const contact = document.createElement('div');
  contact.classList.add('contact');

  const hOne = document.createElement('h1');
  hOne.textContent = "Contact";
  hOne.classList.add('title');
  ontact.appendChild(hOne);

  return contact;
}

function contactContent() {
  const main = document.querySelector('#main');
  main.innerHTML = '';
  main.appendChild(contact());

  return main;
}

export default contactContent;