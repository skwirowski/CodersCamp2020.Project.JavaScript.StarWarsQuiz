function createIconHeader(text, iconTestId, iconPath, iconAlt) {
    let div = document.createElement('div');
    div.className = 'icon-header';
    div.setAttribute('data-testid', 'icon-header');
    div.innerHTML = `
          <img data-testid='${iconTestId}' src="${iconPath}" alt="${iconAlt}">
          <p>${text}</p>
      `;
    return div;
  }

  export {createIconHeader};