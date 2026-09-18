import { Collections, Features, Footer, Header, Hero, HowItWorks } from './components.js';
import { Dashboard } from './dashboard.js';

const app = document.querySelector('#app');

function LandingPage() {
  return [Header(), Hero(), HowItWorks(), Features(), Collections(), Footer()].join('');
}

function render() {
  app.innerHTML = window.location.hash === '#dashboard' ? Dashboard() : LandingPage();

  if (window.location.hash === '#dashboard') {
    window.dispatchEvent(new CustomEvent('dashboard-ready'));
  } else {
    document.querySelectorAll('[data-coming-soon]').forEach((button) => {
      button.addEventListener('click', () => {
        window.alert(`${button.dataset.comingSoon} will be available in a future version.`);
      });
    });
  }
}

window.addEventListener('hashchange', render);
render();
