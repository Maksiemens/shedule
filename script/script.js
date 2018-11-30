'use strict'


var initData =
[
  {x: "2018-11-15T13:00:00Z", y: 12.6},
  {x: "2018-11-15T14:00:00Z", y: 12.6},
  {x: "2018-11-15T15:00:00Z", y: 12.6},
  {x: "2018-11-15T16:00:00Z", y: 12.6},
  {x: "2018-11-15T17:00:00Z", y: 12.6},
  {x: "2018-11-15T18:00:00Z", y: 12.6},
  {x: "2018-11-15T19:00:00Z", y: 12.6},
  {x: "2018-11-15T20:00:00Z", y: 12.6},
  {x: "2018-11-15T21:00:00Z", y: 12.5},
  {x: "2018-11-15T22:00:00Z", y: 12.5},
  {x: "2018-11-15T23:00:00Z", y: 12.5},
  {x: "2018-11-16T00:00:00Z", y: 12.5},
  {x: "2018-11-16T01:00:00Z", y: 12.5},
  {x: "2018-11-16T02:00:00Z", y: 12.5},
  {x: "2018-11-16T03:00:00Z", y: 12.5},
  {x: "2018-11-16T04:00:00Z", y: 12.5},
  {x: "2018-11-16T05:00:00Z", y: 12.5},
  {x: "2018-11-16T06:00:00Z", y: 12.5},
  {x: "2018-11-16T07:00:00Z", y: 12.5},
  {x: "2018-11-16T08:00:00Z", y: 12.5},
  {x: "2018-11-16T09:00:00Z", y: 12.5},
  {x: "2018-11-16T10:00:00Z", y: 12.5},
  {x: "2018-11-16T11:00:00Z", y: 12.5},
  {x: "2018-11-16T12:00:00Z", y: 12.5},
  {x: "2018-11-16T13:00:00Z", y: 12.5},
  {x: "2018-11-16T14:00:00Z", y: 12.5},
  {x: "2018-11-16T15:00:00Z", y: 12.5},
  {x: "2018-11-16T16:00:00Z", y: 12.5},
  {x: "2018-11-16T17:00:00Z", y: 12.5},
  {x: "2018-11-16T18:00:00Z", y: 12.9},
  {x: "2018-11-16T19:00:00Z", y: 12.7},
  {x: "2018-11-16T20:00:00Z", y: 14.2},
  {x: "2018-11-16T21:00:00Z", y: 12.8},
  {x: "2018-11-16T22:00:00Z", y: 12.8},
  {x: "2018-11-16T23:00:00Z", y: 12.8},
  {x: "2018-11-17T00:00:00Z", y: 12.7},
  {x: "2018-11-17T01:00:00Z", y: 12.7},
  {x: "2018-11-17T02:00:00Z", y: 12.7},
  {x: "2018-11-17T03:00:00Z", y: 12.7},
  {x: "2018-11-17T04:00:00Z", y: 12.7},
  {x: "2018-11-17T05:00:00Z", y: 12.7},
  {x: "2018-11-17T06:00:00Z", y: 12.7},
  {x: "2018-11-17T07:00:00Z", y: 12.6},
  {x: "2018-11-17T08:00:00Z", y: 12.6},
  {x: "2018-11-17T09:00:00Z", y: 12.6},
  {x: "2018-11-17T10:00:00Z", y: 12.6},
  {x: "2018-11-17T11:00:00Z", y: 12.6},
  {x: "2018-11-17T12:00:00Z", y: 12.6},
  {x: "2018-11-17T13:00:00Z", y: 12.6},
  {x: "2018-11-17T14:00:00Z", y: 12.6},
  {x: "2018-11-17T15:00:00Z", y: 12.6},
  {x: "2018-11-17T16:00:00Z", y: 12.6},
  {x: "2018-11-17T17:00:00Z", y: 12.6},
  {x: "2018-11-17T18:00:00Z", y: 12.6},
  {x: "2018-11-17T19:00:00Z", y: 12.6},
  {x: "2018-11-17T20:00:00Z", y: 12.6},
  {x: "2018-11-17T21:00:00Z", y: 12.6},
  {x: "2018-11-17T22:00:00Z", y: 12.6},
  {x: "2018-11-17T23:00:00Z", y: 12.6},
  {x: "2018-11-18T00:00:00Z", y: 12.6},
  {x: "2018-11-18T01:00:00Z", y: 12.6},
  {x: "2018-11-18T02:00:00Z", y: 12.6},
  {x: "2018-11-18T03:00:00Z", y: 12.6},
  {x: "2018-11-18T04:00:00Z", y: 12.6},
  {x: "2018-11-18T05:00:00Z", y: 12.6},
  {x: "2018-11-18T06:00:00Z", y: 12.5},
  {x: "2018-11-18T07:00:00Z", y: 12.5},
  {x: "2018-11-18T08:00:00Z", y: 12.5},
  {x: "2018-11-18T09:00:00Z", y: 12.5},
  {x: "2018-11-18T10:00:00Z", y: 12.5},
  {x: "2018-11-18T11:00:00Z", y: 12.5},
  {x: "2018-11-18T12:00:00Z", y: 12.5},
  {x: "2018-11-18T13:00:00Z", y: 12.5},
  {x: "2018-11-18T14:00:00Z", y: 12.5},
  {x: "2018-11-18T15:00:00Z", y: 12.5},
  {x: "2018-11-18T16:00:00Z", y: 12.5},
  {x: "2018-11-18T17:00:00Z", y: 12.5},
  {x: "2018-11-18T18:00:00Z", y: 12.5},
  {x: "2018-11-18T19:00:00Z", y: 12.5},
  {x: "2018-11-18T20:00:00Z", y: 12.5},
  {x: "2018-11-18T21:00:00Z", y: 12.5},
  {x: "2018-11-18T22:00:00Z", y: 12.5},
  {x: "2018-11-18T23:00:00Z", y: 12.5},
  {x: "2018-11-19T00:00:00Z", y: 12.5},
  {x: "2018-11-19T01:00:00Z", y: 12.5},
  {x: "2018-11-19T02:00:00Z", y: 12.5},
  {x: "2018-11-19T03:00:00Z", y: 12.5},
  {x: "2018-11-19T04:00:00Z", y: 12.5},
  {x: "2018-11-19T05:00:00Z", y: 12.5},
  {x: "2018-11-19T06:00:00Z", y: 12.5},
  {x: "2018-11-19T07:00:00Z", y: 12.5},
  {x: "2018-11-19T08:00:00Z", y: 12.5},
  {x: "2018-11-19T09:00:00Z", y: 12.5},
  {x: "2018-11-19T10:00:00Z", y: 12.5},
  {x: "2018-11-19T11:00:00Z", y: 12.5},
  {x: "2018-11-19T12:00:00Z", y: 12.4}
];


