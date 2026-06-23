// Inizializzazione del piano cartesiano
JXG.Options.renderer = 'canvas';
var board = JXG.JSXGraph.initBoard('jsxgraph-parabola', {
    boundingbox: [-10, 10, 10, -10], 
    axis: true
});

// Creazione degli Slider
// p1: [x, y], p2: [lunghezza], p3: [min, attuale, max]
var a = board.create('slider', [[2, -5], [7, -5], [-5, 1, 5]], {name: 'a'});
var b = board.create('slider', [[2, -6], [7, -6], [-5, 0, 5]], {name: 'b'});
var c = board.create('slider', [[2, -7], [7, -7], [-5, 0, 5]], {name: 'c'});
 
// Definizione della parabola: y = ax + bx + c
var f = board.create('functiongraph', [
    (x) => a.Value() * x * x + b.Value() * x + c.Value()
], {strokeColor: '#0f6597', strokeWidth: 3});