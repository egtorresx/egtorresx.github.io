<script lang="ts">
  export let experience: string, title: string, description: string;
</script>

<div
  class="group flex flex-col gap-1 p-5 rounded-xl border border-slate-200 bg-white
         shadow-card hover:shadow-card-hover hover:border-brand-200
         transition-all duration-200"
>
  {#if experience}
    <span
      class="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest
             text-brand-600 font-mono"
    >
      <span class="h-1.5 w-1.5 rounded-full bg-brand-500"></span>
      {experience}
    </span>
  {/if}
  <h3 class="text-slate-800 font-bold text-lg leading-snug">{title}</h3>
  <span class="text-slate-500 text-sm leading-relaxed">{description}</span>
</div>

