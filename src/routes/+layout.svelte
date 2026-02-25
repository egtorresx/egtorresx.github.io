<script>
  import CookieConsent from "../components/CookieConsent.svelte";
  import GaTag from "../components/GaTag.svelte";
  import "../app.css";
  import { base } from "$app/paths";
</script>

<svelte:head>
  <link rel="icon" href="{base}/favicon.svg" />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
  <main class="container mx-auto px-6 pt-8 pb-16 md:px-10 md:pt-14 max-w-5xl">
    <slot />
    <CookieConsent />
    <GaTag />
  </main>
</div>

