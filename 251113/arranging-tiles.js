// We want to fill a floor with tiles
// • Example: floor 310 x 180, tile 70 x 30
// • Horizontal layout: 30 tiles (6 rows x 5 cols)
// • Vertical layout: 33 tiles (6 rows x 11 cols)

// arrangeTiles(310, 180, 70, 30)
// Replay:
// Optimal arrangement is horizontal: 30 tiles
// Horizontal: 30 tiles (6 rows x 5 cols)
// Vertical: 33 tiles (3 rows x 11 cols)

// arrangeTiles(310, 185, 70, 30)
// Reply:
// Optimal arrangement is vertical: 33 tiles
// Horizontal: 35 tiles (7 rows x 5 cols)
// Vertical: 33 tiles (3 rows x 11 cols)

//• Write a function arrangeTiles(...) to print the optimal tile
// arrangement info for given floor size and tile size

function arrangeTiles(floorWidth, floorHeight, tileWidth, tileHeight) {
  const horizontalCols = Math.ceil(floorWidth / tileWidth);
  const horizontalRows = Math.ceil(floorHeight / tileHeight);
  const horizontalTiles = horizontalCols * horizontalRows;

  const verticalCols = Math.ceil(floorWidth / tileHeight);
  const verticalRows = Math.ceil(floorHeight / tileWidth);
  const verticalTiles = verticalCols * verticalRows;

  const optimal = horizontalTiles <= verticalTiles ? "horizontal" : "vertical";
  const optimalCount = Math.min(horizontalTiles, verticalTiles);

  console.log(`Optimal arrangement is ${optimal}: ${optimalCount} tiles`);
  console.log(
    `Horizontal: ${horizontalTiles} tiles (${horizontalRows} rows x ${horizontalCols} cols)`,
  );
  console.log(
    `Vertical: ${verticalTiles} tiles (${verticalRows} rows x ${verticalCols} cols)`,
  );

  return optimalCount;
}

// Example usage:
console.log(arrangeTiles(310, 180, 70, 30)); //30
console.log(arrangeTiles(310, 185, 70, 30)); //33
console.log(arrangeTiles(500, 300, 60, 50)); //50
