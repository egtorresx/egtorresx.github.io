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
  <div class="flex flex-col justify-evenly md:flex-row">
    {#each achievements as achievement}
      <div class="flex-1 mr-5 mb-5 md:mb-0">
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
