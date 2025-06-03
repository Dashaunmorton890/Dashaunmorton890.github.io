$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(300, 700, 200, 20);
    createPlatform(500, 600, 200, 20);
    createPlatform(600, 400, 300, 20);
    createPlatform(500, 500, 300, 20);
    createPlatform(900, 300, 300, 20); 
    createPlatform(500, 300, 300, 20);              
    createPlatform(400, 200, 300, 20);
    createPlatform (900, 600, 300, 20); 
    createPlatform
    createPlatform            



    // TODO 3 - Create Collectables
    createCollectable("diamond", 360, 650, 0.5, 1);
    createCollectable ("blueStud", 950, 150, 0.5, 1);
    createCollectable ("goldStud", 750, 350, 0.5, 1);
    createCollectable("purpleStud", 450, 150, 0.5, 1);

    
    // TODO 4 - Create Cannons
    createCannon("left", 600, 2000)
    createCannon("left", 400, 2000)
    createCannon ("top", 800, 2000)
    createCannon("right", 600, 2000)
    createCannon("top", 1300, 2000)
    createCannon("right", 200,  2000)


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
