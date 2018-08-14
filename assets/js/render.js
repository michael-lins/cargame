var renderCar = function() {
    var rendered = document.createElement('canvas');
    rendered.width = 100;
    rendered.height = 70;
    
    var renderedCtx = rendered.getContext('2d');
    renderedCtx.fillStyle = '#E5E5E5';
    renderedCtx.fillRect(5, 30, 90, 30); // Lateral
    renderedCtx.fillRect(30, 5, 40, 30); // Lateral
    
    renderedCtx.fillStyle = '#000';
    
    // Roda 1
    renderedCtx.beginPath();
    renderedCtx.arc(30, 60, 10, 0, Math.PI*2, true); 
    renderedCtx.closePath();
    renderedCtx.fill();
    
    // Roda 2
    renderedCtx.beginPath();
    renderedCtx.arc(75, 60, 10, 0, Math.PI*2, true); 
    renderedCtx.closePath();
    renderedCtx.fill();
    return rendered;
}

var car = renderCar(); // Pré renderiza a imagem de nosso carro

var ctx = document.getElementById("game").getContext("2d");

var render = function() {
    // Limpamos o que havia sido desenhado na última iteração
    ctx.clearRect(0, 0, 300, 300);
    // Desenhando a imagem do carro
    ctx.drawImage(car, x, y);
};