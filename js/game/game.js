window.onload = function () {
  var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
    preload: preload,
    create: create 
  });

  function preload() {
    game.load.image('sky1', 'assets/sky1.png');
  }

  function create() {
    var sky1 = game.add.sprite(game.world.centerX, game.world.centerY, 'sky1');
    sky1.anchor.setTo(0.5, 0.5);
  }
};