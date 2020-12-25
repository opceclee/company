// 模拟后台接口\\

var dt;
$.ajax({
	url: 'website/news/list',
	type: 'POST',
	dataType: "json",
	data: {
		'type': '2'
	},
	success: function (datas) { //请求成功后处理函数。
		dt = datas.result
		console.log(datas)
		var htmltext = '';

	},
	error: function (d, msg) {
		console.log("Could not find user " + msg);
	}
});

function getData(params) {
	var data = dt;
	// var data = [
	// 	{id: 1, name: '小王', age: 10},
	// 	{id: 2, name: '当', age: 23},
	// 	{id: 3, name: '节点', age: 12},
	// 	{id: 4, name: '科二', age: 23},
	// 	{id: 5, name: '开心', age: 44},
	// 	{id: 6, name: '为', age: 12},
	// 	{id: 7, name: '看我', age: 22},
	// 	{id: 8, name: '看', age: 43},
	// 	{id: 9, name: '考虑', age: 15},
	// 	{id: 10, name: '为额', age: 18},
	// 	{id: 11, name: '熊', age: 32},
	// 	{id: 12, name: '下', age: 51},
	// 	{id: 13, name: '前往', age: 23},
	// 	{id: 14, name: '我去', age: 28},
	// 	{id: 15, name: '问', age: 36},
	// 	{id: 16, name: '跳', age: 46},
	// 	{id: 17, name: '欧文', age: 31}
	// ]

	var start = (params.current - 1) * params.size;
	var end = params.current * params.size;

	return {
		total: data.length,
		list: data.splice((params.current - 1) * params.size, params.size)
	}
}

// 设置tbody的html
function setTbody(arr) {
	// var html = '';
	// for (var i = 0; i < arr.length; i++) {
	// 	var item = arr[i];
	// 	html += '<tr><td>' + item.id + '</td><td>' + item.name + '</td><td>' + item.age + '</td></tr>';
	// }
	// $('.tbody').html(html);
	var data = arr;
	var htmltext = '';
	for (var i in data) {
		htmltext += '<div class="col-sm-12 col-md-4">' +
			'<a href="news-child.html?articleId=' + data[i].id + '"  target="_blank">' +
			'<div class="f1">' +
			'<span>' +
			'<img src="' + data[i].img + '"/ alt="" width="262">' +
			'</span>'

			+
			'<h2 class="f-tit">' + data[i].title + '</h2>' +
			'<p class="f-cont">' + showHTML(data[i].content, 200, "  ......") + '</p>' +
			'<p class="f-time">' + data[i].updateTime.substring(0, 10) + '</p>'

			+
			'</div>' +
			'</a>' +
			'</div>'
	}
	$(".focus .container").html(htmltext);
}

function showHTML(str, length, endstr) {
	if (str != null) {
		var html = str.replace(/<[^>]+>/g, "").replace(/&nbsp;/ig, "").substring(0, length) + endstr;
		return html;
	}
	return null;

}

// 初始化分页
$('.box2').MyPaging({
	size: 3,
	total: 0,
	current: 1,
	prevHtml: '上一页',
	nextHtml: '下一页',
	layout: 'total, totalPage, prev, pager, next, jumper',
	jump: function () {
		var _this = this;

		// 模拟ajax获取数据
		setTimeout(function () {
			var res = getData({
				size: _this.size,
				current: _this.current
			})

			setTbody(res.list);

			// 必须调用
			_this.setTotal(res.total);
		}, 100);
	}
});