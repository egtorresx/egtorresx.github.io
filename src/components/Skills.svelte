<script lang="ts">
  import { client } from "$lib/graphql-client";
  import { gql } from "graphql-request";
  import Skill from "./Skill.svelte";
  import Skeleton from "../components/Skeleton.svelte";
  import Error from "../components/Error.svelte";

  let query = gql`
    {
      skills {
        title
        description
        experience
        type
      }
    }
  `;

  let acquiredSkills = [];
  let learningSkills = [];

  $: skills = client.request(query).then((data) => {
    acquiredSkills = data.skills.filter((skill) => skill.type === "Acquired");
    learningSkills = data.skills.filter((skill) => skill.type === "Learning");
  });
</script>

<!-- Skills and interest section -->
<div class="mt-10">
  {#await skills}
    <Skeleton />
  {:then}
    <div class="flex flex-col md:flex-row">
      <div class="flex-1">
        <h2 class="text-2xl font-bold">Habilidades</h2>
        {#each acquiredSkills as skill}
          <div class="my-5">
            <Skill
              experience={skill.experience}
              title={skill.title}
              description={skill.description}
            />
          </div>
        {/each}
      </div>
      <div class="flex-1">
        <h2 class="text-2xl font-bold">Actualmente aprendiendo</h2>
        {#each learningSkills as skill}
          <div class="my-5">
            <Skill
              experience={skill.experience}
              title={skill.title}
              description={skill.description}
            />
          </div>
        {/each}
      </div>
    </div>
  {:catch error}
    <Error>No se puede mostrar por el momento sección Habilidades {error}</Error
    >
  {/await}
</div>
