'use strict'

var initData = [
  {
    date: "2018-09-11T21:00:00Z",
    level: 100
  },
  {
    date: "2018-09-12T13:00:00Z",
    level: 100.0
  },
  {
    date: "2018-09-12T14:00:00Z",
    level: 100.0
  },
  {
    date: "2018-09-12T15:00:00Z",
    level: 91
  },
  {
    date: "2018-09-12T22:00:00Z",
    level: 86
  },
  {
    date: "2018-09-12T23:00:00Z",
    level: 83
  },
  {
    date: "2018-09-13T00:00:00Z",
    level: 81
  },
  {
    date: "2018-09-13T22:00:00Z",
    level: 79.0
  },
  {
    date: "2018-09-13T23:00:00Z",
    level: 71.5
  },
  {
    date: "2018-09-14T00:00:00Z",
    level: 67.5
  },
  {
    date: "2018-09-14T03:00:00Z",
    level: 65
  },
  {
    date: "2018-09-14T11:00:00Z",
    level: 61.0
  },
  {
    date: "2018-09-14T12:00:00Z",
    level: 57.0
  },
  {
    date: "2018-09-14T15:00:00Z",
    level: 53
  },
  {
    date: "2018-09-14T16:00:00Z",
    level: 50
  },
  {
    date: "2018-09-14T17:00:00Z",
    level: 47.5
  },
  {
    date: "2018-09-14T18:00:00Z",
    level: 46
  },
  {
    date: "2018-09-14T19:00:00Z",
    level: 46
  },
  {
    date: "2018-09-14T20:00:00Z",
    level: 43
  },
  {
    date: "2018-09-14T21:00:00Z",
    level: 100.0
  },
  {
    date: "2018-09-14T22:00:00Z",
    level: 100
  },
  {
    date: "2018-09-14T23:00:00Z",
    level: 100.0
  }
];



var parsed1 = initData.map((item) => {

	return {	date: new Date(item.date).getDate(), level: item.level };

});
console.log(parsed1);
////




var strictIsoParse = d3.utcParse("%Y-%m-%dT%H:%M:%LZ");

var parsed = initData.map((item) => {

	return {	date: strictIsoParse(item.date), level: item.level };

});




// var strictIsoParse = d3.utcParse("%Y-%m-%dT%H:%M:%LZ");

// var parsed = initData.map((item) => {

// 	return {	date: new Date(item.date), level: item.level };

// });




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
var xCoordinate = d3.scaleTime().rangeRound([0, width]);
var yCoordinate = d3.scaleLinear().rangeRound([height, 0]);

var zCoordinate = d3.scaleTime().rangeRound([0, width]);

// var line = d3.line().curve(d3.curveBasis)

//   .x(function(d){
//     return zCoordinate(d.date);
//   })

//   .y(function(d){
//     return yCoordinate(d.level);
// 	})
// ;






// xCoordinate.domain([0, 200]);



xCoordinate.domain(d3.extent(parsed, function(d) {
	console.log(d);
	return d.date;
}));


yCoordinate.domain(d3.extent(parsed, function(d) {
	return d.level;
}));


// 

//Создаем ось X с кол-вом делений 0
var xAxis = d3.axisBottom(xCoordinate).ticks(4).tickFormat(d3.timeFormat('%d.%m'));
//создаем ось Y с кол-вом делений 2             
var yAxis = d3.axisLeft(yCoordinate).ticks(5);


//Функция, создающая по массиву точек линию
var line = d3.line().curve(d3.curveBasis)

  .x(function(d){
    return xCoordinate(d.date);
  })

  .y(function(d){
    return yCoordinate(d.level);
	})
;




// Функция, создающая по массиву точек область
var area = d3.area().curve(d3.curveBasis)

  .x(function(d) {
    return xCoordinate(d.date);
  })

  .y0(height)
        
  .y1(function(d) {
    return yCoordinate(d.level);
  })
;

// Добавляем SVG на страницу
var svg = d3.select(".app")
						.append("svg")
						.attr("class", "axis")
						.attr("viewBox", "0 0 570 170")
						// .attr("width", width + margin.left + margin.right)
						// .attr("height", height + margin.top + margin.bottom)
;

var container = svg.append("g")
                   .attr("class", "container")
                   .attr("transform", "translate(" + 30 + "," + 20 + ")")
;




var shedule = container.append("g")
											 .attr("class", "shedule");
											 


// Функция, создающая по массиву точек линию
shedule.append("path").attr( "d", line(parsed) ).attr("class", "border-line");
//Функция, создающая область закрашеная область	
shedule.append("path").attr( "d", area(parsed) ).attr("class", "area");


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


// var yTextBox = axisTravel.append("rect")
//                            .attr("class", "text-box")
//                            .attr("width", 50)
//                            .attr("height", 16)
// 													 .attr("x", 9)
// 													 .attr("y", -20)
// ;




// this is the rect to follow mouse
// var xTextBox = axisTravel.append("defs").append("filter")
//                           //  .attr("class", "text-box")
//                           //  .attr("width", 50)
//                           //  .attr("height", 16)
// 													//  .attr("x", 9)
// 													//  .attr("y", 0)
// ;

var xTextBox = axisTravel.append("defs")
                         .append("filter")
                         .attr("x", 0)
                         .attr("y", 0)
                         .attr("width", 1)
                         .attr("height", 1)
                         .attr("id", "solid")

                          //  .attr("width", 50)
                          //  .attr("height", 16)
													//  .attr("x", 9)
													//  .attr("y", 0)
;

xTextBox.append("feFlood").attr("flood-color", "yellow");

xTextBox.append("feComposite").attr("in", "SourceGraphic");






// <defs>
// <filter x="0" y="0" width="1" height="1" id="solid">
//   <feFlood flood-color="yellow"/>
//   <feComposite in="SourceGraphic"/>
// </filter>
// </defs>





var xText = axisTravel.append("text")
  											.attr("transform", "translate(13,12)")
                        .attr("class", "text")
                        .attr("filter", "url(#solid)")
                        .attr("x", 10)
                        .attr("y", "1em")
                        .attr("fill", "#000")


;


// var xText = axisTravel.append("q")
//   											// .attr("transform", "translate(13,12)")
//                         .attr("class", "textD")
//                         // .attr("filter", "url(#solid)")
//                         // .attr("x", 10)
//                         // .attr("y", "1em")
//                         // .attr("fill", "#000")


// ;




/* <text fill="#000" x="10" y="1em" font-size="50" font-family="Arial"> */


// var xTextSpan = xText.append("tspan")
//   											// .attr("transform", "translate(13,12)")
//                         // .attr("class", "text")
//                         // .attr("filter", "url(#solid)")
// ;





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


    // xText.text(moment(xCoordinate.invert(pos.x)).format('DD.MM.YYYY. HH:mm'));

    xText.text(moment(xCoordinate.invert(pos.x)).format('HH:mm'));
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
