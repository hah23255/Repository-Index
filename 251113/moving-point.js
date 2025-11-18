//Write a JS function, to take as input a JSON point {x, y}
// and several JSON moves {dx, dy} and applies the moves
// movePoints(
// '{"x":50, "y":100}',
// '{"dx":20, "dy":30}',
// '{"dx":-10, "dy":20.5}'
// )
// output: Initial point: (50, 100)
// Moved point: (70, 130)
// Moved point: (60, 150.5)
function movePoints(pointJson, ...movesJson) {
    const point = JSON.parse(pointJson);
    console.log(`Initial point: (${point.x}, ${point.y})`);

    for (const moveJson of movesJson) {
        const move = JSON.parse(moveJson);
        point.x += move.dx;
        point.y += move.dy;
        console.log(`Moved point: (${point.x}, ${point.y})`);
    }
}

// Example usage:
movePoints(
    '{"x":50, "y":100}',
    '{"dx":20, "dy":30}',
    '{"dx":-10, "dy":20.5}'
);

