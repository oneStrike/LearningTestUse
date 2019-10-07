$(function () {
	//获取数据
	let productData = null,
		$ulBox = $('.list');
	(function () {
		$.ajax({
			url: '../json/mallSort.json',
			method: 'GET',
			dataType: 'json',
			async: false,
			success: function (result) {
				productData = result
			}
		});

	})();

	//绑定数据
	let setData = () => {
		let str = ``;
		for (let i = 0; i < productData.length; i++) {
			let item = productData[i];
			let {
				title,
				hot,
				time,
				price,
				img
			} = item;
			str += `<li data-time="${time}" data-price="${price}" data-hot="${hot}">
                <a href="javascript:;">
                    <img src="${img}" alt="">
                    <p>${title}</p>
                    <span>￥${price}</span>
                </a>
            </li>`;
		}
		console.log(str);
		$ulBox.append(str)
	};
	setData();
	//点击事件
	
		let $liList = $ulBox.find('li');
	let setClick = function () {
		$liList.each((index,item)=>{
			console.log(123)
		})
	}
	console.log($liList);
	setClick()
});