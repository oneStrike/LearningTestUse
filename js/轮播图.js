let bannerRender = (function () {
	let container = document.getElementById('container'),
		wrapper = container.getElementsByClassName('wrapper')[0],
		focus = container.getElementsByClassName('focus')[0],
		slideList = null,
		focusList = null,
		autoTimer = null,
		interval = 3000,
		speed = 200,
		index = 0;
	//获取数据
	let queryData = function () {
		return new Promise(function (resolve, reject) {
			let xhr = new XMLHttpRequest();
			xhr.open('get', '../json/banner.json', true);
			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4 && xhr.status === 200) {
					let data = window.JSON.parse(xhr.responseText);
					resolve(data);
				}
			}
			xhr.send(null);
		})
	};
	//绑定数据
	let bindHTML = function (data) {
		let slideStr = ``,
			focusStr = ``;
		data.forEach(function (item, index) {
			let {img} = item;
			slideStr += `<div class="slide"><img src="${img}" alt=""></div>`;
			focusStr += `<li class="${index === 0 ? "active" : ""}"></li>`;
		});
		wrapper.innerHTML = slideStr;
		focus.innerHTML = focusStr;
		slideList = wrapper.querySelectorAll('.slide');
		focusList = focus.querySelectorAll('li');
		wrapper.appendChild(slideList[0].cloneNode(true));
		slideList = wrapper.querySelectorAll('.slide');
		utils.css(wrapper, 'width', slideList.length * 800);
	}
	//轮播运动
	let autoMove = function () {
		index++;
		if (index > slideList.length-1) {
			index = 1;
			utils.css(wrapper, 'left', 0);
		}
		animate(wrapper, {
			left: -index * 800
		}, speed);
	};
	return {
		init: function () {
			let promise = queryData();
			promise.then(bindHTML).then(function () {
				autoTimer = setInterval(autoMove, interval);
			})
		}
	}
}());
bannerRender.init();