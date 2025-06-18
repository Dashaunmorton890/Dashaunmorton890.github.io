var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY - 125, damage: 10},
          { type: "sawblade", x: 400, y: groundY - 125, damage: 10},
          { type: "sawblade", x: 400, y: groundY - 125, damage: 10},
          { type: "sawblade", x: 600, y: groundY - 125, damage: 10},
           { type: "sawblade", x: 1500, y: groundY - 100, damage: 15},
            { type: "sawblade", x: 1300, y: groundY - 100, damage: 15},
             { type: "sawblade", x: 1400, y: groundY - 100, damage: 15},
               { type: "sawblade", x: 800, y: groundY , damage: 15},
               { type: "sawblade", x: 700, y: groundY , damage: 15},
          { type: "sawblade", x: 900, y: groundY - 125, damage: 15},
          { type: "enemy", x: 400, y: groundY - 50, speed: -3, image: "img/enemypanzer.png", offsetX: -35, offsetY: -25, scale: 0.1},
            { type: "enemy",  x: 1600, y: groundY - 50, speed: -2, image: "img/enemyzombie.png", offsetX: -35, offsetY: -25, scale: 0.3},
          { type: "enemy",  x: 900, y: groundY - 50, speed: -2, image: "img/enemyzombie.png", offsetX: -35, offsetY: -25, scale: 0.3},
          { type: "enemy",  x: 1200, y: groundY - 50, speed: -2, image: "img/enemypanzer.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "reward",  x: 500, y: groundY - 75, speed: -3},
          { type: "marker",  x: 1500, y: groundY - 75, speed: -3},
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY },
          { type: "sawblade", x: 600, y: groundY },
          { type: "sawblade", x: 900, y: groundY },
          { type: "sawblade", x: 1400, y: groundY - 100, damage: 15},
          { type: "sawblade", x: 800, y: groundY , damage: 15},
          { type: "sawblade", x: 700, y: groundY , damage: 15},
          { type: "sawblade", x: 900, y: groundY - 125, damage: 15},
         


        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
