<script lang="ts">
  import { client } from "$lib/graphql-client";
  import { gql } from "graphql-request";
  import Achievement from "./Achievement.svelte";

  let query = gql`
    {
      achievements {
        title
        description
        quantity
        prefix
      }
    }
  `;

  let achievements = [];

  $: client.request(query).then((data) => (achievements = data.achievements));
</script>

<div class="container cards">
  {#await achievements}
    <div>Cargando...</div>
  {:then}
    {#each achievements as achievement}
      <Achievement
        before={achievement.prefix}
        quantity={achievement.quantity}
        title={achievement.title}
        description={achievement.description}
      />
    {/each}
  {:catch error}
    <div>No se puede mostrar por el momento sección Logros</div>
  {/await}
</div>

<style>
  .cards {
    max-width: 1120px;
    display: block;
    margin-top: 450px;
  }

  @media (max-width: 1024px) {
    .cards {
      margin-top: 480px;
    }
  }

  @media (max-width: 1019px) {
    .cards {
      margin-top: 500px;
    }
  }
</style>
