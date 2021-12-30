<script lang="ts">
  import { client } from "$lib/graphql-client";
  import { gql } from "graphql-request";
  import Achievement from "./Achievement.svelte";
  import Skeleton from "../components/Skeleton.svelte";
  import Error from "../components/Error.svelte";

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

{#await achievements}
  <div class="mt-10">
    <Skeleton />
  </div>
{:then}
  <div class="flex flex-col p-5 justify-evenly md:flex-row">
    {#each achievements as achievement}
      <div class="bg-blue-300 flex-1 m-3 p-10 rounded-lg shadow-2xl">
        <Achievement
          before={achievement.prefix}
          quantity={achievement.quantity}
          title={achievement.title}
          description={achievement.description}
        />
      </div>
    {/each}
  </div>
{:catch error}
  <Error>No se puede mostrar por el momento sección Logros {error}</Error>
{/await}
