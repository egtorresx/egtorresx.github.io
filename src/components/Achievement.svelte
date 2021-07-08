<script lang="ts">
	export let quantity: number, title: string, description: string, before: string, after: string;
</script>

<div class="card">
	<div class="skill-level">
		{#if before}
			<span>{before}</span>
		{/if}
		<h2>{quantity}</h2>
		{#if after}
			<span>{after}</span>
		{/if}
	</div>

	<div class="skill-meta">
		<h3>{title}</h3>
		<span>{description}</span>
	</div>
</div>

<style>
	.card {
		width: 47.9%;
		height: 200px;
		background-color: #eef0f7;
		display: inline-block;
		margin: 7px 5px;
		vertical-align: top;
		border-radius: 10px;
		text-align: center;
		padding-top: 50px;
	}

	.card-active,
	.card:hover {
		transform: scale(1.02);
		transition: 0.5s;
		background-color: #fff;
		box-shadow: 0px 5px 50px -8px #ddd;
		cursor: pointer;
	}

	.skill-level {
		display: inline-block;
		max-width: 160px;
	}

	.skill-level span {
		font-size: 35px;
		font-weight: 300;
		color: #5b6a9a;
		vertical-align: top;
	}

	.skill-level h2 {
		font-size: 95px;
		font-weight: 300;
		display: inline-block;
		vertical-align: top;
		color: #5b6a9a;
		letter-spacing: -5px;
	}

	.skill-meta {
		vertical-align: top;
		display: inline-block;
		max-width: 300px;
		text-align: left;
		margin-top: 15px;
		margin-left: 15px;
	}

	.skill-meta h3 {
		font-size: 20px;
		font-weight: 800;
		color: #5b6a9a;
		margin-bottom: 5px;
	}

	.skill-meta span {
		color: #81899c;
		line-height: 20px;
		font-size: 16px;
	}

	@media (max-width: 768px) {
		.card {
			padding: 15px;
			text-align: left;
			width: 100%;
			height: auto;
			margin: 10px 0;
			float: left;
		}
		.card h2 {
			font-size: 70px;
		}
	}

	@media (max-width: 425px) {
		.card {
			width: 100%;
			height: auto;
			margin: 10px 0;
			float: left;
		}
	}
</style>
