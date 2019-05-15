<template>
	<main class="page page--home">
		<section
			v-inview="{ callback: handleInview, data: { id: 1, degrees: 0 } }"
			:class="[isActive === 1 ? 'is-active' : '']"
			class="intro"
		>
			<div class="row right">
				<div class="column small-full medium-two-third large-half">
					<div class="content">
						<h2>Kamado Cheatsheet</h2>
						<h5 class="sub">
							Everyone has one, but how do you actually get it to grill, or just to smoke? Heres a cheatsheet to do that
							easily.
						</h5>
					</div>
				</div>
			</div>
		</section>
		<section
			v-inview="{ callback: handleInview, data: { id: 2, degrees: 100 }, debug: true }"
			:class="[isActive === 2 ? 'is-active' : '']"
			class="tip smoke background--icedark"
		>
			<div class="row right">
				<div class="column small-full medium-two-third large-half">
					<div class="content">
						<h4>Smoke</h4>
						<p>
							Smoking is low and slow cooking at its finest. The unique shape and design of the kamado keeps meat moist as the
							heat gently breaks down muscle fibers—all the while infusing it with a deep, smoky flavor. Of course, meat isn’t
							the only food you can smoke. From cheese to nuts to vegetables, a range of foods benefit from the complex flavor
							of wood smoke.
						</p>
					</div>
				</div>
			</div>
		</section>
		<section
			v-inview="{ callback: handleInview, data: { id: 3, degrees: 200 } }"
			:class="[isActive === 3 ? 'is-active' : '']"
			class="tip grill background--orangedark"
		>
			<div class="row right">
				<div class="column small-full medium-two-third large-half">
					<div class="content">
						<h4>Grill</h4>
						<p>
							Grilling is the go-technique for quick, delicious and consistent results. Using high-quality charcoal will ensure
							a steady flame and unmatched flavor in everything you grill, from burgers to corn on the cob.
						</p>
					</div>
				</div>
			</div>
		</section>
		<section
			v-inview="{ callback: handleInview, data: { id: 4, degrees: 300 } }"
			:class="[isActive === 4 ? 'is-active' : '']"
			class="tip sear background--red"
		>
			<div class="row right">
				<div class="column small-full medium-two-third large-half">
					<div class="content">
						<h4>Sear</h4>
						<p>
							Searing delivers the incredible color and flavor you think of when you picture a juicy steak or flame-finished
							scallops. Timing is key to mastering this high-heat technique. First, you’ll need to give the Kamado Joe enough
							time to reach the right temperature (500–750°F) for searing—so be sure to light your grill well in advance. With
							the grill rolling at such high temperatures, searing won’t take long. The goal is to seal in flavor and create a
							rich, brown outer char without burning the food.
						</p>
					</div>
				</div>
			</div>
		</section>
		<section
			v-inview="{ callback: handleInview, data: { id: 5, degrees: 350 } }"
			:class="[isActive === 5 ? 'is-active' : '']"
			class="tip roast  background--brown"
		>
			<div class="row right">
				<div class="column small-full medium-two-third large-half">
					<div class="content">
						<h4>Roast</h4>
						<p>
							Juicy and tender on the inside, crisp and flavorful on the outside—this is the work of roasting. This technique
							is delicious for larger cuts of meat, like whole chicken or pork loin, or for vegetables. The mid-range
							temperature (275–350°F) harnesses the power of slow, indirect heat to infuse food with wood-fired flavor and
							tenderness, while delivering enough heat to create a crisp crust or finish. And if you want to experiment with
							brines or spice rubs, roasting is a great way to show them off.
						</p>
					</div>
				</div>
			</div>
		</section>
		<section
			v-inview="{ callback: handleInview, data: { id: 6, degrees: 400 } }"
			:class="[isActive === 6 ? 'is-active' : '']"
			class="tip bake  background--browndark"
		>
			<div class="row right">
				<div class="column small-full medium-two-third large-half">
					<div class="content">
						<h4>Bake</h4>
						<p>
							More than a grill, the Kamado Joe can become a charcoal-fired oven with just one simple configuration. The
							kamado’s ceramic walls retain heat and its circular shape promotes superior air circulation—both of which create
							ideal conditions for baking. Once you have stabilized the temperature, you can bake anything you’d cook in an
							indoor oven, from wood-fired pizzas to rustic berry cobblers to fresh, crusty bread. Note: to bake pizza, you
							will need to raise the temperature beyond typical baking temperatures (275–350°F) to 500°F or higher for best
							results.
						</p>
					</div>
				</div>
			</div>
		</section>
		<ThermoMeter ref="thermometer" :degree="degree"></ThermoMeter>
	</main>
</template>

<script>
import ThermoMeter from '~/components/thermo-meter.vue';
export default {
	components: { ThermoMeter },
	data() {
		return {
			isActive: 0,
			degree: 0
		};
	},
	methods: {
		handleInview(entry, data) {
			const _this = this;
			_this.isActive = data.id;
			_this.degree = data.degrees;
		}
	}
};
</script>

<style lang="scss">
@import '~tools';

.page {
	// general page styles
	&--home {
		// specific home styles
	}
}

.thermometer {
	position: fixed;
	left: grid(2);
	top: 50%;
	transform: translateY(-50%);
	font-size: calc(#{grid(0.25)} + 0.5rem);
	@media #{$medium-down} {
		left: -grid(0.5);
	}
	@media #{$small-only} {
		left: 50%;
		top: auto;
		bottom: -grid(1);
		transform: translateY(0) translateX(-50%);
	}
}
.intro {
	height: 100vh;
	width: 100vw;
	display: flex;
}
.content {
	padding: grid(1);
	@media #{$small-only} {
		padding: 3rem 2rem;
	}
}
.tip {
	padding: grid(2) 0;
	@media #{$small-only} {
		padding: 0;
	}
	color: color(Black);
}
section {
	overflow: hidden;
	opacity: 0.5;
	transition: opacity 0.5s;
	.content {
		opacity: 0;
		transform: translateX(-#{grid(1)});
		transition: transform 0.5s, opacity 0.5s;
	}
}
section.is-active {
	opacity: 1;
	.content {
		opacity: 1;
		transform: translateX(0%);
	}
}
</style>
