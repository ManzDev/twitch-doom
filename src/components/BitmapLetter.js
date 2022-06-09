class BitmapLetter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      .letter {
        background: url(fonts/big-numbers.png);
        width: 28px;
        height: 33px;
      }
      .letter-1 { background-position-x: -28px; width: 26px; }
      .letter-2 { background-position-x: -54px; width: 26px; }
      .letter-3 { background-position-x: -84px; width: 27px; }
      .letter-4 { background-position-x: -112px; }
      .letter-5 { background-position-x: -142px; width: 31px; }
      .letter-6 { background-position-x: -174px; }
      .letter-7 { background-position-x: -203px; width: 29px; }
      .letter-8 { background-position-x: -233px;  }
      .letter-9 { background-position-x: -263px; }
      .letter-percent { background-position-x: -294px; }
    `;
  }

  connectedCallback() {
    this.letter = this.getAttribute("letter");
    this.classNameLetter = this.letter.replace("%", "percent");
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${BitmapLetter.styles}</style>
    <div class="letter letter-${this.classNameLetter}"></div>`;
  }
}

customElements.define("bitmap-letter", BitmapLetter);
