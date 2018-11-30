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
  top: 20,
  right: 80,
  bottom: 30,
  left: 50
},

width = 900 - margin.left - margin.right,
height = 500 - margin.top - margin.bottom;



var xCoordinate = d3.scaleLinear().range([0, width]);
var yCoordinate = d3.scaleLinear().range([height, 0]);

//создаем ось X   
var xAxis = d3.axisBottom(xCoordinate).ticks();
//создаем ось Y             
var yAxis = d3.axisLeft(yCoordinate).ticks();

// функция, создающая по массиву точек линии
var line = d3.line().curve(d3.curveBasis)

  .x(function(d){
    return d.x;
  })

  .y(function(d){
    return d.y;
  })
;

var area = d3.area().curve(d3.curveBasis)

  .x(function(d) {
    return d.x;
  })

  .y0(height)
        
  .y1(function(d) {
    return d.y;
  })
;






var svg = d3.select(".app")
						.append("svg")
						.attr("class", "axis")
						.attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
;



xCoordinate.domain([0, 200]);
yCoordinate.domain(d3.extent(initData, function(d) { return d.y; }));


// Для интерполяции данных используются две функции xScale и yScale.
// Для перевода реальных данных в координатные применяем цикл по всем элементам массива initData:
var coordinateData = [];

for(var i = 0; i < initData.length; i++)

  coordinateData.push( 
    {x: xCoordinate(initData[i].x), y: yCoordinate(initData[i].y)}
  )

;






var shedule = svg.append("g").attr("class", "shedule");

shedule.append("path").attr( "d", line(coordinateData) ).attr("class", "border-line");
shedule.append("path").attr( "d", area(coordinateData) ).attr("class", "area");

				

//Отрисовка оси Х             
svg.append("g")       
	 .attr("class", "x-axis")
	 .attr("transform", "translate(0," + height + ")")
   .call(xAxis)
;

// отрисовка оси Y
svg.append("g")       
   .attr("class", "y-axis")
   .call(yAxis)
  //  .attr("y", 6)
  //  .attr("dy", ".71em")
  //  .style("text-anchor", "end")
  //  .text("Temperature (ºF)")
;




//Функция, создающая по массиву точек линии
// var line = d3.line()
// .curve(d3.curveBasis)
// .x(function(d){ console.log(d); return d.x;})
// .y(function(d){return d.y;});

//Функция, создающая область
// var area = d3.area()
// .curve(d3.curveBasis)
// .x(function(d) { return d.x;})
// .y0(height - margin)
// .y1(function(d) { return d.y;});



					 
// //Закрашеная область	
// var g = svg.append("g");
// g.append("path")
//  .attr("class", "area")
//  .attr("d", area(myData));
 
// //Бордер


// Создаем набор вертикальных линий для сетки   
// d3.selectAll("g.x-axis g.tick")
// 	.append("line")
// 	.classed("grid-line", true)
// 	.attr("x1", 0)
// 	.attr("y1", 0)
// 	.attr("x2", 0)
// 	.attr("y2", - (height - 2 * margin));
	 
// // Рисуем горизонтальные линии 
// d3.selectAll("g.y-axis g.tick")
// 	.append("line")
// 	.classed("grid-line", true)
// 	.attr("x1", 0)
// 	.attr("y1", 0)
// 	.attr("x2", xAxisLength)
// 	.attr("y2", 0);


// //Закрашеная область	
// var g = svg.append("g");
// g.append("path")
//  .attr("class", "area")
//  .attr("d", area(data));
 
// //Бордер
// var borderLine = g.append("path")
//  .attr("d", line(data))
//  .attr("class", "border-line");

// console.log(borderLine);

// var circle = 
// svg.append("circle")
//   .attr("cx", 100)
//   .attr("cy", 350)
//   .attr("r", 3)
//   .attr("fill", "red");



// var borderLineEl = borderLine.node();
// // console.log(borderLineEl); //node path
// var borderLineLength = borderLineEl.getTotalLength();
// // console.log(borderLineLength); //575
// var BBox = borderLineEl.getBBox();
// // console.log(BBox); //SVGRect {x: 50, y: 50, width: 457.8999938964844, height: 106}

