function pageCount(n, p) {
    // Calculate the minimum number of pages to turn from the beginning and from the end
    const fromStart = Math.floor(p / 2);
    const fromEnd = Math.floor((n / 2) - (p / 2));

    // Return the minimum of the two values
    return Math.min(fromStart, fromEnd);
}