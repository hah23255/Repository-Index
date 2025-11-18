// write a function to check if given speed is fast
// output:
// • Speed ≥ 100 km/h is considered fast
// • 40 ≤ speed < 100 km/h → considered average
// • 0 < speed < 40 km/h → considered slow
// • Speed ≤ 0 km/h is considered invalid
function evaluateSpeed(speed) {
    if (speed <= 0) {
        return 'invalid';
    } else if (speed >= 100) {
        return 'fast';
    } else if (speed >= 40) {
        return 'average';
    } else {
        return 'slow';
    }
}

// Example usage:
console.log(evaluateSpeed(120)); // fast
console.log(evaluateSpeed(99)); // average
console.log(evaluateSpeed(5)); // slow
console.log(evaluateSpeed(-1)); // invalid
