/**
 * UCRFlyer Component
 * Main container that assembles all flyer parts.
 */
class UCRFlyer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                .flyer-wrapper {
                    width: clamp(320px, 90vw, 420px);
                    aspect-ratio: 400 / 700;
                    background-color: var(--ucr-yellow);
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    border-radius: 24px;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                    transition: var(--transition-smooth);
                    border: 8px solid white;
                }

                .flyer-wrapper:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.6);
                }

                .flyer-main {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    z-index: 5;
                }

                /* Decorative element */
                .flyer-wrapper::before {
                    content: '';
                    position: absolute;
                    top: -50px;
                    right: -50px;
                    width: 150px;
                    height: 150px;
                    background: var(--ucr-blue);
                    border-radius: 50%;
                    opacity: 0.2;
                    filter: blur(40px);
                }
            </style>
            <article class="flyer-wrapper">
                <flyer-header></flyer-header>
                
                <main class="flyer-main">
                    <animated-title 
                        main-text="El respeto no se negocia" 
                        sub-text="¡Pará ya de acosar!">
                    </animated-title>
                    
                    <flyer-qr></flyer-qr>
                </main>

                <people-section></people-section>
                <flyer-footer></flyer-footer>
            </article>
        `;
    }
}

customElements.define("ucr-flyer", UCRFlyer);
export default UCRFlyer;
