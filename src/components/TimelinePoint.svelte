<script lang="ts">
  export let description: string,
    standOutLine: boolean,
    startDate: string,
    endDate: string,
    url: string;

  function formatDate(d: string) {
    if (!d) return "actualidad";
    let dt = new Date(d + "T00:00:00");
    return `${dt.toLocaleDateString("es-EC", {
      month: "short",
    })} ${dt.getFullYear()}`;
  }
</script>

<div class="text-start lg:text-center max-w-xs">
  {#if url}
    <a
      class={"font-semibold hover:underline underline-offset-2 transition-colors duration-150 text-sm leading-snug block " +
        (standOutLine
          ? "text-brand-600 hover:text-brand-800"
          : "text-slate-800 hover:text-slate-600")}
      href={url}
      target="_blank"
      rel="noreferrer">{description}</a
    >
  {:else}
    <span
      class={"font-semibold text-sm leading-snug block " +
        (standOutLine ? "text-brand-600" : "text-slate-800")}
      >{description}</span
    >
  {/if}
  <span class="text-xs text-slate-400 mt-1 block font-mono">
    {formatDate(startDate)} — {formatDate(endDate)}
  </span>
</div>

