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
    class="bg-blue-300 text-blue-900 fixed bottom-0 
    right-0 w-full md:px-10 md:py-3 px-2 py-1 flex justify-between items-center"
  >
    <span class="text-sm md:text-lg flex-1">
      ¿Acepta el uso cookies para asegurarse que tenga la mejor experiencia en
      este sitio web?
      <a
        class="font-bold text-sm md:text-lg"
        href="https://www.cookiesandyou.com/"
        target="_blank">Aprende más</a
      >
    </span>
    <div>
      <button class="btn btn-error btn-sm md:btn-md" on:click={deniedCookies}
        >No</button
      >
      <button class="btn btn-success btn-sm md:btn-md" on:click={acceptCookies}
        >Si</button
      >
    </div>
  </div>
{/if}
