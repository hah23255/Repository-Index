function printLargerRectangle(...rectanglesAsJSON) {
  let largestArea = 0, largestRect = null;

    for (let rectJson of rectanglesAsJSON) {
        try {
            const rect = JSON.parse(rectJson);
            const area = rect.width * rect.height;

            if (area > largestArea) {
                [largestArea, largestRect] = [area, rect];
            }
        } catch (e) {
            console.error(`Invalid JSON: ${rectJson}`);
        }
    }
    
    if (largestRect)
        console.log(`Largest rectangle: ${largestRect.width} x ${largestRect.height} -> area: ${largestArea}`);


    if (!rectanglesAsJSON.length) {
        console.log("No rectangles provided");
        return;
    }
    
  
}
// Example usage:
printLargerRectangle(
    '{"width": 4, "height": 5}',
    '{"width": 3, "height": 7}',
    '{"width": 6, "height": 2}'
); // Output: Largest rectangle: 4 x 5 -> area: 20  
printLargerRectangle(   
    '{"width": 1, "height": 2}',
    '{"width": 2, "height": 2}',
    '{"width": 1, "height": 3}'
); // Output: Largest rectangle: 2 x 2 -> area: 4