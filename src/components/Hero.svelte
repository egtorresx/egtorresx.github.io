<script lang="ts">
  import GitHub from "../icons/GitHub.svelte";
  import Twitter from "../icons/Twitter.svelte";
</script>

<div class="flex flex-col items-center text-center">
  <div class="flex flex-col md:flex-row mb-5 items-center">
    <h1 class="text-4xl mb-4 md:mr-6 md:text-6xl">
      <span class="font-bold">Edison</span>
      Torres
    </h1>
    <span class="text-2xl bg-blue-200 text-blue-900 px-4 py-2 rounded-lg"
      >Desarrollador de Software</span
    >
  </div>
  <div class="flex mb-4">
    <a href="http://twitter.com/edisont" class="mr-2">
      <Twitter width={24} height={24} />
    </a>
    <a href="https://github.com/egtorresx/">
      <GitHub width={24} height={24} />
    </a>
  </div>
  <p class="text-2xl md:text-3xl bg-blue-200 px-6 py-4 rounded-lg md:w-9/12">
    <strong class="text-blue-900">Desarrollo</strong>
    y diseño de
    <strong class="text-blue-900">Software</strong>, tengo experiencia en las
    areas académica y financiera
  </p>
</div>
