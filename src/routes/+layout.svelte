<script>
  import CookieConsent from "../components/CookieConsent.svelte";
  import GaTag from "../components/GaTag.svelte";
  import "../app.css";
</script>

<main class="container mx-auto px-10 pt-2 md:pt-10">
  <slot />
  <CookieConsent />
  <GaTag />
</main>
