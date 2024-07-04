import {
    LitElement,
    html,
  } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";
  
  export class MyElement extends LitElement {
    static properties = {
      count: { type: Number },
    };
  
    constructor() {
      super();
      this.state = {
        phase: 'normal',
        count: 0,
        
      };
    }
  
    updatePhase() {
      if (this.state.count >= 3) {
        this.state.phase = 'maximumReached';
      } else if (this.state.count <= -2) {
        this.state.phase = 'minimumReached';
      } else {
        this.state.phase = 'normal';
      }
    }
  
    render() {
      return html`
        <p>Click count: ${this.state.count}</p>
        <div>
          <button
            @click="${this.subtract}"
            ?disabled="${this.state.phase === 'minimumReached'}"
          >
            -
          </button>
          <button @click="${this.reset}">reset</button>
          <button
            @click="${this.increment}"
            ?disabled="${this.state.phase === 'maximumReached'}"
          >
            +
          </button>
        </div>
      `;
    }
  
    subtract() {
      this.state.count--;
      this.updatePhase();
      this.requestUpdate();
    }
  
    reset() {
      this.state.count = 0;
      this.updatePhase();
      this.requestUpdate();
    }
  
    increment() {
      this.state.count++;
      this.updatePhase();
      this.requestUpdate();
    }
  }
  
  customElements.define("my-element", MyElement);