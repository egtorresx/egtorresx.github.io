<script>
  import CookieConsent from "../components/CookieConsent.svelte";
  import GaTag from "../components/GaTag.svelte";
  import BackgroundDecor from "../components/BackgroundDecor.svelte";
  import "../app.css";
  import { base } from "$app/paths";
</script>

<svelte:head>
  <link rel="icon" href="{base}/favicon.svg" />
</svelte:head>

<div class="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
  <BackgroundDecor />
  <main class="relative z-10 container mx-auto px-6 pt-8 pb-16 md:px-10 md:pt-14 max-w-5xl">
    <slot />
    <CookieConsent />
    <GaTag />
  </main>
</div>

