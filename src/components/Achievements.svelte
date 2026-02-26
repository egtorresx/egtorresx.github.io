<script lang="ts">
  import { client } from "$lib/graphql-client";
  import { gql } from "graphql-request";
  import Achievement from "./Achievement.svelte";
  import Skeleton from "../components/Skeleton.svelte";
  import Error from "../components/Error.svelte";

  let query = gql`
    {
      achievements(orderBy: order_ASC) {
        title
        description
        quantity
        prefix
      }
    }
  `;

  let achievements = [];

  $: client
    .request<any>(query)
    .then((data) => (achievements = data.achievements));
</script>

<section class="mt-16">
  <h2 class="section-heading">Logros</h2>
  <div class="mt-8">
    {#await achievements}
      <Skeleton />
    {:then}
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        {#each achievements as achievement (achievement.title)}
          <Achievement
            before={achievement.prefix}
            quantity={achievement.quantity}
            title={achievement.title}
            description={achievement.description}
          />
        {/each}
      </div>
    {:catch error}
      <Error>No se puede mostrar por el momento sección Logros {error}</Error>
    {/await}
  </div>
</section>
