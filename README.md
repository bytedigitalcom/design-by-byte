# Design By Byte

Hi dear Developer,

This repository supplies a Shopify Liquid snippet for adding the footer signature:

Designed by $\textsf{\color{#0969da}{Byte}}$ with $\textsf{\color{#218bff}{Shopify}}$

## How to Use

1. Make sure the Shopify app has `read_themes` and `write_themes` access.

2. During app install or onboarding, create or update this file in the active Shopify theme:

   ```text
   snippets/design-by-byte.liquid
   ```

   The helper in [`app/create-design-by-byte-snippet.server.js`](app/create-design-by-byte-snippet.server.js) can be called from the app's server-side install flow:

   ```js
   import { createDesignByByteSnippet } from "./create-design-by-byte-snippet.server";

   await createDesignByByteSnippet(admin);
   ```

3. Render the snippet wherever the copyright signature should appear, for example in `sections/footer.liquid`:

   ```liquid
   {% render 'design-by-byte' %}
   ```

The Byte link is dofollow on the homepage and nofollow on all other pages. The Shopify link is always nofollow.
