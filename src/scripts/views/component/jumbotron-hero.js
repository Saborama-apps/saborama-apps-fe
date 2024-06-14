class JumbotronHero extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = ` 
    <article>
    <picture>
     <source media="(max-width: 600px)" srcset="./images/heros/banner-small.jpg" >
      <div class="relative lg:h-[1000px] h-[300px] w-full text-center">
      <img  class="jumbotron absolute" src="./images/heros/banner-large.jpg" alt="web image">
      <p class="tentang absolute text-white lg:text-5xl text-3xl w-full lg:top-[500px] top-[110px]">Selamat Datang Di <span class="text-[#ABA944]">SABORAMA</span><br>Sajian Budaya Lokal Melalui Kuliner</p>
      </div>
    </picture>
    </article>
        `;
  }
}

customElements.define('jumbotron-hero', JumbotronHero);
