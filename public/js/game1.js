$(document).ready(function () {
  var game = new Phaser.Game('100', '100', Phaser.AUTO, 'phaser-box', {
    preload: preload,
    create: create,
    update: update
  });

  var timer = 0;
  var total = 0;
  var badbrows = [];

  function preload() {

    //  37x45 is the size of each frame
    //  There are 18 frames in the PNG - you can leave this value blank if the frames fill up the entire PNG, but in this case there are some
    //  blank frames at the end, so we tell the loader how many to load
    game.load.image('badbrow', 'assets/img/badbrow.png');
    game.load.image('goodbrow', 'assets/img/goodbrow.png');

  }

  function create() {

    releaseBrows();

  }

  function releaseBrows() {
//game.width + 
    var badbrow = game.add.sprite(game.width + (Math.random() * game.width), game.world.randomY, 'badbrow');
    // badbrows.push(badbrow);
    badbrow.scale.setTo(0.5, 0.5);
    badbrow.angle = game.rnd.angle();
    game.add.tween(badbrow).to({x: game.width - (badbrow.x - 10)}, 20000, Phaser.Easing.Linear.None, true);

    var goodbrow = game.add.sprite(game.width + (Math.random() * game.width), game.world.randomY, 'goodbrow');
    goodbrow.scale.setTo(0.5, 0.5);
    goodbrow.angle = game.rnd.angle();
    game.add.tween(goodbrow).to({x: game.width - (goodbrow.x - 10)}, 20000, Phaser.Easing.Linear.None, true);

    total++;
    timer = game.time.now + 300;

    // Clean up brows

  }

  function update() {

    if (game.time.now > timer) {
      releaseBrows();
    }

  }
});
