<script lang="ts">
	import TimelinePoint from './TimelinePoint.svelte';
</script>

<div class="container">
	<ol class="timeline">
		<TimelinePoint
			line="Experiencias Laborales"
			description="Desarrollador en Fideicomiso Servicios Tecnológicos UTPL"
			date="Jun 2009 - Ago 2012"
		/>

		<TimelinePoint
			description="Desarrollador SemiSenior en Banco de Loja"
			date="Oct 2014 - Dic 2015"
		/>

		<TimelinePoint
			description="Desarrollador Senior en Banco del Austro"
			date="Abr 2016 - Jul 2018"
		/>

		<TimelinePoint description="Desarrollador Senior en OrbeCode" date="Ago 2018 - Al presente" />
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
		content: '';
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
