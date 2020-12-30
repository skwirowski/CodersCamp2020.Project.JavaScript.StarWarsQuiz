export const mainMenu = () =>{
    const menuContainer = document.createElement("nav");
    menuContainer.classList.add("swquiz-menu");

    const buttons = [
        document.createElement("button"),
        document.createElement("button"),
        document.createElement("button")
    ];

    buttons.forEach(button=>{
        button.classList.add("swquiz-menu-button");
        menuContainer.appendChild(button);
    });

    const names = ["People","Vehicles","Starships"];

    for(const name of names){
        buttons[names.indexOf(name)].textContent = name;
    }

    buttons[0].classList.add("active");

    document.body.appendChild(menuContainer);
   
}

