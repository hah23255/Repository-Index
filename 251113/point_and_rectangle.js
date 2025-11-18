//• We are given a rectangle {top, left} – {bottom, right} on the
// coordinate plane (top < bottom, left < right)
// • We are given a point {x, y}
//Identify where the point lays:
// +Inside the rectangle
// +Outside of the rectangle
// +On the rectangle border


function pointOnRect(top, left, bottom, right, x, y) {
    if ( (x > left) && (x < right) && (y > top) && (y < bottom) )
    {return 'inside';}
    if ( (x < left) || (x > right) || (y < top) || (y > bottom) )
    {return 'outside';}
    return 'border';
}



// Example usage:
console.log(pointOnRect(50, 100, 150, 300, 50, 120)); //outside
console.log(pointOnRect(50, 100, 150, 300, 260, 80)); //inside
console.log(pointOnRect(50, 100, 150, 300, 150, 50)); //border

