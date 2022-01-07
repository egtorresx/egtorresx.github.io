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
    class="bg-blue-300 text-blue-900 fixed bottom-0 right-0 w-full px-10 py-2 flex justify-between items-center"
  >
    <span>
      Este sitio web utiliza cookies para asegurarse que tenga la mejor
      experiencia.
      <a class="font-bold" href="https://www.cookiesandyou.com/" target="_blank"
        >Aprende más</a
      >
    </span>
    <div>
      <button class="btn btn-error" on:click={deniedCookies}>No Acepto</button>
      <button class="btn btn-success" on:click={acceptCookies}>Acepto</button>
    </div>
  </div>
{/if}
