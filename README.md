# RyoNakamura NFTPad

The first foundation for a creator-focused NFT platform: a responsive landing page for creators who want to create, launch, and mint collections.

## Files

- `index.html` is the browser entry point and provides the semantic page shell.
- `src/components.js` contains small reusable functions that render each page section.
- `src/app.js` assembles the sections and contains the temporary UI-only button behavior.
- `src/styles.css` contains the responsive dark, futuristic visual system.

## Run it locally

Because the page uses JavaScript modules, serve the repository with a small local web server instead of opening `index.html` directly. For example, if Python is installed:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in a browser.

## Deliberate limitations

This first step does **not** connect a wallet, create tokens, call an NFT contract, show wallet balances, or display fake transaction/collection data. The buttons show a temporary message only. Later, we can add a wallet adapter and contract integration behind clear interfaces without redesigning the page.
