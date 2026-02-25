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
      <ul class="steps steps-vertical lg:steps-horizontal w-full">
        {#each jobs as job (job.startDate)}
          <li
            class={"step " + (job.standOutLine ? "step-primary" : "step-neutral")}
            data-content=""
          >
            <TimelinePoint
              description={job.description}
              startDate={job.startDate}
              endDate={job.endDate}
              url={job.url}
            />
          </li>
        {/each}
      </ul>
    {:catch error}
      <Error
        >No se puede mostrar por el momento sección Experiencia Laboral {error}</Error
      >
    {/await}
  </div>
</section>

