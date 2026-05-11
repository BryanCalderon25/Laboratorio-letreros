/**
 * FlyerQR Component
 * Renders the QR code section with hover effects.
 */
class FlyerQR extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                .qr-section {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 12px;
                    margin-top: 25px;
                    opacity: 0;
                    animation: fadeInUp 1s ease 0.4s forwards;
                    z-index: 10;
                    position: relative;
                }

                .qr-text {
                    font-size: clamp(0.7rem, 1.5vw, 0.85rem);
                    color: var(--ucr-purple);
                    font-weight: 600;
                    background: rgba(255, 255, 255, 0.3);
                    padding: 4px 12px;
                    border-radius: 20px;
                    backdrop-filter: blur(4px);
                }

                .qr-frame {
                    background: white;
                    padding: 8px;
                    border-radius: 16px;
                    box-shadow: var(--shadow-premium);
                    transition: var(--transition-smooth);
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .qr-frame:hover {
                    transform: scale(1.1) rotate(2deg);
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
                }

                .qr-img {
                    width: clamp(80px, 20vw, 120px);
                    height: auto;
                    display: block;
                    border-radius: 8px;
                }
            </style>
            <div class="qr-section">
                <p class="qr-text">¿Necesitas ayuda? Escanea aquí</p>
                <div class="qr-frame">
                    <img src="./assets/qr.png" alt="Código QR UCR" class="qr-img">
                </div>
            </div>
        `;
    }
}

customElements.define("flyer-qr", FlyerQR);
export default FlyerQR;
