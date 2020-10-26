const users = [
  { id: 1, name: 'moe', slot: 'first' },
  { id: 2, name: 'larry', slot: 'second' },
  { id: 3, name: 'curly', slot: 'third' },
  { id: 4, name: 'lucy', slot: 'third', selected: true },
];

//console.log(users);
draw(users);

function draw(users) {
  for (let user of users) {
    // console.dir(user);
    let divNode = document.getElementById(`${user.slot}-users`);
    while (divNode.firstChild) {
      divNode.removeChild(divNode.firstChild);
    }
    let userElement = document.createElement('p');
    userElement.innerText = user.name;

    if (user.selected) {
      userElement.className = 'selected';
    }

    divNode.appendChild(userElement);
  }
}

const buttonpress = document.addEventListener('click', move);

function move(ev) {
  if (ev.target.tagName === 'BUTTON') {
    console.log(
      `Target Text:${ev.target.innerText}; Parent ID:${ev.target.parentNode.parentNode.id}`
    );
    draw(users);
  }
}
