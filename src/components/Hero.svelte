<script lang="ts">
  import GitHub from "../icons/GitHub.svelte";
  import Twitter from "../icons/Twitter.svelte";
</script>

<section class="flex flex-col items-center text-center py-16 md:py-24 animate-fade-in">
  <!-- Badge -->
  <span
    class="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium
           bg-brand-50 text-brand-700 border border-brand-200 tracking-wide"
  >
    <span class="h-2 w-2 rounded-full bg-brand-500 animate-pulse"></span>
    Disponible para proyectos
  </span>

  <!-- Name & Title -->
  <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 leading-tight">
    <span class="gradient-text">Edison</span>
    <span class="text-slate-700"> Torres</span>
  </h1>

  <p class="text-xl md:text-2xl font-medium text-slate-500 mb-8 tracking-wide">
    Desarrollador de Software
  </p>

  <!-- Description -->
  <p
    class="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed
           bg-white/70 backdrop-blur-sm border border-slate-200 px-8 py-5 rounded-2xl shadow-card"
  >
    <span class="font-semibold text-brand-600">Desarrollo</span>
    y diseño de
    <span class="font-semibold text-brand-600">Software</span>, con experiencia
    en las áreas académica y financiera.
  </p>

  <!-- Social links -->
  <div class="flex gap-4">
    <a
      href="http://twitter.com/edisont"
      target="_blank"
      rel="noreferrer"
      class="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-200
             text-slate-600 hover:text-brand-600 hover:border-brand-300 hover:shadow-card
             transition-all duration-200 font-medium text-sm"
    >
      <Twitter width={18} height={18} />
      Twitter
    </a>
    <a
      href="https://github.com/egtorresx/"
      target="_blank"
      rel="noreferrer"
      class="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-200
             text-slate-600 hover:text-brand-600 hover:border-brand-300 hover:shadow-card
             transition-all duration-200 font-medium text-sm"
    >
      <GitHub width={18} height={18} />
      GitHub
    </a>
  </div>
</section>

