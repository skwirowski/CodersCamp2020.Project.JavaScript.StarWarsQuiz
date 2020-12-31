const mainMenu = (parent,callback) =>{
    if(typeof parent !== "object"){
        throw new Error("First argument isn't an object!");
    }
    if(typeof callback !== "function"){
        throw new Error("Callback argument ins't a function!");
    }

    //Created nav container
    const menuContainer = document.createElement("nav");
    menuContainer.classList.add("swquiz-menu");
    menuContainer.id = 'menuContainer';
    menuContainer.setAttribute("data-testid","menuContainer")
    //Created button array
    const buttons = [
        document.createElement("button"),
        document.createElement("button"),
        document.createElement("button")
    ];
    //Assigned class to each button and appended them inside of menuContainer element
    buttons.forEach(button=>{
        button.classList.add("swquiz-menu-button");
        button.setAttribute("data-testid","menuButton");
        menuContainer.appendChild(button);
    });
    //Created array of button values
    const values = ["People","Vehicles","Starships"];
    //Assigned values to buttons
    for(const value of values){
        buttons[values.indexOf(value)].textContent = value;
    }
    //Added class active to first button
    buttons[0].classList.add("active");

    //Printing button inside of 'parent' element
    parent.appendChild(menuContainer);
    //Added eventListener on click to each button
    buttons.forEach(e=>e.addEventListener("click",()=>{
       buttons.forEach(e=>e.classList.remove("active"));
       e.classList.add("active");
       callback(e); //calls function with button as argument
    }));
}
export {mainMenu};

