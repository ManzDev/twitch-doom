class DoomEnemy extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        display: block;
        width: 175px;
        transform: translate(var(--x, 100px), var(--y, 400px));
        position: absolute;
      }

      .name {
        font-family: EnterCommand, monospace;
        font-size: 32px;
        color: #fff;
        text-shadow:
          2px 0 0 #000,
          0 2px 0 #000,
          -2px 0 0 #000,
          0 -2px 0 #000;
        text-align: center;
      }

      .enemy-container {
        transform: scaleX(1);
      }

      .enemy {
        width: 52px;
        height: 63px;
        background: url(enemies/imp.png);
        transform-origin: 0 0;
        transform: scale(var(--scale, 3));
        image-rendering: pixelated;
      }

      :host([type="melee"]) .enemy {
        background: url(enemies/melee.png);
      }
    `;
  }

  connectedCallback() {
    this.name = this.getAttribute("name");
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${DoomEnemy.styles}</style>
    <div class="name">${this.name}</div>
    <div class="enemy-container">
      <div class="enemy"></div>
    </div>`;
  }
}

customElements.define("doom-enemy", DoomEnemy);
