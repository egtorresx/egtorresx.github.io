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

  $: client.request(query).then((data) => (jobs = data.jobs.slice(0, 4)));
</script>

<div class="mt-10">
  <h2 class="text-2xl font-bold mb-4">Experiencia Laboral</h2>
  {#await jobs}
    <Skeleton />
  {:then}
    <ul class="steps steps-vertical lg:steps-horizontal">
      {#each jobs as job}
        <li
          class={"step " + (job.standOutLine ? "step-success" : "step-neutral")}
          data-content=""
        >
          <TimelinePoint
            line={job.standOutLine}
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
