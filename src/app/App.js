import {mainMenu} from "./components/mainMenu.js";

export const App = ({options}) => {
    const getData = (element) =>{
        return element;
    }
    mainMenu(document.body,getData);

    
}


