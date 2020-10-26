const users = [
  { id: 1, name: 'moe', slot: 'first' },
  { id: 2, name: 'larry', slot: 'second' },
  { id: 3, name: 'curly', slot: 'third' },
  { id: 4, name: 'lucy', slot: 'third', selected: true },
];

const slotTable = {
  first: 1,
  second: 2,
  third: 3,
};
const arraySlots = ['zero', 'first', 'second', 'third'];

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
  for (let i = 1; i < arraySlots.length; i++) {
    let divNode = document.getElementById(`${arraySlots[i]}-users`);
    while (divNode.firstChild) {
      divNode.removeChild(divNode.firstChild);
    }
  }
}

const buttonpress = document.addEventListener('click', move);

function move(ev) {
  if (ev.target.tagName === 'BUTTON' && ev.target.className === 'selected') {
    // console.log(
    //   `Target Text:${ev.target.innerText}; Parent ID:${ev.target.parentNode.parentNode.id}`
    // );

    const divUsers = [...ev.target.parentNode.parentNode.querySelectorAll('p')];
    divUsers.forEach((p) => {
      let userInfo = users.find((user) => {
        return user.name === p.innerText;
      });
      if (userInfo.selected) {
        // console.log(`will ${ev.target.innerText} the slot of ${p.innerText}`);

        if (ev.target.innerText === '>') {
          userInfo.slot = arraySlots[slotTable[userInfo.slot] + 1];
        } else {
          userInfo.slot = arraySlots[slotTable[userInfo.slot] - 1];
        }
      }
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
  }
}
