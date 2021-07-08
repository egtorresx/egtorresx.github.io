<script lang="ts">
	export let experience: string, title: string, description: string;
</script>

<div class="list-card">
	{#if experience}
		<span class="exp">{experience}</span>
	{/if}
	<div>
		<h3>{title}</h3>
		<span>{description}</span>
	</div>
</div>

<style>
	.list-card {
		margin: 30px 0;
	}

	.list-card .exp,
	.list-card div {
		display: inline-block;
		vertical-align: top;
	}

	.list-card .exp {
		margin-right: 15px;
		color: #4a90e2;
		font-weight: 600;
		width: 100px;
	}

	.list-card div {
		width: 70%;
	}

	.list-card h3 {
		font-size: 20px;
		font-weight: 600;
		color: #5b6a9a;
		line-height: 26px;
		margin-bottom: 8px;
	}

	.list-card div span {
		font-size: 16px;
		color: #81899c;
		line-height: 22px;
	}
</style>
