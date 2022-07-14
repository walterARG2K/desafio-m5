export function textComponent() {
    class Text extends HTMLElement {
        constructor() {
            super();
            this.render();
        }
        render() {
            //creating Elements
            const textType = this.getAttribute("text") == "h1" ? "h1" : "p";
            const shadow = this.attachShadow({ mode: "open" });
            const style = document.createElement("style");
            const textElement = document.createElement(textType);

            //adding styles
            style.textContent = `
            .title{ 
                font-family:'Alegreya SC';
                font-size:65px;
                letter-spacing: 3px;
                color:#009048;
                padding:0 61px;
                margin-top: 70px;
                text-align:center;
            }
            @media(min-width:769px){    
                .title{
                    text-align:center;
                }
                .paragraph{ 
                    text-align:center;
                    max-width:500px;
                }
            }
            .paragraph{ 
                font-family:"Special Elite";
                font-size:38px;
                font-weight:bold;
                text-align:center;
                padding:0 27px;
                margin-top: 100px;
            }
            `;

            //adding attributes
            textElement.classList.add(textType == "h1" ? "title" : "paragraph");
            textElement.textContent = this.textContent;

            //appendchilds
            shadow.appendChild(style);
            shadow.appendChild(textElement);
        }
    }
    customElements.define("text-custom", Text);
}
