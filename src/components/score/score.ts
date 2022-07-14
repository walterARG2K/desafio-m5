export function scoreComponent() {
    class Score extends HTMLElement {
        constructor() {
            super();
            this.render();
        }
        render() {
            //creating Elements
            const shadow = this.attachShadow({ mode: "open" });
            const style = document.createElement("style");
            const scoreElement = document.createElement("p");
            const playerVsComputerScore = document.createElement("p");
            const containerElement = document.createElement("div");
            //adding styles
            style.textContent = `
            .score{ 
                font-family:'Secular One';
                font-size:24px;
                margin:0
            }

            .content-score{ 
                font-family:'Secular One';
                font-size:24px;
                text-align:right;
                margin:0;
                padding:0 20px 0 100px;
            }

            @media(min-width:769px){    
                .content-score{ 
                    padding: 0 30px 0 200px;
                }
            }
            .content-score span{    
            display:block;
            }

            .container{ 
                border: solid 6px;
                text-align: center;
                margin: 15px 50px;
                background-color: #fff;
                border-radius: 5px;
            }
            @media(min-width:769px){    
                .container{ 
                    margin:40px 50px;
                }
            }
            `;
            this.setAttribute("style", "display: flex;flex-direction: column;align-items: center;");

            //adding attributes
            scoreElement.classList.add("score");
            scoreElement.textContent = this.textContent;
            let scoreUser = localStorage.getItem("Vos") ? localStorage.getItem("Vos") : "0";
            let scoreComputer = localStorage.getItem("maquina")
                ? localStorage.getItem("maquina")
                : "0";

            playerVsComputerScore.innerHTML = `<p class="content-score">Vos: ${scoreUser}<span>Máquina: ${scoreComputer}</span></p>`;
            containerElement.classList.add("container");
            //appendchilds
            containerElement.appendChild(scoreElement);
            containerElement.appendChild(playerVsComputerScore);
            shadow.appendChild(style);
            shadow.appendChild(containerElement);
        }
    }
    customElements.define("score-custom", Score);
}
