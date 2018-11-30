'use strict'

var width = 582;
var height = 206;
var margin = 50;

var rawData = [									
	{x: 0, y: 100},
	{x: 5, y: 100},
	{x: 10, y: 100},
	{x: 15, y: 100},
	{x: 20, y: 100},
	{x: 25, y: 95},
	{x: 30, y: 95},
	{x: 35, y: 95},
	{x: 40, y: 95},
	{x: 45, y: 90},
	{x: 50, y: 90},
	{x: 55, y: 90},
	{x: 60, y: 90},
	{x: 65, y: 85},
	{x: 70, y: 85},
	{x: 75, y: 80},
	{x: 80, y: 80},
	{x: 85, y: 80},
	{x: 90, y: 75},
	{x: 95, y: 75},
	{x: 100, y: 70},
	{x: 105, y: 65},
	{x: 110, y: 60},
	{x: 115, y: 58},
	{x: 120, y: 56},
	{x: 125, y: 54},
	{x: 130, y: 52},
	{x: 135, y: 50},
	{x: 140, y: 50},
	{x: 145, y: 50},
	{x: 150, y: 50},
	{x: 155, y: 50},
	{x: 160, y: 100},
	{x: 165, y: 95},
	{x: 170, y: 90},
	{x: 175, y: 90},
	{x: 180, y: 90},
	{x: 185, y: 90},
	{x: 190, y: 0},
];

var data = [];

var svg = d3.select(".app")
						.append("svg")
						.attr("class", "axis")
						.attr("width", width)
						.attr("height", height);

//Длина оси X= ширина контейнера svg - отступ слева и справа
var xAxisLength = width - 2 * margin;     

//Длина оси Y = высота контейнера svg - отступ сверху и снизу
var yAxisLength = height - 2 * margin;

//Функция интерполяции значений на ось Х  
var scaleX = d3.scaleLinear()
							 .domain([0, 200])
							 .range([0, xAxisLength]);					
					 
//Функция интерполяции значений на ось Y
var scaleY = d3.scaleLinear()
							 .domain([100, 0])
							 .range([0, yAxisLength]);
					 
for(var i=0; i<rawData.length; i++)
	data.push( {x: scaleX(rawData[i].x) + margin, y: scaleY(rawData[i].y) + margin} );
					 
// создаем ось X   
var xAxis = d3.axisBottom(scaleX)
							.ticks(); // сколько делений на оси;

// создаем ось Y             
var yAxis = d3.axisLeft(scaleY)
							.ticks(2); // сколько делений на оси;
						
//Отрисовка оси Х             
svg.append("g")       
	 .attr("class", "x-axis")
	 .attr("transform",
			 "translate(" + margin + "," + (height - margin) + ")")
	 .call(xAxis);

// отрисовка оси Y
svg.append("g")       
	 .attr("class", "y-axis")
	 .attr("transform", 
					"translate(" + margin + "," + margin + ")")
	 .call(yAxis);
	 
//Рисуем горизонтальные линии 
d3.selectAll("g.y-axis g.tick")
	.append("line")
	.classed("grid-line", true)
	.attr("x1", 0)
	.attr("y1", 0)
	.attr("x2", xAxisLength)
	.attr("y2", 0);

//Функция, создающая по массиву точек линии
var line = d3.line()
						 .curve(d3.curveBasis)
						 .x(function(d){return d.x;})
						 .y(function(d){return d.y;});

//Функция, создающая область
var area = d3.area()
						 .curve(d3.curveBasis)
						 .x(function(d) { return d.x;})
					   .y0(height - margin)
						 .y1(function(d) { return d.y;});
						
//Закрашеная область	
var g = svg.append("g");
g.append("path")
 .attr("class", "area")
 .attr("d", area(data));
 
//Контур закрашеваемой области (бордер)
g.append("path")
 .attr("d", line(data))
 .attr("class", "border-line");

//Текст для оси Y
g.append("text")
.attr("x", margin - 20)
.attr("y", margin - 20)
.attr("class", "textY")
.text("Fuel");

//Текст для оси X
g.append("text")
.attr("x", width - margin + 3) //582 - 50 + 3 = 535
.attr("y", height - margin - 56) //100
.attr("class", "textX")
.text("90%");

g.append("text")
.attr("x", width - margin + 8) //582 - 50 + 8 = 540
.attr("y", height - margin - 26) //130
.attr("class", "textX")
.text("Full");