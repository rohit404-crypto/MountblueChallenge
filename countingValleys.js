function countingValleys(steps, path) {
    let level = 0;
    let valleyCount = 0;

    for (let i = 0; i < path.length; i++) {
        if (path[i] === 'U') {
            level++;
        } else {
            level--;
        }

        // Check if the hiker just completed a step and reached sea level
        if (level === 0 && path[i] === 'U') {
            valleyCount++;
        }
    }

    return valleyCount;
}