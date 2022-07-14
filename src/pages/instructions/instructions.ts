export function initInstructions(params) {
    const div = document.createElement("div");
    const style = document.createElement("style");
    div.innerHTML = `
    <text-custom text="p">Presioná jugar
y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</text-custom>
    <button-custom>Jugar!</button-custom>
    <hands-custom></hands-custom>`;
    //@ts-ignore
    const imageURL = require("url:../../images/fondo.svg");
    //@ts-ignore
    style.textContent = `
    .root{
    background-image:url(${imageURL});
    }
    @media(min-width:769px){    
    .root{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    }
    }`;
    div.appendChild(style);
    //eventListener click Button
    setTimeout(() => {
        const buttonWelcomeEl = document.querySelector("button-custom");
        buttonWelcomeEl?.addEventListener("click", (event) => {
            event.preventDefault();
            params.goTo("/play");
        });
    }, 0);
    return div;
}
