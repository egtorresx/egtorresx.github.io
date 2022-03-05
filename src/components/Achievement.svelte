<script lang="ts">
  export let quantity: number,
    title: string,
    description: string,
    before: string,
    after: string;
</script>

<div
  class="bg-blue-200 p-6 md:p-5 h-full rounded-lg shadow-2xl hover:bg-blue-300"
>
  <div class="flex flex-col md:flex-row">
    <div class="flex md:items-center text-blue-700">
      {#if before}
        <span class="text-4xl ">{before}</span>
      {/if}
      <h2 class="text-6xl md:mr-5 md:text-8xl">{quantity}</h2>
      {#if after}
        <span class="text-4xl">{after}</span>
      {/if}
    </div>

    <div>
      <h3 class="text-black text-3xl font-bold my-4">{title}</h3>
      <span class="text-xl">{description}</span>
    </div>
  </div>
</div>
