<script lang="ts">
  export let quantity: number,
    title: string,
    description: string,
    before: string = "",
    after: string = "";
</script>

<div
  class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white
         p-6 shadow-card hover:shadow-card-hover hover:border-brand-200
         transition-all duration-200 h-full"
>
  <!-- Decorative gradient blob -->
  <div
    class="absolute -top-8 -right-8 h-28 w-28 rounded-full opacity-10
           bg-gradient-brand"
  ></div>

  <div class="relative flex flex-col gap-3">
    <!-- Number -->
    <div class="flex items-end gap-1 text-brand-600 font-extrabold">
      {#if before}
        <span class="text-3xl leading-none">{before}</span>
      {/if}
      <span class="text-6xl md:text-7xl leading-none">{quantity}</span>
      {#if after}
        <span class="text-3xl leading-none">{after}</span>
      {/if}
    </div>

    <!-- Label -->
    <div>
      <h3 class="text-slate-800 text-xl font-bold">{title}</h3>
      <span class="text-slate-500 text-sm mt-1 block">{description}</span>
    </div>
  </div>
</div>

