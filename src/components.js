const arrow = `
  <svg viewBox="0 0 16 16" aria-hidden="true">
    <path d="M3 8h9M8.5 3.5 13 8l-4.5 4.5" />
  </svg>
`;

export function Header() {
  return `
    <header class="site-header container">
      <a class="brand" href="#top" aria-label="RyoNakamura NFTPad home">
        <span class="brand-mark">RN</span>
        <span>RyoNakamura <em>NFTPad</em></span>
      </a>
      <nav class="desktop-nav" aria-label="Main navigation">
        <a href="#how-it-works">How it works</a>
        <a href="#features">Features</a>
        <a href="#collections">Collections</a>
      </nav>
      <button class="text-button" type="button" data-coming-soon="Wallet connection">Connect wallet <span>↗</span></button>
    </header>
  `;
}

export function Hero() {
  return `
    <main id="top">
      <section class="hero container section-grid">
        <div class="hero-copy">
          <p class="eyebrow"><span class="pulse"></span> The creator launchpad</p>
          <h1>Make your mark.<br /><span>Keep it onchain.</span></h1>
          <p class="hero-description">Where ideas become collections, and creations live forever onchain.</p>
          <div class="hero-actions">
            <button class="button button-primary" type="button" data-coming-soon="Collection creation">Create Collection ${arrow}</button>
            <a class="button button-secondary" href="#collections">Explore Collections ${arrow}</a>
          </div>
        </div>
        <div class="hero-art" aria-label="Abstract generative artwork preview" role="img">
          <div class="orb orb-one"></div>
          <div class="orb orb-two"></div>
          <div class="orbit orbit-one"></div>
          <div class="orbit orbit-two"></div>
          <div class="art-label"><span>01</span><span>ORIGIN / 001</span></div>
        </div>
      </section>
  `;
}

export function HowItWorks() {
  const steps = [
    ['01', 'Shape your vision', 'Start with an idea, then define the story, style, and details that make your collection yours.'],
    ['02', 'Build your collection', 'Organize your artwork and prepare a collection experience your community will want to discover.'],
    ['03', 'Launch onchain', 'When you are ready, publish your collection and let your work become part of the permanent record.'],
  ];
  return `
    <section id="how-it-works" class="container content-section">
      <div class="section-heading"><p class="eyebrow">Simple by design</p><h2>From first sketch<br /><span>to forever.</span></h2></div>
      <div class="steps">${steps.map(([number, title, text]) => `<article class="step"><span class="step-number">${number}</span><h3>${title}</h3><p>${text}</p></article>`).join('')}</div>
    </section>
  `;
}

export function Features() {
  return `
    <section id="features" class="feature-band">
      <div class="container feature-layout">
        <div class="section-heading"><p class="eyebrow">For the ones creating</p><h2>Your work.<br /><span>Your rules.</span></h2></div>
        <div class="feature-list">
          <div class="feature-item"><span class="feature-icon">✦</span><div><h3>Creator-first tools</h3><p>A focused space to turn a creative direction into a collection without unnecessary friction.</p></div></div>
          <div class="feature-item"><span class="feature-icon">⌁</span><div><h3>Made for discovery</h3><p>Present your work with clarity and give collectors a place to find what feels meaningful.</p></div></div>
          <div class="feature-item"><span class="feature-icon">◌</span><div><h3>Ready for onchain</h3><p>A future-ready foundation designed to connect with wallets and smart contracts when the time is right.</p></div></div>
        </div>
      </div>
    </section>
  `;
}

export function Collections() {
  return `
    <section id="collections" class="container content-section collections-section">
      <div class="collection-heading"><div class="section-heading"><p class="eyebrow">The gallery</p><h2>Made to be<br /><span>discovered.</span></h2></div><p class="muted-copy">A home for ideas that deserve more than a moment.</p></div>
      <div class="empty-gallery"><div class="empty-symbol">+</div><h3>The gallery is taking shape.</h3><p>Featured collections will appear here as creators begin their journey.</p><button class="button button-secondary" type="button" data-coming-soon="Collection creation">Start creating ${arrow}</button></div>
    </section>
  `;
}

export function Footer() {
  return `
    </main>
    <footer class="site-footer"><div class="container footer-inner"><a class="brand" href="#top"><span class="brand-mark">RN</span><span>RyoNakamura <em>NFTPad</em></span></a><p>Built for creators. Designed for forever.</p><span class="footer-note">© 2024 NFTPad</span></div></footer>
  `;
}
