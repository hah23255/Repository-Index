// write a function to take several rectangles , given as JSON and print the largest of them
function findLargestRectangle(...rectangles) {
  let largestArea = 0;
  let largestRectangle = null;

  for (const rectInput of rectangles) {
    const rect =
      typeof rectInput === "string" ? JSON.parse(rectInput) : rectInput;
    const area = rect.width * rect.height;
    if (area > largestArea) {
      largestArea = area;
      largestRectangle = rect;
    }
  }

  if (largestRectangle) {
    const area = largestRectangle.width * largestRectangle.height;
    console.log(
      `Largest rectangle: ${largestRectangle.width} x ${largestRectangle.height} -> area: ${area}`,
    );
  }
}

// Example usage:
findLargestRectangle(
  '{"width":30, "height":20}',
  '{"width":5, "height":120}',
  '{"width":15, "height":40}',
  '{"width":25, "height":25}',
  '{"width":35, "height":15}',
);
