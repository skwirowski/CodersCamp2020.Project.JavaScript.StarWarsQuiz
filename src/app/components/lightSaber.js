let MAX_TIME = 0;
const MAX_WIDTH = 75;


export const lightSaber = (maxTime) => {
    const saber = `<div class="light-saber-container" data-testid="light-saber-container">
    <img src="../../../static/assets/ui/LightsaberHandle.png" alt="saber"/><div class="light" data-testid="light"></div></div>`;
    MAX_TIME = maxTime;

    document.querySelector('#swquiz-app .swquiz-body').innerHTML += saber;
}

export const updateSaber = (time) => {
    const light = document.querySelector('.light-saber-container .light');
    if (time === 0) light.style.boxShadow = 'none';
    const actualWidth = (MAX_WIDTH * time/MAX_TIME);
    light.style.width = actualWidth + '%';
}