//[Dashboard Javascript]

//Project:	Indusui admin - Responsive Admin Template
//Primary use:   Used only for the main dashboard (index.html)

$(function () {

  'use strict';
	
		// donut chart
		$('.donut').peity('donut');
	
		// revenue-analysis           
		 var mensal2 = jQuery('#mensal2')
			if (mensal2.length > 0) {
			   var options = {
					chart: {
						height: 359,
						type: 'area',
						toolbar: {
						show: false
						},
					},
					dataLabels: {
						enabled: false
					},
					legend: {
						show: false,
					},
					colors:['#FC3468'],
					fill: {
					type: 'gradient',
						gradient: {
						  type: "vertical",
						  shadeIntensity: 0,
						  opacityFrom: 0.3,
						  opacityTo: 0.2,
						  gradientToColors: ['#fcc525'],
						  stops: [0, 90, 100]
						}
				  },
					stroke: {
						curve: 'smooth',
						width: 2
					},
					series: [{
						name: 'Total Entradas',
						data: [143, 109, 320, 103, 150, 240, 160, 443, 93, 90, 120, 140]
					}],
					tooltip: {
						x: {
							format: 'dd/MM/yy HH:mm'
						},
					},
					xaxis: {
						show: true,
						labels: {
							show: true,
						},
						 axisBorder: {
							 color: '#cccccc',
							 show: true,
						 },
						 axisTicks: {
						 color: '#cccccc',
						 },
						categories: ['Jan', 'fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
					},
					yaxis: {
					labels: {
						show: true,
					},
					axisBorder: {
						 color: '#fff',
						 show: true,
					 },
					},
					grid: {
					show: true,
					borderColor: '#efefef',
					},
				}
			var chart = new ApexCharts(
				document.querySelector("#mensal2"),
				options
			);
			chart.render();
		 }

// horarios_mais_vendas           
var horarios_vendas = jQuery('#horarios_vendas')
if (horarios_vendas.length > 0) {
   var options = {
		chart: {
			height: 359,
			type: 'area',
			toolbar: {
			show: false
			},
		},
		dataLabels: {
			enabled: false
		},
		legend: {
			show: false,
		},
		colors:['#2a93d5'],
		fill: {
		type: 'gradient',
			gradient: {
			  type: "vertical",
			  shadeIntensity: 0,
			  opacityFrom: 0.3,
			  opacityTo: 0.2,
			  gradientToColors: ['#fcc525'],
			  stops: [0, 90, 100]
			}
	  },
		stroke: {
			curve: 'smooth',
			width: 2
		},
		series: [{
			name: 'Total Entradas',
			data: [20, 30, 42, 53, 32, 50, 60, 43, 43, 32, 20, 40]
		}],
		tooltip: {
			x: {
				format: 'dd/MM/yy HH:mm'
			},
		},
		xaxis: {
			show: true,
			labels: {
				show: true,
			},
			 axisBorder: {
				 color: '#cccccc',
				 show: true,
			 },
			 axisTicks: {
			 color: '#cccccc',
			 },
			categories: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
		},
		yaxis: {
		labels: {
			show: true,
		},
		axisBorder: {
			 color: '#fff',
			 show: true,
		 },
		},
		grid: {
		show: true,
		borderColor: '#efefef',
		},
	}
var chart = new ApexCharts(
	document.querySelector("#horarios_vendas"),
	options
);
chart.render();
}

		 // anual           
		 var anual2 = jQuery('#anual2')
			if (anual2.length > 0) {
			   var options = {
					chart: {
						height: 359,
						type: 'area',
						toolbar: {
						show: false
						},
					},
					dataLabels: {
						enabled: false
					},
					legend: {
						show: false,
					},
					colors:['#FC3468'],
					fill: {
					type: 'gradient',
						gradient: {
						  type: "vertical",
						  shadeIntensity: 0,
						  opacityFrom: 0.3,
						  opacityTo: 0.2,
						  gradientToColors: ['#fcc525'],
						  stops: [0, 90, 100]
						}
				  },
					stroke: {
						curve: 'smooth',
						width: 2
					},
					series: [{
						name: 'Total Saídas',
						data: [30, 40, 59, 93, 180, 200, 320, 402, 440, 520, 600, 300]
					}],
					tooltip: {
						x: {
							format: 'dd/MM/yy HH:mm'
						},
					},
					xaxis: {
						show: true,
						labels: {
							show: true,
						},
						 axisBorder: {
							 color: '#cccccc',
							 show: true,
						 },
						 axisTicks: {
						 color: '#cccccc',
						 },
						categories: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
					},
					yaxis: {
					labels: {
						show: true,
					},
					axisBorder: {
						 color: '#fff',
						 show: true,
					 },
					},
					grid: {
					show: true,
					borderColor: '#efefef',
					},
				}
			var chart = new ApexCharts(
				document.querySelector("#anual2"),
				options
			);
			chart.render();
		 }
	
		$("#linearea").sparkline([50, 90, 85, 70, 95 , 88, 82, 90, 85, 70, 95 , 88, 82, 50], {
			type: 'line',
			width: '100%',
			height: '30',
			lineColor: '#00c689',
			fillColor: '#00c689',
			lineWidth: 1,
			spotRadius: 2,
			minSpotColor: false,
    		maxSpotColor: false
		});
		$("#baralc").sparkline([50, 90, 85, 70, 95 , 88, 82, 90, 85, 70, 95 , 88, 82, 50], {
			type: 'bar',
			height: '30',
			barWidth: 6,
			barSpacing: 4,
			barColor: '#fda006',
		});		
		$("#lineIncrease").sparkline([50, 90, 85, 70, 95 , 88, 82, 90, 85, 70, 95 , 88, 82, 50], {
			type: 'line',
			width: '100%',
			height: '30',
			lineWidth: 2,
			lineColor: '#00BCD4',
			fillColor: "#ffffff",
			spotColor: '#fda006',
			minSpotColor: '#fda006',
			maxSpotColor: '#fda006',
			spotRadius: 3,
		});
	
	
		Apex.grid = {
		  padding: {
			right: 0,
			left: 0
		  }
		}

		Apex.dataLabels = {
		  enabled: false
		}

		var randomizeArray = function (arg) {
		  var array = arg.slice();
		  var currentIndex = array.length, temporaryValue, randomIndex;

		  while (0 !== currentIndex) {

			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		  }

		  return array;
		}

		// data for the sparklines that appear below header area
		var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

		var spark1 = {
		  chart: {
			id: 'sparkline1',
			group: 'sparklines',
			type: 'area',
			height: 373,
			sparkline: {
			  enabled: true
			},
		  },
		  stroke: {
			curve: 'straight'
		  },
		  fill: {
			opacity: 1,
			colors: ['#405189']
		  },
		  series: [{
			name: 'Sales',
			data: randomizeArray(sparklineData)
		  }],
		  labels: [...Array(24).keys()].map(n => `2018-09-0${n+1}`),
		  yaxis: {
			min: 0
		  },
		  xaxis: {
			type: 'datetime',
		  },
		  colors: ['#405189'],

		}

		new ApexCharts(document.querySelector("#spark1"), spark1).render();
	
		
		var optionsBar = {
			chart: {
			  type: 'bar',
			  height: 359,
			  width: '100%',
			  foreColor: '#999'
			},
			plotOptions: {
			  bar: {
				columnWidth: '75%',
				endingShape: 'flat'
			  }
			},
			dataLabels: {
			  enabled: true,
			  style: {
				fontSize: '14px', // Diminuir o tamanho da fonte
				colors: ["#696969"] // Tornar os rótulos cinza
			  },
			  //formatter: function (val) {
				//return "R$" + val.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
			  //},
			  offsetY: 20 // Mova o rótulo para o topo das barras
			},
			colors: ["#00C5A4"],
			series: [{
			  name: "Total Saídas",
			  data: [180, 112, 140, 27, 21, 180, 100],
			}],
			xaxis: {
			  axisBorder: {
				show: false
			  },
			  categories: getWeekDaysWithDates(),
			  axisTicks: {
				show: false
			  },
			  crosshairs: {
				show: false
			  },
			  labels: {
				show: true,
				style: {
				  fontSize: '14px'
				}
			  },
			},
			grid: {
			  xaxis: {
				lines: {
				  show: false
				},
			  },
			  yaxis: {
				lines: {
				  show: false
				},
			  }
			},
			yaxis: {
			  axisBorder: {
				show: false
			  },
			  labels: {
				show: false
			  },
			},
			tooltip: {
			  shared: true,
			  y: {
				formatter: function (val) {
				  return "R$" + val.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
				}
			  }
			}
		  }
		  
		  function getWeekDaysWithDates() {
			var days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
			var today = new Date();
			var weekDaysWithDates = [];
			for (var i = 6; i >= 0; i--) {
			  var date = new Date(today);
			  date.setDate(today.getDate() - i);
			  var formattedDate = date.getDate() + '/' + (date.getMonth() + 1);
			  weekDaysWithDates.push(days[(date.getDay())] + ' ' + formattedDate);
			}
			return weekDaysWithDates;
		  }
		  
		  var chartBar = new ApexCharts(document.querySelector('#bar'), optionsBar);
		  chartBar.render();
	
		
	
}); // End of use strict

