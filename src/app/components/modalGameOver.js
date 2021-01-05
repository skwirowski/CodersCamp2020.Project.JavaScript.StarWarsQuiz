const modalGameOver = (playerAnswers, computerAnswers, answers) =>{
    const modal = document.createElement("section");
    modal.classList.add("swquiz-modal");

    document.querySelector("#swquiz-app").appendChild(modal);
}


export { modalGameOver }