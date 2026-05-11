/**
 * FlyerHeader Component
 * Renders the top logo section of the flyer.
 */
class FlyerHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                .flyer-header {
                    padding: clamp(20px, 5vh, 40px) 20px;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 10px;
                }

                .logo-box {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    animation: fadeInRight 0.8s cubic-bezier(0.22, 1, 0.36, 1);
                }

                .la-sede {
                    background-color: var(--ucr-blue);
                    color: white;
                    padding: 8px 24px;
                    font-weight: 800;
                    font-size: clamp(1.2rem, 3vw, 1.8rem);
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    box-shadow: var(--shadow-premium);
                    transition: var(--transition-smooth);
                    cursor: default;
                }

                .la-sede:hover {
                    transform: scale(1.05) rotate(-1deg);
                    background-color: var(--ucr-purple);
                }

                .te-acompana {
                    background-color: var(--ucr-purple);
                    color: white;
                    padding: 6px 20px;
                    font-weight: 700;
                    font-size: clamp(1rem, 2vw, 1.4rem);
                    transform: rotate(-3deg);
                    margin-top: -5px;
                    box-shadow: var(--shadow-premium);
                    transition: var(--transition-smooth);
                    cursor: default;
                }

                .te-acompana:hover {
                    transform: rotate(0deg) scale(1.1);
                    background-color: var(--ucr-blue);
                }
            </style>
            <header class="flyer-header">
                <div class="logo-box">
                    <span class="la-sede">LA SEDE</span>
                    <span class="te-acompana">TE ACOMPAÑA</span>
                </div>
            </header>
        `;
    }
}

customElements.define("flyer-header", FlyerHeader);
export default FlyerHeader;
