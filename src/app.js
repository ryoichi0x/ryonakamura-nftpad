import { Collections, Features, Footer, Header, Hero, HowItWorks } from './components.js';
import { Dashboard, bindDashboard } from './dashboard.js';

const app = document.querySelector('#app');

function LandingPage() {
  return [Header(), Hero(), HowItWorks(), Features(), Collections(), Footer()].join('');
}

function render() {
  const dashboard = window.location.hash === '#dashboard';
  app.innerHTML = dashboard ? Dashboard() : LandingPage();
  if (dashboard) bindDashboard();
  else document.querySelectorAll('[data-coming-soon]').forEach((button) => button.addEventListener('click', () => window.alert(`${button.dataset.comingSoon} will be available in a future version.`)));
}

window.addEventListener('hashchange', render);
render();
