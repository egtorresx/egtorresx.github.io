<script lang="ts">
  import { client } from "$lib/graphql-client";
  import { gql } from "graphql-request";
  import TimelinePoint from "./TimelinePoint.svelte";
  let query = gql`
    {
      jobs(orderBy: endDate_DESC) {
        description
        standOutLine
        startDate
        endDate
      }
    }
  `;

  let jobs = [];

  $: client.request(query).then((data) => (jobs = data.jobs.slice(0, 4)));
</script>

<div class="container">
  <h2 class="title">Experiencia Laboral</h2>
  <ol class="timeline">
    {#await jobs}
      <div>Cargando...</div>
    {:then}
      {#each jobs as job}
        <TimelinePoint
          line={job.standOutLine}
          description={job.description}
          startDate={job.startDate}
          endDate={job.endDate}
        />
      {/each}
    {:catch error}
      <div>No se puede mostrar por el momento sección Experiencia Laboral</div>
    {/await}
  </ol>
</div>

<style>
  ol {
    position: relative;
    display: block;
    margin: 100px 0;
    height: 2px;
    background: #eef0f7;
  }
  ol::before,
  ol::after {
    content: "";
    position: absolute;
    top: -10px;
    display: block;
    width: 0;
    height: 0;
    border-radius: 10px;
    border: 0px solid #31708f;
  }
  ol::before {
    left: -5px;
  }
  ol::after {
    right: -10px;
    border: 0px solid transparent;
    border-right: 0;
    border-left: 20px solid #31708f;
    border-radius: 3px;
  }

  .title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 15px;
  }

  @media (max-width: 768px) {
    .timeline {
      border: none;
      background-color: rgba(0, 0, 0, 0);
    }

    .timeline li {
      margin-top: 70px;
      height: 150px;
    }
  }

  @media (max-width: 872px) {
    .timeline {
      display: none;
    }
  }
</style>
