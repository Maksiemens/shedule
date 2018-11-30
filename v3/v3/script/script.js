'use strict'

var initData = [									
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


var margin = {
  top: 50,
  right: 80,
  bottom: 30,
  left: 50
};

// Ширина и высота
var width = 600 - margin.left - margin.right; //Изменяешь ширину
var height = 200 - margin.top - margin.bottom;  //Изменяешь высоту

// Масштабирование SVG
var xCoordinate = d3.scaleLinear().range([0, width]);
var yCoordinate = d3.scaleLinear().range([height, 0]);

xCoordinate.domain([0, 200]);
yCoordinate.domain(d3.extent(initData, function(d) { return d.y; }));

//Создаем ось X с кол-вом делений 0
var xAxis = d3.axisBottom(xCoordinate).ticks();
//создаем ось Y с кол-вом делений 2             
var yAxis = d3.axisLeft(yCoordinate).ticks(2);

// Для перевода реальных данных в координатные применяем цикл по всем элементам массива initData:
var coordinateData = [];

for(var i = 0; i < initData.length; i++)
  coordinateData.push( 
    {x: xCoordinate(initData[i].x), y: yCoordinate(initData[i].y)}
  )
;

//Функция, создающая по массиву точек линию
var line = d3.line().curve(d3.curveBasis)

  .x(function(d){
    return d.x;
  })

  .y(function(d){
    return d.y;
  })
;

// Функция, создающая по массиву точек область
var area = d3.area().curve(d3.curveBasis)

  .x(function(d) {
    return d.x;
  })

  .y0(height)
        
  .y1(function(d) {
    return d.y;
  })
;
console.log(width);
// Добавляем SVG на страницу
var svg = d3.select(".app")
						.append("svg")
						.attr("class", "axis")
						.attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
;
console.log(width);
var container = svg.append("g")
                   .attr("class", "container")
                   .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
;
console.log(width);

var shedule = container.append("g")
                       .attr("class", "shedule");

// Функция, создающая по массиву точек линию
shedule.append("path").attr( "d", line(coordinateData) ).attr("class", "border-line");
//Функция, создающая область закрашеная область	
shedule.append("path").attr( "d", area(coordinateData) ).attr("class", "area");
console.log(width);
//Отрисовка оси Х             
container.append("g")       
	 .attr("class", "x-axis")
	 .attr("transform", "translate(0," + height + ")")
   .call(xAxis)
;

// отрисовка оси Y
container.append("g")       
   .attr("class", "y-axis")
   .call(yAxis)
;

// Рисуем горизонтальные линии 
d3.selectAll("g.y-axis g.tick")
	.append("line")
	.classed("grid-line", true)
	.attr("x1", 0)
	.attr("y1", 0)
	.attr("x2", width)
  .attr("y2", 0)
;

// Создаем набор вертикальных линий для сетки   
// d3.selectAll("g.x-axis g.tick")
// 	.append("line")
// 	.classed("grid-line", true)
// 	.attr("x1", 0)
// 	.attr("y1", 0)
// 	.attr("x2", 0)
//   .attr("y2", - (height))
// ;
	 
//Добавляем заголовок
// g.append("text")
// .attr("x", (width / 2))
// .attr("y", margin.top - 10 )
// .attr("text-anchor", "middle")
// .style("font-size", "22px")
// .text("График значений")
// ;

// //Текст для оси Y
// container.append("g")       
//    .attr("class", "y-text")
//    .attr("x",  700)
//   .attr("y",   49)
//   .attr("class", "textY")
//   .text("Fuel");
// ;


// g.append("text")
// .attr("x", margin + 20)
// .attr("y", margin - 20)
// .attr("class", "textY")
// .text("Fuel");

//Текст для оси X
// g.append("text")
// .attr("x", width - margin + 48) //580
// .attr("y", height - margin - 56) //100
// .attr("class", "textX")
// .text("90%");

// g.append("text")
// .attr("x", width - margin + 42) //574
// .attr("y", height - margin - 26) //130
// .attr("class", "textX")
// .text("Full");


// добавляем отметки к точкам
// svg.selectAll(".dot")
// .data(rawData)
// .enter().append("circle")
// .attr("class", "dot")
// .attr("r", 3.5)
// .attr("cx", function(d) { return scaleX(d.x)+margin; })
// .attr("cy", function(d) { return scaleY(d.y)+margin; });


var interactiveWrap = container.append("g")
                               .attr("class", "interactive-wrap")
;

var lineWrap = interactiveWrap.append("g")
															.attr("class", "line-wrap")
;

var axisTravel = lineWrap.append("g")
												 .attr("class", "axis-travel")
;

// this is the vertical line to follow mouse
var verticalLine = lineWrap.append("line")
													 .attr("class", "vertical-line")
													 .attr("x1", 0)
													 .attr("x2", 0)
													 .attr("y1", 0)
													 .attr("y2", height)									
;

var circle = axisTravel.append("circle")
										 .attr("class", "circle")
										 .attr("r", 7)
;

// this is the rect to follow mouse
var yTextBox = axisTravel.append("rect")
                           .attr("class", "text-box")
                           .attr("width", 50)
                           .attr("height", 16)
													 .attr("x", 9)
													 .attr("y", -20)
;

// this is the rect to follow mouse
var xTextBox = axisTravel.append("rect")
                           .attr("class", "text-box")
                           .attr("width", 50)
                           .attr("height", 16)
													 .attr("x", 9)
													 .attr("y", 0)
;

var xText = axisTravel.append("text")
  											.attr("transform", "translate(13,12)")
  											.attr("class", "text")
;

var yText = axisTravel.append("text")
  											.attr("transform", "translate(13,-7)")
  											.attr("class", "text")
;

// interactive-layer === rect // append a rect to catch mouse movements on canvas
var interactiveLayer = interactiveWrap.append("rect")
                                      .attr("class", "interactive-layer")
                                      .attr('width', width)
                                      .attr('height', height)
                                      .attr('fill', 'none')
                                      .attr('pointer-events', 'all')
;


//get Node
var lineWrapNode = lineWrap.node();

// on mouse out hide line, circles and text
interactiveLayer.on('mouseout', function() {
	lineWrapNode.classList.remove("active");
});

// on mouse in show line, circles and text
interactiveLayer.on('mouseover', function() {
	lineWrapNode.classList.add("active");
})


var borderLine = document.querySelector('.border-line');

// mouse moving over canvas
interactiveLayer.on('mousemove', function() {
	var mouse = d3.mouse(this);

	lineWrap.attr("transform", "translate(" + mouse[0] + "," + 0 + ")" );

	axisTravel.attr("transform", function(d) {                     
    var beginning = 0;
    var end = borderLine.getTotalLength();

		while (true){
			var target = Math.floor((beginning + end) / 2);
			var pos = borderLine.getPointAtLength(target);

			if ((target === end || target === beginning) && pos.x !== mouse[0]) {
				break;
			}
			else if (pos.x > mouse[0]) {
				end = target;
			}      
			else if (pos.x < mouse[0]) {
				beginning = target;
			}
			else {
				break; //position found
			} 
		}

		xText.text(xCoordinate.invert(pos.x).toFixed(2));
		yText.text(yCoordinate.invert(pos.y).toFixed(2) + " %");
	
	
		return "translate(" + 0 + "," + pos.y +")";
	});

});


var xTextAaxis = svg.append("g")
										.attr("class", "x-text-axis")
;

var yTextAaxis = svg.append("g")
										.attr("class", "y-text-axis")
;

//Текст для оси X
xTextAaxis.append("text")
      		.attr("x", margin.right)
      		.attr("y", margin.bottom)
      		.attr("class", "textY")
      		.text("Fuel")
;

//Текст для оси Y
yTextAaxis.append("text")
      		.attr("x", width + margin.left + margin.right)
      		.attr("y", height)
      		.attr("class", "textX")
      		.text("90%");
;

yTextAaxis.append("text")
      .attr("x", width + margin.left + margin.right - 10)
      .attr("y", height + margin.bottom)
      .attr("class", "textX-s")
      .text("Full");
;