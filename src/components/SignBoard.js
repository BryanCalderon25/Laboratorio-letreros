/**
 * SignBoard Component
 * Renders the directional sign board.
 */
class SignBoard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                .sign-board-container {
                    width: clamp(280px, 80vw, 360px);
                    background: linear-gradient(145deg, #0d2c5a, #071935);
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: var(--shadow-premium);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    animation: fadeInUp 1s ease forwards;
                }

                .sign-footer {
                    text-align: center;
                    padding: 15px;
                    background: #f1f5f9;
                    color: var(--ucr-dark);
                    font-weight: 900;
                    letter-spacing: 4px;
                    font-size: 1.1rem;
                    transition: var(--transition-smooth);
                    border-top: 4px solid var(--ucr-blue);
                }

                .sign-board-container:hover .sign-footer {
                    background: var(--ucr-blue);
                    color: white;
                }
            </style>
            <section class="sign-board-container">
                <sign-item label="Aulas 5, 6, 7"></sign-item>
                <sign-item label="Apoyo Informático"></sign-item>
                <sign-item label="Servidores"></sign-item>
                <sign-item label="Laboratorio 1 y 2"></sign-item>
                <sign-item label="Coordinación CIE"></sign-item>
                <div class="sign-footer">UCR</div>
            </section>
        `;
    }
}

customElements.define("sign-board", SignBoard);
export default SignBoard;