const parsedData = initData.map((item) => {
  return {
    x: moment(item.x).tz('US/Eastern').toDate(),
    y: item.y
  };
});


//Отступы
var margin = {
  top: 50,
  right: 80,
  bottom: 30,
  left: 50
};

//Ширина и высота
var width = 600 - margin.left - margin.right; 
var height = 200 - margin.top - margin.bottom;

// Масштабирование SVG
var xCoordinate = d3.scaleTime().rangeRound([0, width]);
var yCoordinate = d3.scaleLinear().rangeRound([height, 0]);

xCoordinate.domain(d3.extent(parsedData, function(d) { return d.x; }));
yCoordinate.domain([0, d3.max(parsedData, function(d) { return d.y; }) * 1.1] );

//Создаем ось X с кол-вом делений
var xAxis = d3
  .axisBottom(xCoordinate)

  .ticks(d3.timeHour.filter(function(d) {
      return moment(d).tz('US/Eastern').hours() === 0;
    })
  )  

  .tickFormat(function(d) {
    return moment(d).tz('US/Eastern').format('MM/DD');
  })
;

//Создаем ось Y с кол-вом делений
var yAxis = d3
  .axisLeft(yCoordinate)
  .ticks(5)
;

//Функция, создающая по массиву точек линию
var line = d3.line()

  .defined(function (d){
    return d.y !== null;
  })

  .curve(d3.curveMonotoneX)

  .x(function(d){
    return xCoordinate(d.x);
  })

  .y(function(d){
    return yCoordinate(d.y);
	})
