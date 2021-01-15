import { doc } from "prettier";

export const modalWindow = (component, close) => {
    if(!(component instanceof HTMLElement)) {
        throw new Error('First argument should be a HTML element');
    }

    if(typeof close !== 'function') {
        throw new Error('Second argument should be a function');
    }

    const app = document.getElementById('swquiz-app');
    const container = document.createElement('div');
    container.setAttribute('id', 'modalWindow');
    container.setAttribute('class', 'modalWindow-container');
    container.appendChild(component);
    app.appendChild(container);

    if(container) {
        //document.body.style.opacity = 1;
        document.body.classList.add('darkerBody');
    } else {
        document.body.classList.remove('darkerBody');
    }
    container.onclick = (e) => {
        e.stopPropagation();
        if(e.target === container) {
            close();
        }
    }  

    return container;
}