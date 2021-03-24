game = [];
game.game = document.getElementById('game-field');
game.ctx = game.game.getContext('2d');

game.size = function() {
    const ctx = game.ctx;
    ctx.canvas.width = window.innerWidth / 2.5;
    ctx.canvas.height = window.innerHeight / 2.7;
}

game.frame = async function() {
    const ctx = game.ctx;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    game.ctx.beginPath();
    game.ctx.arc(50, 50, 40, 0, 2 * Math.PI);
    game.ctx.stroke();

    console.log('frame')
    //requestAnimationFrame(game.frame)
}

game.init = function() {
    game.size()
    game.frame()
}

game.init()