;

// Функция, создающая по массиву точек область
var area = d3.area()

  .defined(function (d){
    return d.y !== null;
  })

  .curve(d3.curveMonotoneX)

  .x(function(d) {
    return xCoordinate(d.x);
  })

  .y0(height)
        
  .y1(function(d) {
    return yCoordinate(d.y);
  })
;


// Добавляем SVG на страницу
var svg = d3.select(".app")
						.append("svg")
						.attr("class", "axis")
						.attr("viewBox", "0 0 550 160")
;

//Добавляем g контейнер на страницу
//Смещение контейнера
var container = svg.append("g")
                   .attr("class", "container")
                   .attr("transform", "translate(30, 20)") 
;

//Добавляем график в контейнер на страницу
var shedule = container.append("g")
                       .attr("class", "shedule")
;

// Функция, создающая по массиву точек линию
shedule.append("path")
       .attr("d", line(parsedData))
       .attr("class", "border-line")
;

//Функция, создающая закрашеную область	
shedule.append("path")
       .attr( "d", area(parsedData) )
       .attr("class", "area")
;

//Отрисовка оси Х             
container.append("g")       
	       .attr("class", "x-axis")
	       .attr("transform", "translate(0," + height + ")")
         .call(xAxis)
;

//Отрисовка оси Y
container.append("g")       
         .attr("class", "y-axis")
	       .call(yAxis)
;

//Рисуем горизонтальные линии 
d3.selectAll(".y-axis .tick").append("line")
                               .attr("x1", 0)
                               .attr("y1", 0)
                               .attr("x2", width)
                               .attr("y2", 0)
;

// Интерактивная обертка 
var interactiveWrap = container.append("g")
                               .attr("class", "interactive-wrap")
;

// Блок линии 
var lineWrap = interactiveWrap.append("g")
															.attr("class", "line-wrap")
;

// Ось перемещения
var axisTravel = lineWrap.append("g")
												 .attr("class", "axis-travel")
;

//Вертикальная линии, которая будет следоваться за мышью
var verticalLine = lineWrap.append("line")
													 .attr("class", "vertical-line")
													 .attr("x1", 0)
													 .attr("x2", 0)
													 .attr("y1", 0)
													 .attr("y2", height)									
;

//Круг, который будет ездить по графику
var circle = axisTravel.append("circle")
										   .attr("class", "circle")
										   .attr("r", 7)
;


//Прямоугольник по оси Y, который будет следоваться за мышью
var yTextBox = axisTravel.append("rect")
                         .attr("class", "y-text-box")
												 .attr("x", 9)
												 .attr("y", -20)
;

//Прямоугольник по оси X, который будет следоваться за мышью
var xTextBox = axisTravel.append("rect")
                         .attr("class", "x-text-box")                        
                         .attr("x", 10)
                         .attr("y", 0)
;

//Текст по оси Y, который будет следоваться за мышью
var yText = axisTravel.append("text")
                      .attr("class", "y-text")
                      .attr("x", 12)
                      .attr("y", -8)                 
;

//Текст по оси X, который будет следоваться за мышью
var xText = axisTravel.append("text")
                      .attr("class", "x-text")
                      .attr("x", 13)
                      .attr("y", 12)
;

// Добавляется прямоугольник, на котором будут обрабатываться события 
var interactiveLayer = interactiveWrap.append("rect")
                                      .attr("class", "interactive-layer")
                                      .attr('width', width)
                                      .attr('height', height)
                                      .attr('fill', 'none')
                                      .attr('pointer-events', 'all')
;

// Нода прямоугольника, на котором будут обрабатываться события
var interactiveLayerNode = interactiveLayer.node();

// Получаем SVG ноду блока с текстом, кругом и линией 
var lineWrapNode = lineWrap.node();

// Событие, скрывает блок с текстом, кругом и линией 
interactiveLayer.on('mouseout', function() {
	lineWrapNode.classList.remove("active");
});

