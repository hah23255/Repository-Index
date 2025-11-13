// write a function to take several rectangles and calculate the total area they cover,
// accounting for any overlaps only once.

function calculateTotalArea(rectangles) {
    const events = rectangles.flatMap(([x1, y1, x2, y2]) => [
        { x: x1, y1, y2, type: 'start' },
        { x: x2, y1, y2, type: 'end' }
    ]);

    events.sort((a, b) => a.x - b.x || (a.type === 'start' ? -1 : 1));

    let activeIntervals = [];
    let totalArea = 0;
    let lastX = events[0].x;

    for (const event of events) {
        const width = event.x - lastX;
        if (width > 0) {
            totalArea += width * calculateActiveHeight(activeIntervals);
        }
        lastX = event.x;
        if (event.type === 'start') {
            activeIntervals.push([event.y1, event.y2]);
        } else {
            activeIntervals = activeIntervals.filter(interval => 
                !(interval[0] === event.y1 && interval[1] === event.y2)
            );
        }
    }

    return totalArea;
}

function calculateActiveHeight(intervals) {
    if (!intervals.length) return 0;

    intervals.sort((a, b) => a[0] - b[0]);
    
    const merged = [];
    let [currentStart, currentEnd] = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i];
        if (start <= currentEnd) {
            currentEnd = Math.max(currentEnd, end);
        } else {
            merged.push([currentStart, currentEnd]);
            [currentStart, currentEnd] = [start, end];
        }
    }
    merged.push([currentStart, currentEnd]);

    return merged.reduce((sum, [start, end]) => sum + (end - start), 0);
}

// Example usage:
let rectangles = [
    [1, 1, 4, 4],
    [2, 2, 5, 5],
    [6, 1, 8, 3]
];                  
console.log("Total Area Covered:", calculateTotalArea(rectangles)); // Output: Total Area Covered: 19           
