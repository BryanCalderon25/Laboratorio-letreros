/**
 * PeopleSection Component
 * Renders the students image at the bottom.
 */
class PeopleSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                .people-container {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: flex-end;
                    pointer-events: none;
                    z-index: 1;
                    overflow: hidden;
                }

                .person-img {
                    width: 95%;
                    max-height: 65%;
                    object-fit: contain;
                    transform: translateY(100%);
                    animation: slideUpPerson 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.6s forwards;
                    filter: drop-shadow(0 10px 20px rgba(0,0,0,0.2));
                }

                /* Add a subtle parallax effect on parent move if needed, 
                   but for now just keeping it clean */
            </style>
            <div class="people-container">
                <img src="./assets/personas.png" alt="Personas UCR" class="person-img">
            </div>
        `;
    }
}

customElements.define("people-section", PeopleSection);
export default PeopleSection;
