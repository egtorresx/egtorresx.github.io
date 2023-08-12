<script>
  import CookieConsent from "../components/CookieConsent.svelte";
  import GaTag from "../components/GaTag.svelte";
  import "../app.css";
  import { base } from "$app/paths";
</script>

<svelte:head>
  <link rel="icon" href="{base}/favicon.svg" />
</svelte:head>

<main class="container mx-auto px-10 pt-2 md:pt-10">
  <slot />
  <CookieConsent />
  <GaTag />
</main>
