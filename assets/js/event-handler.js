// Control Mapping
var left = 37
var up = 38
var right = 39
var down = 40
var SPACE = 32

var lastKey;
document.onkeydown = function(e) {
    lastKey = (e.keyCode || e.which);
}