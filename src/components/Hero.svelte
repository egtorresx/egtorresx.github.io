<script lang="ts">
	import GitHub from '../icons/GitHub.svelte';
	import Twitter from '../icons/Twitter.svelte';
</script>

<div class="container">
	<div class="hero">
		<h1 class="name">
			<strong>Edison</strong>
			Torres
		</h1>
		<span class="job-title">Desarrollador de Software</span>
		<span class="email">egtorresx@gmail.com</span>
		<div class="social">
			<a href="http://twitter.com/edisont">
				<Twitter width={24} height={24} />
			</a>
			<a href="https://github.com/egtorresx/">
				<GitHub width={24} height={24} />
			</a>
		</div>
		<h2 class="lead">
			<strong>Desarrollo</strong>
			y diseño de
			<strong>Software</strong>
			, tengo experiencia en las areas académica y financiera
		</h2>
	</div>
</div>

<style>
	/*Hero section*/

	.hero {
		margin: 50px auto;
		position: relative;
	}

	h1.name {
		font-size: 70px;
		font-weight: 300;
		display: inline-block;
	}

	.job-title {
		vertical-align: top;
		background-color: #d9e7f8;
		color: #4a90e2;
		font-weight: 600;
		margin-top: 5px;
		margin-left: 20px;
		border-radius: 5px;
		display: inline-block;
		padding: 15px 25px;
	}

	.email {
		display: block;
		font-size: 24px;
		font-weight: 300;
		color: #81899c;
		margin-top: 10px;
	}

	.lead {
		font-size: 44px;
		font-weight: 300;
		margin-top: 60px;
		line-height: 55px;
		text-align: center;
		background-color: #d9e7f8;
		border-radius: 10px;
		padding: 10px 10px;
	}

	.lead strong {
		color: #4a90e2;
	}

	.social {
		display: inline-block;
		margin-top: 10px;
	}

	.social a {
		padding-right: 10px;
	}
	/*hero ends*/

	@media (max-width: 743px) {
		.hero {
			text-align: center;
		}

		.job-title {
			margin-top: 20px;
		}
	}

	@media (max-width: 425px) {
		h1.name {
			font-size: 40px;
		}

		.job-title {
			position: absolute;
			font-size: 15px;
			top: -40px;
			right: 20px;
			padding: 10px;
		}

		.lead {
			margin-top: 15px;
			font-size: 20px;
			line-height: 28px;
		}
	}
</style>
