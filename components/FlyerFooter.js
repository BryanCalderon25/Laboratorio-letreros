/**
 * FlyerFooter Component
 * Renders the institucional footer.
 */
class FlyerFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                .flyer-footer {
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    background: rgba(13, 44, 90, 0.85);
                    backdrop-filter: blur(8px);
                    color: white;
                    padding: 12px 10px;
                    z-index: 20;
                    border-top: 1px solid rgba(255,255,255,0.1);
                }

                .footer-content {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: clamp(5px, 2vw, 15px);
                    font-size: clamp(0.55rem, 1.5vw, 0.7rem);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .footer-brand {
                    font-weight: 800;
                    color: var(--ucr-blue);
                }

                .footer-sep {
                    width: 1px;
                    height: 12px;
                    background: rgba(255,255,255,0.3);
                }

                .footer-motto {
                    font-weight: 500;
                    opacity: 0.9;
                }
            </style>
            <footer class="flyer-footer">
                <div class="footer-content">
                    <span class="footer-brand">UCR</span>
                    <div class="footer-sep"></div>
                    <span class="footer-motto">LIBRE DE ACOSO SEXUAL</span>
                    <div class="footer-sep"></div>
                    <span class="footer-motto">Sede de Guanacaste</span>
                </div>
            </footer>
        `;
    }
}

customElements.define("flyer-footer", FlyerFooter);
export default FlyerFooter;
