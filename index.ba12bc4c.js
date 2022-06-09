const p=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}};p();class a extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.letter=this.getAttribute("letter"),this.classNameLetter=this.letter.replace("%","percent"),this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${a.styles}</style>
    <div class="letter letter-${this.classNameLetter}"></div>`}}customElements.define("bitmap-letter",a);class l extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        display: flex;
        transform-origin: 100% 0;
        transform: scale(1.75);
        image-rendering: pixelated;
      }
    `}connectedCallback(){this.text=this.getAttribute("text"),this.render()}getComponentsByLetter(){return this.text.split("").map(r=>`<bitmap-letter letter="${r}"></bitmap-letter>`).join("")}render(){this.shadowRoot.innerHTML=`
    <style>${l.styles}</style>
    ${this.getComponentsByLetter()}
    `}}customElements.define("bitmap-font",l);class c extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${c.styles}</style>`}}customElements.define("doom-hero",c);class d extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.name=this.getAttribute("name"),this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${d.styles}</style>
    <div class="name">${this.name}</div>
    <div class="enemy-container">
      <div class="enemy"></div>
    </div>`}}customElements.define("doom-enemy",d);const m=document.querySelector(".game"),u=n=>{const o=n.length,r=n[Math.floor(Math.random()*o)],s=document.createElement("doom-enemy");s.setAttribute("name",r);const e=~~(Math.random()*1024);return~~(Math.random()*2)===1&&s.setAttribute("type","melee"),s.setAttribute("style",`--x: ${e}px`),s};fetch("http://localhost:9999/api/users/").then(n=>n.json()).then(n=>{for(let o=0;o<3;o++){const r=u(n);m.appendChild(r)}});
