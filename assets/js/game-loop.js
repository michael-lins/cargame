var calcSpeed = function(delta, pixelsPerSec) {
    return ((pixelsPerSec * delta) / 1000);
};

var lastUpdate;
var gaming = function() {
    var t = new Date().getTime();
    var delta = t - lastUpdate;

  updateGame(delta);
    render();

    lastUpdate = new Date().getTime();
    window.requestAnimationFrame( gaming );
};
lastUpdate = new Date().getTime();