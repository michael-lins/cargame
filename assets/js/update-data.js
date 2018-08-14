var x = 0, y = 0;
var updateGame = function(delta) {
    if (lastKey == left) {
        x -= calcSpeed(delta, 150);
    } else if (lastKey == right) {
        x += calcSpeed(delta, 150);
    } else if (lastKey == up) {
        y -= calcSpeed(delta, 150);
    } else if (lastKey == down) {
        y += calcSpeed(delta, 150);
    } else if (lastKey == SPACE) {
        y -= calcSpeed(delta, 800);
        x += calcSpeed(delta+10, 200);
        y += calcSpeed(delta-10, 800);
    }
    lastKey = null;
};