// var scale = borderLineLength/BBox.width;
// var offsetLeft = document.querySelector('.app').offsetLeft;
// console.log(offsetLeft);

// svg.on("mousemove", function(event) {
//   // var x = d3.event.pageX - offsetLeft;

//   var mouse = d3.mouse(this);
//   console.log(mouse);
//   var x = d3.event.pageX;
//   // console.log(x);
//   var beginning = x;
//   var end = borderLineLength;
//   var target;

//   while (true) {

//     target = Math.floor((beginning + end) / 2);

//     pos = borderLineEl.getPointAtLength(target);

//     if ((target === end || target === beginning) && pos.x !== x) {
//       break;
//     }

//     if (pos.x > x) {
//       end = target;
//     }

//     else if (pos.x < x) {
//       beginning = target;
//     }

//     else {
//       break; //position found
//     }       
//   }
    
//   circle
//   .attr("opacity", 1)
//   .attr("cx", x)
//   .attr("cy", pos.y);

// });









// добавляем заголовок
// g.append("text")
// .attr("x", (width / 2))
// .attr("y", margin - 10 )
// .attr("text-anchor", "middle")
// .style("font-size", "22px")
// .text("График значений");

// //Текст для оси Y
// g.append("text")
// .attr("x", margin + 20)
// .attr("y", margin - 20)
// .attr("class", "textY")
// .text("Fuel");

// //Текст для оси X
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










var mouseG = svg.append("g").attr("class", "mouse-over-effects");

    mouseG.append("path") // this is the black vertical line to follow mouse
      .attr("class", "mouse-line")
      .style("stroke", "black")
      .style("stroke-width", "1px")
      .style("opacity", "0")
    ;
      
    var line = document.querySelector('.border-line');
    console.log(line);

    var mousePerLine = mouseG.append("g").attr("class", "mouse-per-line");

    mousePerLine.append("circle")
      .attr("r", 7)
      .style("stroke", 'red')
      .style("fill", "none")
      .style("stroke-width", "1px")
      .style("opacity", "0")
    ;

    mousePerLine.append("text")
      .attr("transform", "translate(10,3)")
    ;
			

    mouseG.append('svg:rect') // append a rect to catch mouse movements on canvas
      .attr('width', width) // can't catch mouse events on a g element
      .attr('height', height)
      .attr('fill', 'none')
      .attr('pointer-events', 'all')

      .on('mouseout', function() { // on mouse out hide line, circles and text
        d3.select(".mouse-line")
          .style("opacity", "0");
        d3.select(".mouse-per-line circle")
          .style("opacity", "0");
        d3.select(".mouse-per-line text")
          .style("opacity", "0");
      })

      .on('mouseover', function() { // on mouse in show line, circles and text
        d3.select(".mouse-line")
          .style("opacity", "1");
        d3.select(".mouse-per-line circle")
          .style("opacity", "1");
        d3.select(".mouse-per-line text")
          .style("opacity", "1");
      })
      
      .on('mousemove', function() { // mouse moving over canvas
        var mouse = d3.mouse(this);
        console.log(mouse);
        d3.select(".mouse-line")
          .attr("d", function() {
            var d = "M" + mouse[0] + "," + height;
            d += " " + mouse[0] + "," + 0;
            console.log(d);
            return d;
          });

     

        d3.select(".mouse-per-line")
          .attr("transform", function(d) {
            var xDate = xCoordinate.invert(mouse[0]);
            var bisect = d3.bisector(function(d) { return d.x; }).right;
            var idx = bisect(initData, xDate);
            
            var beginning = 0;
            var end = line.getTotalLength();
            var target;
            var pos;

            while (true){
              target = Math.floor((beginning + end) / 2);
              pos = line.getPointAtLength(target);

              if ((target === end || target === beginning) && pos.x !== mouse[0]) {
                  break;
              }
              if (pos.x > mouse[0])      end = target;
              else if (pos.x < mouse[0]) beginning = target;
              else break; //position found
            }

            d3.select(this).select('text')
              .text(yCoordinate.invert(pos.y).toFixed(2));
              
            return "translate(" + mouse[0] + "," + pos.y +")";
          });
      });

    