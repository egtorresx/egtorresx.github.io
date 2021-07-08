<script lang="ts">
	import Skill from './Skill.svelte';
</script>

<!-- Skills and interest section -->
<div class="container">
	<div class="sections">
		<h2 class="section-title">Habilidades</h2>

		<Skill
			experience="+ 10 años"
			title="Programación OOP & frameworks"
			description="C#, Visual Studio .NET, Oracle, SQL Server"
		/>

		<Skill experience="+ 4 años" title="ETL" description="Talend Open Studio" />

		<Skill experience="+ 3 años" title="Programación Web" description="ASP.net, ASP.net MVC" />

		<Skill
			experience="2 años"
			title="Oracle Forms"
			description="Forms y Reports 9i, Migración a 11g, PL/SQL"
		/>

		<Skill experience="2 años" title="SQL Server" description="Transact SQL" />
	</div>

	<div class="sections">
		<h2 class="section-title">Actualmente aprendiendo</h2>

		<Skill title="Aplicaciones SPA" description="React, Svelte" />
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
