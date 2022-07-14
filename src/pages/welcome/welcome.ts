export function initWelcome(params) {
    const div = document.createElement("div");
    const style = document.createElement("style");
    div.innerHTML = `
    <text-custom text="h1">Piedra, Papel ó Tijera </text-custom>
    <button-custom>Empezar</button-custom>
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
            params.goTo("/instructions");
        });
    }, 0);
    return div;
}
