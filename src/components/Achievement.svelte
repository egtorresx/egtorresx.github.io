<script lang="ts">
  export let quantity: number,
    title: string,
    description: string,
    before: string,
    after: string;
</script>

<div class="flex flex-col md:flex-row">
  <div class="flex md:items-center">
    {#if before}
      <span class="text-4xl text-blue-700">{before}</span>
    {/if}
    <h2 class="text-6xl text-blue-700 md:mr-5 md:text-8xl">{quantity}</h2>
    {#if after}
      <span class="text-4xl text-blue-700">{after}</span>
    {/if}
  </div>

  <div>
    <h3 class="text-black text-3xl font-bold my-4">{title}</h3>
    <span class="text-xl">{description}</span>
  </div>
</div>
