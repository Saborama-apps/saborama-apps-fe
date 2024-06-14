/* eslint-disable no-underscore-dangle */
import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

async renderPage() {
  const url = UrlParser.parseActiveUrlWithCombiner();
  console.log(`Parsed URL: ${url}`); // Debugging line
  const page = routes[url];
  console.log(`Page object:`, page); // Debugging line

  if (page) {
    this._content.innerHTML = await page.render();
    await page.afterRender();
  } else {
    this._content.innerHTML = '<h2>Page not found</h2>';
    console.error(`No route found for URL: ${url}`);
  }

  const skipLink = document.querySelector('.skip-link');
  const mainContent = document.querySelector('#mainContent');
  skipLink.addEventListener('click', (e) => {
    e.preventDefault();
    mainContent.scrollIntoView({ behavior: 'smooth' });
    skipLink.blur();
  });
}

}

export default App;
