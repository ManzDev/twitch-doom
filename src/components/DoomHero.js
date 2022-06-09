class DoomHero extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        display: block;
        background: url(hud/hero-face.png);
        width: 132px;
        height: 132px;
        transform: translate(4px, -6px);
        animation: view 3s steps(1) alternate infinite;
      }

      :host([life="75"]) { background-position-y: -140px; }
      :host([life="50"]) { background-position-y: -280px; }
      :host([life="25"]) { background-position-y: -420px; }
      :host([life="0"]) { background-position-y: -560px; }

      @keyframes view {
        0% {
          background-position-x: 0;
        }

        33% {
          background-position-x: -132px;
        }

        66% {
          background-position-x: -264px;
        }
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${DoomHero.styles}</style>`;
  }
}

customElements.define("doom-hero", DoomHero);
