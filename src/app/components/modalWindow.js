export const modalWindow = (component, closeWindow) => {
    if(!(component instanceof HTMLElement)) {
        throw new Error('First argument should be a HTML element');
    }

    if(typeof closeWindow !== 'function') {
        throw new Error('Second argument should be a function');
    }

    const container = document.createElement('div');
    container.setAttribute('id', 'modalWindow');
    container.setAttribute('class', 'modalWindow-container');
    container.appendChild(component);


    return container;
}