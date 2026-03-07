<script lang="ts">
  import { client } from "$lib/graphql-client";
  import { gql } from "graphql-request";
  import TimelinePoint from "./TimelinePoint.svelte";
  import Skeleton from "../components/Skeleton.svelte";
  import Error from "../components/Error.svelte";

  let query = gql`
    {
      jobs(orderBy: endDate_DESC) {
        description
        standOutLine
        startDate
        endDate
        url
      }
    }
  `;

  let jobs = [];

  $: client.request<any>(query).then((data) => (jobs = data.jobs.slice(0, 4)));
</script>

<section class="mt-16">
  <h2 class="section-heading">Experiencia Laboral</h2>
  <div class="mt-8">
    {#await jobs}
      <Skeleton />
    {:then}
      <!-- Custom horizontal timeline -->
      <div class="relative w-full">
        <!--
          Connecting line: offset by 12.5% on each side so it starts/ends at
          the centre of the first/last dot (each item takes ~25% of the width
          → its centre sits at 12.5% from the nearest edge).
        -->
        <!-- Connecting line (desktop — horizontal) -->
        <div
          class="hidden lg:block absolute top-3 left-[12.5%] right-[12.5%] h-0.5 bg-slate-700"
        ></div>
        <!--
          Mobile vertical line: left-3 aligns with the centre of the w-6 dot
          (dot left-edge = 0, half-width = 12px = 3 × 4px = left-3).
          The 12.5% top/bottom offsets mirror the horizontal logic.
        -->
        <!-- Connecting line (mobile — vertical) -->
        <div
          class="lg:hidden absolute left-3 top-[12.5%] bottom-[12.5%] w-0.5 bg-slate-700"
        ></div>

        <div class="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-4">
          {#each jobs as job (job.startDate)}
            <div class="flex flex-row lg:flex-col items-start lg:items-center gap-4 lg:gap-0 flex-1">
              <!-- Dot -->
              <div
                class={"shrink-0 w-6 h-6 rounded-full border-2 z-10 " +
                  (job.standOutLine
                    ? "bg-brand-500 border-brand-500"
                    : "bg-slate-800 border-slate-800")}
              ></div>
              <!-- Content -->
              <div class="lg:mt-5 w-full">
                <TimelinePoint
                  description={job.description}
                  standOutLine={job.standOutLine}
                  startDate={job.startDate}
                  endDate={job.endDate}
                  url={job.url}
                />
              </div>
            </div>
          {/each}
        </div>
      </div>
    {:catch error}
      <Error
        >No se puede mostrar por el momento sección Experiencia Laboral {error}</Error
      >
    {/await}
  </div>
</section>

