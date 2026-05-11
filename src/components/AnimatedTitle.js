/**
 * AnimatedTitle Component
 * Renders reactive and animated titles.
 */
class AnimatedTitle extends HTMLElement {
    static get observedAttributes() {
        return ["main-text", "sub-text"];
    }

    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.render();
        }
    }

    render() {
        const mainText = this.getAttribute("main-text") || "El respeto no se negocia";
        const subText = this.getAttribute("sub-text") || "¡Pará ya de acosar!";

        this.innerHTML = `
            <style>
                .title-container {
                    text-align: center;
                    padding: 0 20px;
                    margin: 10px 0;
                    z-index: 5;
                    position: relative;
                }

                .title-main {
                    color: var(--ucr-purple);
                    font-size: clamp(1rem, 2.5vw, 1.3rem);
                    font-weight: 600;
                    margin-bottom: 8px;
                    opacity: 0;
                    animation: fadeInUp 0.8s ease forwards;
                    display: inline-block;
                    position: relative;
                }

                .title-main::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 50%;
                    width: 0;
                    height: 2px;
                    background: var(--ucr-blue);
                    transition: var(--transition-smooth);
                    transform: translateX(-50%);
                }

                .title-container:hover .title-main::after {
                    width: 80%;
                }

                .title-sub {
                    color: var(--ucr-purple);
                    font-size: clamp(1.5rem, 5vw, 2.2rem);
                    font-weight: 900;
                    text-transform: uppercase;
                    line-height: 1.1;
                    opacity: 0;
                    animation: fadeInUp 1s ease 0.2s forwards;
                    transition: var(--transition-smooth);
                    display: block;
                }

                .title-sub:hover {
                    color: var(--ucr-white);
                    text-shadow: 0 4px 15px rgba(106, 42, 140, 0.4);
                    transform: scale(1.05) translateY(-2px);
                    -webkit-text-stroke: 1px var(--ucr-purple);
                }
            </style>
            <div class="title-container">
                <h2 class="title-main">${mainText}</h2>
                <h1 class="title-sub">${subText}</h1>
            </div>
        `;
    }
}

customElements.define("animated-title", AnimatedTitle);
export default AnimatedTitle;
