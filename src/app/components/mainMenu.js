const createButton = (className, textContent, callback) => {
  const btn = document.createElement('button');
  btn.classList.add(className);
  btn.textContent = textContent;
  btn.setAttribute('data-testid', 'menuButton');
  btn.addEventListener('click', function () {
    for (let item of this.parentNode.children) {
      item.classList.remove('active');
    }
    this.classList.add('active');
    callback(this);
  });
  return btn;
};

const mainMenu = (parent, callback) => {
  if (typeof parent !== 'object') {
    throw new Error("First argument isn't an object!");
  }
  if (typeof callback !== 'function') {
    throw new Error("Callback argument isn't a function!");
  }

  //Created nav container
  const menuContainer = document.createElement('nav');
  menuContainer.classList.add('swquiz-menu');
  menuContainer.id = 'menuContainer';
  menuContainer.setAttribute('data-testid', 'menuContainer');

  const btnPeople = createButton('swquiz-menu-button', 'People', callback);
  btnPeople.classList.add('active');
  menuContainer.appendChild(btnPeople);
  menuContainer.appendChild(
    createButton('swquiz-menu-button', 'Vehicles', callback),
  );
  menuContainer.appendChild(
    createButton('swquiz-menu-button', 'Starships', callback),
  );

  parent.appendChild(menuContainer);
};
export { mainMenu };
