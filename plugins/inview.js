import Vue from 'vue';

let InView = {
	bind: function(el, binding) {
		let get = {
			position: (elem) => {
				const bound = elem.getBoundingClientRect();
				const position = {
					top: bound.top,
					height: bound.height,
					bottom: bound.top + bound.height
				};
				return position;
			},
			window: () => {
				return {
					top: window.pageYOffset,
					height: window.innerHeight
				};
			},
			scrollTop: () => {
				let top = (window.pageYOffset || document.scrollTop) - (document.clientTop || 0);
				if (isNaN(top)) {
					top = 0;
				}
				return top;
			}
		};

		let settings = {
			at: binding.at || 'center',
			position: get.position(el)
		};
		let isBetween = (value, min, max) => {
			if (value > min && value < max) return true;
			return false;
		};

		const handle = () => {
			let point = 0;
			switch (settings.at) {
				case 'center':
					point = get.scrollTop() - get.window().height / 2;
					break;
				case 'top':
					point = get.scrollTop();
					break;
				case 'bottom':
					point = get.scrollTop() + get.window().height;
					break;
			}
			let elPos = get.position(el);
			let pass = false;
			if (isBetween(point, elPos.top, elPos.bottom)) {
				binding.value.callback(el, binding.value.data);
				pass = true;
			}
			if (binding.value.debug) {
				console.log(point, get.position(el), pass);
			}
		};

		// When scrolling, check the position.
		window.addEventListener('scroll', function() {
			handle();
		});
	}
};

Vue.directive('inview', InView);
