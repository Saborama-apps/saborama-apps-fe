class NavBar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = ` 
    <header class="app-bar">
    <div class="app-bar__menu">
    <button id="hamburgerButton" class="hamburgerButton">☰</button>
  </div>
  <div class="app-bar__brand">
  <img class="image-brand w-36 h-24 mr-5" src="./images/heros/saboramaa.png" alt="web image">
  </div>
  <nav id="navigationDrawer" class="app-bar__navigation mt-3">
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
