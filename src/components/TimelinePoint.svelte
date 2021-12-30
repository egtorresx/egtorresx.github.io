<script lang="ts">
  export let description: string, startDate: string, endDate: string;

  function formatDate(d: string) {
    if (!d) return "actualidad";
    let dt = new Date(d + "T00:00:00");
    return `${dt.toLocaleDateString("es-EC", {
      month: "short",
    })} ${dt.getFullYear()}`;
  }
</script>

<div>
  <p class="text-xl text-left">
    <span class="mr-2 text-xl text-blue-900 font">{description}</span>
    <span class="hidden md:inline-block text-gray-700"
      >{formatDate(startDate)} - {formatDate(endDate)}</span
    >
  </p>
</div>
