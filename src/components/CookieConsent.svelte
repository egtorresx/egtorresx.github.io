<script>
  import cookieStore from "../stores/cookieStore";

  $: visible = $cookieStore ? false : true;

  function acceptCookies() {
    cookieStore.set("true");
  }

  function deniedCookies() {
    cookieStore.set("false");
  }
</script>

{#if visible}
  <div
    class="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-xl
           bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl shadow-xl
           px-5 py-4 flex items-center justify-between gap-4"
  >
    <p class="text-sm text-slate-600 flex-1">
      ¿Acepta el uso de cookies para asegurarse de tener la mejor experiencia en
      este sitio?
      <a
        class="font-semibold text-brand-600 hover:underline underline-offset-2"
        href="https://www.cookiesandyou.com/"
        target="_blank"
        rel="noreferrer">Aprende más</a
      >
    </p>
    <div class="flex gap-2 shrink-0">
      <button
        class="px-4 py-1.5 rounded-lg text-sm font-medium border border-danger
               text-danger hover:bg-danger/10 transition-colors duration-150"
        on:click={deniedCookies}
      >
        No
      </button>
      <button
        class="px-4 py-1.5 rounded-lg text-sm font-semibold
               bg-success text-white hover:opacity-90 transition-opacity duration-150"
        on:click={acceptCookies}
      >
        Aceptar
      </button>
    </div>
  </div>
{/if}

