# RyoNakamura NFTPad

RyoNakamura NFTPad is a native JavaScript presentation foundation for a creator-focused NFT platform.

## V0.3 creator workspace

Open `#dashboard` to use the local Creator Dashboard. It includes Overview, Create Collection, My Collections, Drafts, and Settings. Collection records, drafts, creator preferences, and selected artwork previews use browser `localStorage` only. Artwork is converted to a local browser preview; it is never uploaded.

The dashboard validates required fields, whole-number supply, royalties from 0–20%, and artwork type/size (PNG, JPG, WEBP, or GIF up to 5 MB). Saved records are explicitly local and are not blockchain collections.

## Run locally

Serve the static files with a local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000` for the landing page or `http://localhost:8000/#dashboard` for the workspace.

## Deliberate limitations

There is no wallet connection, smart contract, token creation, NFT minting, IPFS upload, marketplace, blockchain transaction, or fake blockchain data. A browser's local storage can be cleared by the user and is not a production database.
