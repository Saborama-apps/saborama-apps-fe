class NavBar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = ` 
    <header class="app-bar">
    <div class="app-bar__menu">
    <button id="hamburgerButton" class="hamburgerButton">☰</button>
  </div>
  <div class="app-bar__brand">
  <img class="image-brand" src="./images/heros/saborama.png" alt="web image" style="width: 40px; margin-right: 13px;">
    <div class="name_brand">SABORAMA</div>
  </div>
  <nav id="navigationDrawer" class="app-bar__navigation">
    <ul>
      <li><a href="#/home">Home</a></li>
      <li><a href="#/daerah">Provinsi</a></li>
      <li><a href="#/favorite">Favorite</a></li>
    </ul>
  </nav>
  </header>
      `;
  }
}

customElements.define('nav-bar', NavBar);