// Событие, показывает блок с текстом, кругом и линией 
interactiveLayer.on('mouseover', function() {
	lineWrapNode.classList.add("active");
})

// Получаем ноду path линии, помкоторой будут двигаться элементы 
var borderLine = document.querySelector('.border-line');

// Получаем SVG ноду Y
var yTextNode = yText.node();

// Получаем SVG ноду Х
var xTextNode = xText.node();

//Событие, на движение мышки mousemove, для десктоп
interactiveLayer.on('mousemove', function() { 
  doInteractivity(this);
});

//Событие, на тачскрин touchmove, для мобильных
interactiveLayer.on('touchmove', function() {
  doInteractivity(this);
}); 

//Функция интерактивности 
function doInteractivity(interactiveNode) {

  var mouse = d3.mouse(interactiveNode);

  lineWrap.attr("transform", `translate(${mouse[0]}, 0)`);

	axisTravel.attr("transform", function() {
    var beginning = 0;
    var end = borderLine.getTotalLength();

		while (true) {
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
				break; //позиция найдена
      }
    }

    //Добавляем текст из оси X
    // xText.text(moment.utc(xCoordinate.invert(pos.x)).format('MM/DD/YYYY HH:mm'));
    // xText.text(moment(xCoordinate.invert(pos.x)).format('MM/DD/YYYY HH:mm'));
    xText.text(moment(xCoordinate.invert(pos.x)).tz('US/Eastern').format('MM/DD/YYYY HH:mm'));

    //Добавляем текст из оси Y
    yText.text(yCoordinate.invert(pos.y).toFixed(1) + ' %'); 

    //Измеряем длину и высоту текста из оси X
    var xTextBbox = xTextNode.getBBox();
    var xTextBboxWidth = xTextBbox.width;
    var xTextBboxHeight = xTextBbox.height;
    var xPadding = 5;

    //Подгоняем размер прямоугольника xTextBox под текст
    xTextBox.attr("width", xTextBboxWidth + xPadding)
            .attr("height", xTextBboxHeight + xPadding)
    ; 

    //Измеряем длину и высоту текста из оси Y
    var yTextBbox = yTextNode.getBBox();
    var yTextBboxWidth = yTextBbox.width;
    var yTextBboxHeight = yTextBbox.height;
    var yPadding = 5;

    //Подгоняем размер прямоугольника yTextBox под текст
    yTextBox.attr("width", yTextBboxWidth + yPadding)
            .attr("height", yTextBboxHeight + yPadding)
    ;

    //Разворачиваем прямоугольники и текст в обратную сторону ближе к концу графика 
    var reverse = width - margin.left - mouse[0] < xTextBboxWidth + xPadding;
    if (reverse) {
      xTextBox.attr('transform', `translate(-${xTextBboxWidth + xPadding + 20}, 0)`,);
      xText.attr('transform', `translate(-${xTextBboxWidth + xPadding + 20}, 0)`,);
      yTextBox.attr('transform', `translate(-${yTextBboxWidth + yPadding + 20}, 0)`,);
      yText.attr('transform', `translate(-${yTextBboxWidth + yPadding + 20}, 0)`,);    
    }
    else {
      xTextBox.attr('transform', 'translate(0, 0)');
      xText.attr('transform', 'translate(0, 0)');
      yTextBox.attr('transform', 'translate(0, 0)');
      yText.attr('transform', 'translate(0, 0)');
    }

    //При обрыве графика circle падает вниз графика, а текст не показывается 
    var mathPosX = Math.ceil(pos.x);
    var mathMouse0 = Math.floor(mouse[0]);

    if( mathPosX < mathMouse0 ) {
      pos.y = height;

      xTextBox.classed('hide', true);
      xText.classed('hide', true);
      yTextBox.classed('hide', true);
      yText.classed('hide', true);  
    }
    else {
      xTextBox.classed('hide', false);
      xText.classed('hide', false);
      yTextBox.classed('hide', false);
      yText.classed('hide', false);  
    }
 
    return `translate(0, ${pos.y})`;
  });
}