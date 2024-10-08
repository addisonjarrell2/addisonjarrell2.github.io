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
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the drawGrid() function call below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can help you determine specific x any y values throughout the game
     * Comment the function call out to remove the grid
     */

    // drawGrid();

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)

   // restarted the next platforms
   createPlatform(200, 700, 100, 20); // first platform
   createPlatform(400, 600, 100, 20); // second platform
   createPlatform(600, 500, 100, 20); // third platform
   createPlatform(800, 400, 100, 20); // fourth platform
   createPlatform(1000, 300, 100, 20); // fifth platform
   createPlatform(1200, 200, 100, 20); // sixth platform
   
    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)

    createCollectable("diamond", 400, 300); // second collectable
    createCollectable("diamond", 200, 300); // first collectable
    createCollectable("diamond", 600, 200); //third collectable
    createCollectable("diamond", 800, 100); // fourth collectable
    createCollectable("diamond", 1000, 100); // fifth collectable
    createCollectable("diamond", 1200, 100); // sixth collectable


//restarted 
    
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)

    createCannon("left", 200, 3000); // first cannon
    createCannon("left", 50, 3000); // second cannon
    createCannon("right", 100, 3000); // third cannon
    createCannon("right", 400, 3000); // fourth cannon
    createCannon("right", 600, 3000); // fifth cannon


//restarted
    
    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
