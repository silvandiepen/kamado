<template>
	<div class="thermometer">
		<div class="thermometer__plate">
			<ul class="thermometer__degrees">
				<li class="thermometer__degree">
					<span>0</span>
				</li>
				<li class="thermometer__degree">
					<span>50</span>
				</li>
				<li class="thermometer__degree">
					<span>100</span>
				</li>
				<li class="thermometer__degree">
					<span>150</span>
				</li>
				<li class="thermometer__degree">
					<span>200</span>
				</li>
				<li class="thermometer__degree">
					<span>250</span>
				</li>
				<li class="thermometer__degree">
					<span>300</span>
				</li>
				<li class="thermometer__degree">
					<span>350</span>
				</li>
				<li class="thermometer__degree">
					<span>400</span>
				</li>
				<li class="thermometer__degree">
					<span>450</span>
				</li>
			</ul>
			<div class="thermometer__current">
				{{ degree }}
			</div>
			<div ref="arrow" class="thermometer__arrow"></div>
			<div class="thermometer__glare"></div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		degree: {
			type: Number,
			default: 0
		}
	},
	watch: {
		degree: function(val) {
			// console.log(val);
			val = (val / 600) * 360;
			this.$refs.arrow.style.setProperty('--thermometer-degrees', val + 'deg');
		}
	}
};
</script>

<style lang="scss">
@import '~tools';
.thermometer {
	border-radius: 50%;
	width: 15em;
	height: 15em;
	padding: 1em;
	background-color: color(IceDark);
	background-image: conic-gradient(color(GrayDark), color(Gray), color(Ice), color(GrayDark));

	box-shadow: -0.1em -0.1em 0.2em 0.1em color(White, 0.25) inset, 0.1em 0.1em 0.2em color(Black, 0.25) inset,
		0.4em 0.4em 1em 0.2em color(Black, 0.5), 0.4em 0.4em 3em 0.2em color(Black, 0.5);
	&__plate {
		width: 100%;
		height: 100%;
		position: relative;
		border-radius: 50%;
		background-color: color(Black);
		background-image: radial-gradient(#{color(IceDark, 0.25)}, transparent);
		box-shadow: 0 0 0.05em 0.2em color(White, 0.5);
	}
	&__arrow {
		position: absolute;
		left: 50%;
		top: 50%;
		width: 0em;
		height: 0em;
		transform: rotate(calc(var(--thermometer-degrees, 0deg) - 125deg));
		transition: transform 0.3s ease-in-out;
		z-index: 0;
		&:after {
			content: '';
			display: block;
			position: absolute;
			background-image: linear-gradient(25deg, color(Red), color(RedDark));
			box-shadow: 1px 1px 2px 2px color(Black, 0.25);
			border-radius: 50%;
			left: 50%;
			top: 50%;
			width: 1.5em;
			height: 1.5em;
			transform: translate(-50%, -50%);
		}

		&:before {
			width: 0rem;
			height: 0px;
			content: '';
			display: block;
			position: absolute;
			left: 50%;
			bottom: 50%;
			transform: translate(-50%, 1.25em);
			border-color: transparent transparent color(RedDark) transparent;
			border-width: 0 0.4em 7.5em 0.4em;
			border-style: solid;
			z-index: -2;
		}
	}
	&__degrees {
		position: absolute;
		left: 50%;
		top: 50%;
		width: 0;
		height: 0;
		transform: rotate(-65deg);
		&:before {
			content: '';
			width: 10em;
			height: 10em;
			border: 1px solid red;
			display: block;
			background-image: radial-gradient(circle at center, darken(GrayDark, 10%) 50%, transparent 50%),
				conic-gradient(
					color(Green, 0) 25%,
					color(YellowLight) 0% 35%,
					color(Yellow) 0% 45%,
					color(Orange) 0% 55%,
					color(OrangeDark) 0% 70%,
					color(Red) 0% 85%,
					color(RedDark) 0% 100%
				);
			clip-path: circle(45%);
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%) rotate(-160deg);
		}
	}
	&__degree {
		position: absolute;
		width: 6em;
		right: 0;
		top: 0;
		height: 0;
		span {
			position: absolute;
			left: 0;
			bottom: 0;
			display: inline-block;
			width: auto;
			font-size: 0.6em;
		}
		transform-origin: 100% 0%;
		@for $i from 1 through 30 {
			&:nth-child(#{$i}) {
				transform: rotate(calc(#{$i} * 27.5deg));
				span {
					transform: rotate(calc(#{$i} * -27.5deg + 65deg));
				}
			}
		}
	}
	&__current {
		position: absolute;
		bottom: 2em;
		left: 50%;
		transform: translateX(-50%);
	}
	&__glare {
		width: 12.5em;
		height: 12.5em;
		position: absolute;
		left: 50%;
		top: 50%;
		background-image: linear-gradient(to bottom, color(White, 0.5), color(White, 0) 50%);
		border-radius: 50%;
		transform: translate(-50%, -50%) rotate(-90deg);
		filter: blur(0.3em);
	}
}
</style>
