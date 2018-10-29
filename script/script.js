'use strict'

var initData =
[
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
    level: null//81
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
    level: null //61.0
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




//Парсинг даты
var strictIsoParse = d3.utcParse("%Y-%m-%dT%H:%M:%LZ");

//Возращаем новый массив с коректной датой
var parsedData = initData.map((item) => {
	return {
    date: strictIsoParse(item.date),
    level: item.level
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

xCoordinate.domain(d3.extent(parsedData, function(d) { return d.date; }));
yCoordinate.domain(d3.extent(parsedData, function(d) { return Number(d.level); }));


//Количество точек для осей X, согласно кол-ву дням из входных данных
var arrTickDate = initData.map((item) => new Date(item.date).getDate() );

var arrDayNoRepeat = arrTickDate.reduce((prev, curr) => {
  if( prev.indexOf(curr) < 0 ) {
    prev.push(curr);
  }
  return prev;
}, []);

//Создаем ось X с кол-вом делений
var xAxis = d3.axisBottom(xCoordinate).ticks(arrDayNoRepeat.length).tickFormat(d3.timeFormat('%d.%m'));

//Создаем ось Y с кол-вом делений
var yAxis = d3.axisLeft(yCoordinate).ticks(arrDayNoRepeat.length);

//Функция, создающая по массиву точек линию
var line = d3.line()

  .defined(function (d){
    return d.level;
  })

  .curve(d3.curveMonotoneX)

  .x(function(d){
    return xCoordinate(d.date);
  })

  .y(function(d){
    return yCoordinate(d.level);
	})
;

// Функция, создающая по массиву точек область
var area = d3.area()

  .defined(function (d){
    return d.level;
  })

  .curve(d3.curveMonotoneX)

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
						.attr("viewBox", "0 0 550 160")
;

//Добавляем g контейнер на страницу
//Смещение контейнера
var xContainer = 30; 
var yContainer = 20;

var container = svg.append("g")
                   .attr("class", "container")
                   .attr("transform", "translate(" + xContainer + "," + yContainer + ")")
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
    xText.text(moment(xCoordinate.invert(pos.x)).format('HH:mm'));

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