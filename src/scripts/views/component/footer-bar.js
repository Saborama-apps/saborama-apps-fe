class FooterBar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = ` 
      <p>
      Copyright © 2024 - Saborama Apps
    </p>
            `;
  }
}

customElements.define('footer-bar', FooterBar);
