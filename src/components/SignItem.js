/**
 * SignItem Component
 * Renders an individual row in the sign board.
 */
class SignItem extends HTMLElement {
    static get observedAttributes() {
        return ["label"];
    }

    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        const label = this.getAttribute("label") || "Ubicación";

        this.innerHTML = `
            <style>
                .sign-row {
                    padding: clamp(12px, 3vh, 18px) 20px;
                    border-bottom: 1px solid rgba(255,255,255,0.1);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    cursor: pointer;
                    position: relative;
                    overflow: hidden;
                    color: white;
                    text-decoration: none;
                    font-weight: 500;
                    letter-spacing: 0.5px;
                }

                .sign-row:hover {
                    background: rgba(255, 255, 255, 0.08);
                    padding-left: 25px;
                    color: var(--ucr-blue);
                }

                .sign-row::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
                    transition: 0.5s;
                }

                .sign-row:hover::before {
                    left: 100%;
                }

                .arrow {
                    font-size: 1.2rem;
                    transition: var(--transition-smooth);
                    display: inline-block;
                }

                .sign-row:hover .arrow {
                    transform: translateX(8px);
                    animation: moverFlecha 0.6s infinite alternate;
                }

                @keyframes moverFlecha {
                    from { transform: translateX(5px); }
                    to { transform: translateX(12px); }
                }
            </style>
            <div class="sign-row">
                <span class="label">${label}</span>
                <span class="arrow">➜</span>
            </div>
        `;
    }
}

customElements.define("sign-item", SignItem);
export default SignItem;
