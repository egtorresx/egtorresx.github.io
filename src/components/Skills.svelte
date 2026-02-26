<script lang="ts">
  import { client } from "$lib/graphql-client";
  import { gql } from "graphql-request";
  import Skill from "./Skill.svelte";
  import Skeleton from "../components/Skeleton.svelte";
  import Error from "../components/Error.svelte";

  let query = gql`
    {
      skills(orderBy: order_ASC) {
        title
        description
        experience
        type
        order
      }
    }
  `;

  let acquiredSkills = [];
  let learningSkills = [];

  $: skills = client.request<any>(query).then((data) => {
    acquiredSkills = data.skills.filter((skill) => skill.type === "Acquired");
    learningSkills = data.skills.filter((skill) => skill.type === "Learning");
  });
</script>

<!-- Skills and interest section -->
<section class="mt-16">
  {#await skills}
    <Skeleton />
  {:then}
    <div class="flex flex-col md:flex-row gap-10">
      <div class="flex-1">
        <h2 class="section-heading">Habilidades</h2>
        <div class="mt-8 flex flex-col gap-4">
          {#each acquiredSkills as skill (skill.title)}
            <Skill
              experience={skill.experience}
              title={skill.title}
              description={skill.description}
            />
          {/each}
        </div>
      </div>
      <div class="flex-1">
        <h2 class="section-heading">Aprendiendo</h2>
        <div class="mt-8 flex flex-col gap-4">
          {#each learningSkills as skill (skill.title)}
            <Skill
              experience={skill.experience}
              title={skill.title}
              description={skill.description}
            />
          {/each}
        </div>
      </div>
    </div>
  {:catch error}
    <Error>No se puede mostrar por el momento sección Habilidades {error}</Error
    >
  {/await}
</section>
