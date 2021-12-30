<script lang="ts">
  export let experience: string, title: string, description: string;
</script>

<div>
  {#if experience}
    <span class="text-blue-500 text-xl">{experience}</span>
  {/if}
  <div>
    <h3 class="text-blue-800 font-bold text-2xl">{title}</h3>
    <span class="text-gray-600">{description}</span>
  </div>
</div>
