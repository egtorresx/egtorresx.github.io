<script lang="ts">
  import { client } from "$lib/graphql-client";
  import { gql } from "graphql-request";
  import Skill from "./Skill.svelte";

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
<div class="container">
  <div class="sections">
    <h2 class="section-title">Habilidades</h2>
    {#await skills}
      <div>Cargando...</div>
    {:then}
      {#each acquiredSkills as skill}
        <Skill
          experience={skill.experience}
          title={skill.title}
          description={skill.description}
        />
      {/each}
    {:catch error}
      <div>No se puede mostrar por el momento sección Habilidades</div>
    {/await}
  </div>
  <div class="sections">
    <h2 class="section-title">Actualmente aprendiendo</h2>
    {#each learningSkills as skill}
      <Skill
        experience={skill.experience}
        title={skill.title}
        description={skill.description}
      />
    {/each}
  </div>
</div>

<style>
  .sections {
    vertical-align: top;
    display: inline-block;
    width: 49.7%;
    height: 50px;
  }

  .section-title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 15px;
  }

  @media (max-width: 768px) {
    .sections {
      width: 100%;
      height: auto;
      margin: 10px 0;
      float: left;
    }
  }

  @media (max-width: 425px) {
    .sections {
      width: 100%;
      height: auto;
      margin: 10px 0;
      float: left;
    }
  }
</style>
