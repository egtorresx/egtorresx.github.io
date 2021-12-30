<script lang="ts">
  import Hero from "../components/Hero.svelte";
  import Skills from "../components/Skills.svelte";
  import Achievements from "../components/Achievements.svelte";
  import Timeline from "../components/Timeline.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<main class="container mx-auto px-10 pt-2 md:pt-10">
  <Hero />
  <Skills />
  <Achievements />
  <Timeline />
  <Footer />
</main>

<svelte:head>
  <title>Edison Torres | Desarrollador de Software</title>
</svelte:head>
