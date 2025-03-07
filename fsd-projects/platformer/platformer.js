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
    createPlatform(200, 500, 250, 10);
    createPlatform(500, 625, 300, 125);
    createPlatform(1150, 400, 250, 375);
    createPlatform(650, 375, 200, 10);
    createPlatform(660, 250, 180, 10);
    createPlatform(300, 300, 10, 200);
    createPlatform(975, 300, 50, 10);
    createPlatform(0, 300, 500, 10);
    createPlatform(0, 625, 100, 125);
    createPlatform(300, 275, 200, 25);
    // TODO 3 - Create Collectables
    createCollectable("database", 1275, 300);
    createCollectable("database", 730, 175);
    createCollectable("database", 975, 650);
    createCollectable("database", 350, 400);
    createCollectable("database", 230, 400);
    // TODO 4 - Create Cannons
    createCannon("top", 1000, 1000);
    createCannon("left", 500, 1500);
    createCannon("bottom", 1000, 1000);
    createCannon("right", 260, 1500);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
