$(function () {

	$("#tabs").tabs({
		active : 0
	});

	// Hover states on the static widgets
	$("#dialog-link, #icons li").hover(
		function () {
		$(this).addClass("ui-state-hover");
	},
		function () {
		$(this).removeClass("ui-state-hover");
	});

	$.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=range.json&callback=?', function (data) {

		$('#lastweek').highcharts({

			chart : {
				type : 'arearange'
			},

			title : {
				text : 'Traffic Inflow by Hour Last week'
			},

			xAxis : {
				type : 'datetime'
			},

			yAxis : {
				title : {
					text : 'Traffic'
				}
			},

			tooltip : {
				crosshairs : true,
				shared : true
			},

			legend : {
				enabled : false
			},

			series : [{
					name : 'Traffic',
					data : data,
					color : '#FF0000',
					negativeColor : '#0088FF'
				}
			]

		});
	});

	$.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=range.json&callback=?', function (data) {

		$('#today > #container1').highcharts({

			chart : {
				type : 'arearange'
			},

			title : {
				text : 'Traffic Inflow by Hour'
			},

			xAxis : {
				type : 'datetime'
			},

			yAxis : {
				title : {
					text : 'Traffic'
				}
			},

			tooltip : {
				crosshairs : true,
				shared : true
			},

			legend : {
				enabled : false
			},

			series : [{
					name : 'Traffic',
					data : data,
					color : '#FF0000',
					negativeColor : '#0088FF'
				}
			]

		});
	});

	$.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=range.json&callback=?', function (data) {

		$('#today > #container2').highcharts({

			chart : {
				type : 'arearange'
			},

			title : {
				text : 'Traffic Trend in last 5 days'
			},

			xAxis : {
				type : 'datetime'
			},

			yAxis : {
				title : {
					text : 'Traffic'
				}
			},

			tooltip : {
				crosshairs : true,
				shared : true
			},

			legend : {
				enabled : false
			},

			series : [{
					name : 'Traffic',
					data : data,
					color : '#FF0000',
					negativeColor : '#0088FF'
				}
			]

		});
	});

	$.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=range.json&callback=?', function (data) {
		$('#overall').highcharts({

			chart : {
				type : 'pie'
			},
			series : [{
					data : [10, 15, 12, 8, 7]
				}
			],
			title : {
				text : 'Entrance Usage'
			},
			loading : false

		});
	});
});
