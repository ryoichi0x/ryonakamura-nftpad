const navItems = [
  ['overview', 'Overview', '⌂'],
  ['create', 'Create Collection', '+'],
  ['collections', 'My Collections', '▦'],
  ['drafts', 'Drafts', '◇'],
  ['settings', 'Settings', '⚙'],
];

const DEFAULT_FORM = {
  name: '', symbol: '', description: '', supply: '', royalty: '', wallet: '', network: 'Ethereum — testnet-ready', artworkName: '', artworkUrl: '',
};

function escapeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character]));
}

function Navigation() {
  return `<aside class="dashboard-sidebar">
    <a class="brand" href="#top"><span class="brand-mark">RN</span><span>RyoNakamura <em>NFTPad</em></span></a>
    <p class="sidebar-label">Workspace</p>
    <nav class="dashboard-nav" aria-label="Creator dashboard navigation">
      ${navItems.map(([id, label, icon]) => `<button class="dashboard-nav-item ${id === 'create' ? 'active' : ''}" type="button" data-panel="${id}"><span>${icon}</span>${label}</button>`).join('')}
    </nav>
    <a class="back-link" href="#top">← Back to landing page</a>
  </aside>`;
}

function DashboardContent() {
  return `<section class="dashboard-content">
    <header class="dashboard-header"><div><p class="eyebrow">Creator workspace</p><h1>Build something<br /><span>meaningful.</span></h1></div><span class="preview-badge">Preview mode</span></header>
    <div class="dashboard-notice"><span>◌</span><p><strong>Presentation-only workspace.</strong> Your collection details stay in this browser. Nothing is deployed, minted, or sent to a wallet.</p></div>
    <div class="dashboard-panel" data-panel-content="create">
      <div class="panel-heading"><div><p class="eyebrow">Step 01 / Collection details</p><h2>Create Collection</h2></div><span class="panel-step">Draft</span></div>
      <form id="collection-form" novalidate>
        <div class="form-grid">
          <label>Collection name <input name="name" required placeholder="e.g. Fragments of Light" /><small data-error="name"></small></label>
          <label>Symbol <input name="symbol" required maxlength="10" placeholder="e.g. FOL" /><small data-error="symbol"></small></label>
          <label class="full-width">Description <textarea name="description" required rows="4" placeholder="Tell collectors what makes this collection special."></textarea><small data-error="description"></small></label>
          <label>Artwork <span class="optional">Optional for preview</span><input name="artwork" type="file" accept="image/*" /><small class="field-help">Choose an image from your device. It is not uploaded anywhere.</small></label>
          <label>Total supply <input name="supply" required type="number" min="1" step="1" placeholder="100" /><small data-error="supply"></small></label>
          <label>Royalty percentage <input name="royalty" required type="number" min="0" max="20" step="0.1" placeholder="5" /><small data-error="royalty"></small></label>
          <label>Creator wallet address <input name="wallet" required placeholder="Enter a future wallet address" /><small data-error="wallet"></small></label>
          <label>Network <select name="network"><option>Ethereum — testnet-ready</option><option>Polygon — testnet-ready</option><option>Cosmos — planned</option></select><small class="field-help">Network selection is informational only.</small></label>
        </div>
        <div class="form-actions"><button class="button button-primary" type="submit">Preview Collection <span>↗</span></button><button class="button button-secondary" type="button" id="save-draft">Save Local Draft</button></div>
        <p class="form-status" id="form-status" role="status"></p>
      </form>
    </div>
    <div class="dashboard-panel preview-panel" id="collection-preview"><div class="panel-heading"><div><p class="eyebrow">Step 02 / Review</p><h2>Your preview</h2></div><span class="preview-badge">Not deployed</span></div><div class="preview-card"><div class="preview-art" id="preview-art"><span>Artwork preview</span></div><div class="preview-copy"><p class="eyebrow" id="preview-symbol">SYMBOL</p><h3 id="preview-name">Your collection name</h3><p id="preview-description">Complete the form to see your collection preview here.</p><div class="preview-meta"><span><b id="preview-supply">—</b> supply</span><span><b id="preview-royalty">—</b> royalty</span><span id="preview-network">Network not selected</span></div></div></div></div>
  </section>`;
}

export function Dashboard() {
  return `<div class="dashboard-shell">${Navigation()}${DashboardContent()}</div>`;
}

function readForm(form) {
  const data = new FormData(form);
  return { name: data.get('name').trim(), symbol: data.get('symbol').trim().toUpperCase(), description: data.get('description').trim(), supply: data.get('supply'), royalty: data.get('royalty'), wallet: data.get('wallet').trim(), network: data.get('network'), artwork: form.elements.artwork.files[0] || null };
}

function validate(data) {
  const errors = {};
  ['name', 'symbol', 'description', 'wallet'].forEach((field) => { if (!data[field]) errors[field] = 'This field is required.'; });
  if (!data.supply || Number(data.supply) < 1 || !Number.isInteger(Number(data.supply))) errors.supply = 'Supply must be a whole number greater than zero.';
  if (data.royalty === '' || Number(data.royalty) < 0 || Number(data.royalty) > 20) errors.royalty = 'Royalty must be between 0% and 20%.';
  return errors;
}

function updatePreview(data) {
  document.querySelector('#preview-name').textContent = data.name || 'Your collection name';
  document.querySelector('#preview-symbol').textContent = data.symbol || 'SYMBOL';
  document.querySelector('#preview-description').textContent = data.description || 'Complete the form to see your collection preview here.';
  document.querySelector('#preview-supply').textContent = data.supply || '—';
  document.querySelector('#preview-royalty').textContent = data.royalty ? `${data.royalty}%` : '—';
  document.querySelector('#preview-network').textContent = data.network || 'Network not selected';
  const art = document.querySelector('#preview-art');
  if (data.artwork) { const reader = new FileReader(); reader.onload = () => { art.style.backgroundImage = `url(${reader.result})`; art.textContent = ''; }; reader.readAsDataURL(data.artwork); }
}

export function bindDashboard() {
  const form = document.querySelector('#collection-form');
  if (!form) return;
  document.querySelectorAll('.dashboard-nav-item').forEach((item) => item.addEventListener('click', () => {
    document.querySelectorAll('.dashboard-nav-item').forEach((nav) => nav.classList.remove('active'));
    item.classList.add('active');
    if (item.dataset.panel !== 'create') window.alert(`${item.textContent.trim()} will be available in a future version.`);
  }));
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = readForm(form); const errors = validate(data);
    document.querySelectorAll('[data-error]').forEach((element) => { element.textContent = errors[element.dataset.error] || ''; });
    if (Object.keys(errors).length) { document.querySelector('#form-status').textContent = 'Please correct the highlighted fields before previewing.'; return; }
    updatePreview(data); document.querySelector('#form-status').textContent = 'Preview updated. This collection has not been deployed.'; document.querySelector('#collection-preview').scrollIntoView({ behavior: 'smooth' });
  });
  document.querySelector('#save-draft').addEventListener('click', () => { const data = readForm(form); localStorage.setItem('nftpad-draft', JSON.stringify({ ...data, artwork: undefined })); document.querySelector('#form-status').textContent = 'Draft saved locally in this browser only.'; });
  form.addEventListener('input', () => updatePreview(readForm(form)));
}
