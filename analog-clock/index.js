<!DOCTYPE html>
<html lang="en">

<head>
	<style>

		/* Restoring browser effects */		
		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}

		/* All of the same styling to the body */		
		body {
			height: 100vh;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: #000;
			background-image: linear-gradient(
				70deg, black, white);
		}

		/* Sizing, positioning of main dial of the clock */		
		.clock {
			width: 40vw;
			height: 40vw;
			background-image: linear-gradient(
				70deg, black, white);
			background-size: cover;
			box-shadow: 0 3em 5.8em;
			border-radius: 50%;
			position: relative;
		}
		
		.hr,
		.min,
		.sec {
			width: 1%;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -100%);
			transform-origin: bottom;
			z-index: 2;
			border-radius: 2em;
		}
		
		.pin {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			width: 1em;
			height: 1em;
			background: rgb(38, 0, 255);
			border: 2px solid #ffffff;
			border-radius: 10em;
			margin: auto;
			z-index: 10;
		}

		/* Different length of different hands of clock */		
		.hr {
			height: 25%;
			background-color: #ff0000;
		}
		
		.min {
			height: 30%;
			background-color: #ff9900;
		}
		
		.sec {
			height: 40%;
			background-color: #99ff00;
			transform-origin: 50% 85%;
		}
	</style>
</head>

<body>
	<div class="clock">
		<div class="hr"></div>
		<div class="min"></div>
		<div class="sec"></div>
		<div class="pin"></div>
	</div>

	<script>

		// Selecting all of the css classes
		// on which we want to apply functionalities
		const hr = document.querySelector('.hr')
		const min = document.querySelector('.min')
		const sec = document.querySelector('.sec')

		// Setting up the period of working
		setInterval(() => {

			// Extracting the current time
			// from DATE() function
			let day = new Date()
			let hour = day.getHours()
			let minutes = day.getMinutes()
			let seconds = day.getSeconds()

			// Formula that is explained above for
			// the rotation of different hands
			let hrrotation = (30 * hour) + (0.5 * minutes);
			let minrotation = 6 * minutes;
			let secrotation = 6 * seconds;

			hr.style.transform =
				`translate(-50%,-100%) rotate(${hrrotation}deg)`
			min.style.transform =
				`translate(-50%,-100%) rotate(${minrotation}deg)`
			sec.style.transform =
				`translate(-50%,-85%) rotate(${secrotation}deg)`
		});
	</script>
</body>

</html>
