<script lang="ts">
	import Achievement from './Achievement.svelte';
</script>

<div class="container cards">
	<Achievement
		before="+"
		quantity={20}
		title="Aplicaciones"
		description="Aplicaciones Web de todo tamaño en producción"
	/>

	<Achievement
		quantity={1}
		title="Migración"
		description="Migración de datos a un sistema ERP de clase internacional"
	/>
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
