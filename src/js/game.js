game = [];
game.game = document.getElementById('game-field');
game.ctx = game.game.getContext('2d');

game.frame = function() {
    const ctx = game.ctx;
    ctx.clearRect(0, 0, game.game.width, game.game.height)

    game.ctx.beginPath();
    game.ctx.arc(Math.random() * 100, 50, 40, 0, 2 * Math.PI);
    game.ctx.stroke();

    console.log('frame')
    window.requestAnimationFrame(game.frame)
}

game.frame()