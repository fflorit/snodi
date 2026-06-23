// Inizializzazione del piano cartesiano
JXG.Options.renderer = 'canvas';
var board = JXG.JSXGraph.initBoard('jsxgraph-retta', {
    boundingbox: [-10, 10, 10, -10], 
    axis: true
});

// Creazione degli Slider
// p1: [x, y], p2: [lunghezza], p3: [min, attuale, max]
var m = board.create('slider', [[1, 9], [5, 9], [-5, 1, 5]], {name: 'm'});
var q = board.create('slider', [[1, 8], [5, 8], [-5, 1, 5]], {name: 'q'});

// Definizione della retta: y - mx - q = 0
var line = board.create('line', [
    function() { return -q.Value(); }, // Termine noto
    function() { return -m.Value(); }, // Coefficiente x
    1                                  // Coefficiente y
], {strokeColor: '#0f6597', strokeWidth: 3});