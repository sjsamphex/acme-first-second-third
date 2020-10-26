const users = [
  { id: 1, name: 'moe', slot: 'first' },
  { id: 2, name: 'larry', slot: 'second' },
  { id: 3, name: 'curly', slot: 'third' },
  { id: 4, name: 'lucy', slot: 'third', selected: true },
];

//console.log(users);
draw(users);

function draw(users) {
  clearDiv();

  for (let user of users) {
    // console.dir(user);
    let divNode = document.getElementById(`${user.slot}-users`);
    let userElement = document.createElement('p');
    userElement.innerText = user.name;
    if (user.selected) {
      userElement.className = 'selected';
    }
    divNode.appendChild(userElement);
  }
}

function clearDiv() {
  for (let user of users) {
    let divNode = document.getElementById(`${user.slot}-users`);
    while (divNode.firstChild) {
      divNode.removeChild(divNode.firstChild);
    }
  }
}

const buttonpress = document.addEventListener('click', move);

function move(ev) {
  if (ev.target.tagName === 'BUTTON') {
    // console.log(
    //   `Target Text:${ev.target.innerText}; Parent ID:${ev.target.parentNode.parentNode.id}`
    // );

    const divUsers = [...ev.target.parentNode.parentNode.querySelectorAll('p')];
    divUsers.forEach((p) => {
      console.log(p.innerText);
    });

    draw(users);
  } else if (ev.target.tagName === 'P') {
    // console.log(ev.target.innerText);
    users.forEach((user) => {
      if (user.name === ev.target.innerText) {
        user.selected = !user.selected;
      }
    });
    draw(users);
    //let selection = [...document.querySelectorAll('p')];
  }
}
