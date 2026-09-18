import { Collections, Features, Footer, Header, Hero, HowItWorks } from './components.js';

const app = document.querySelector('#app');

app.innerHTML = [Header(), Hero(), HowItWorks(), Features(), Collections(), Footer()].join('');

// This is intentionally only a visual placeholder. Wallet and contract
// integrations will be added in a later step, after their interfaces are chosen.
document.querySelectorAll('[data-coming-soon]').forEach((button) => {
  button.addEventListener('click', () => {
    const feature = button.dataset.comingSoon;
    window.alert(`${feature} will be available in a future version.`);
  });
});
