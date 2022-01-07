<script>
  import cookieStore from "../stores/cookieStore";
</script>

<svelte:head>
  {#if $cookieStore === "true"}
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-35TTH5GHZ0"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-35TTH5GHZ0");
    </script>
  {/if}
</svelte:head>
