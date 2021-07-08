<script lang="ts">
	export let description: string, date: string, line: string;
</script>

<li>
	{#if line}
		<p class="line">{line}</p>
	{/if}
	<span class="point" />
	<p class="description">{description}</p>
	<span class="date">{date}</span>
</li>

<style>
	li {
		position: relative;
		display: inline-block;
		float: left;
		width: 25%;
		height: 50px;
	}
	li .line {
		position: absolute;
		top: -47px;
		left: 1%;
		font-size: 20px;
		font-weight: 600;
		color: #04143a;
	}
	li .point {
		content: '';
		top: -7px;
		left: 0%;
		display: block;
		width: 8px;
		height: 8px;
		border: 4px solid #fff;
		border-radius: 10px;
		background: #4a90e2;
		position: absolute;
	}
	li .description {
		display: none;
		padding: 10px 0;
		margin-top: 20px;
		position: relative;
		font-weight: normal;
		z-index: 1;
		max-width: 95%;
		font-size: 18px;
		font-weight: 600;
		line-height: 25px;
		color: #5b6a9a;
	}
	.description::before {
		content: '';
		width: 0;
		height: 0;
		border-left: 5px solid transparent;
		border-right: 5px solid transparent;
		border-bottom: 5px solid #f4f4f4;
		position: absolute;
		top: -5px;
		left: 43%;
	}

	.date {
		font-size: 14px;
		color: #81899c;
		font-weight: 300;
	}

	/* ---- Hover effects ---- */
	li:hover {
		color: #48a4d2;
	}
	li .description {
		display: block;
	}
</style>
