import { LitElement, html, css } from "lit";

class SampleButton extends LitElement {
  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      margin-top: 20px;
    }

    button {
      --shadow-color: #000;
      font-family: "Open Sans", sans-serif;
      font-size: 16px;
      letter-spacing: 2px;
      text-decoration: none;
      text-transform: uppercase;
      color: #000;
      cursor: pointer;
      border: 3px solid;
      padding: 0.25em 0.5em;
      box-shadow: 1px 1px 0px 0px #000, 2px 2px 0px 0px #000,
        3px 3px 0px 0px #000, 4px 4px 0px 0px #000, 5px 5px 0px 0px #000;
      position: relative;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
    }
    button:active {
      box-shadow: 0px 0px 0px 0px;
      top: 5px;
      left: 5px;
    }
  `;

  static properties = {
    buttonText: { type: String },
    onClick: { type: Function },
  };

  render() {
    return html`<button class="button" @click=${this.onClick}>
      ${this.buttonText}
    </button>`;
  }
}

customElements.define("sample-button", SampleButton);
