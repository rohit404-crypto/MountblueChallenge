function birthday(s, d, m) {
    let count = 0;

    // Loop through the chocolate bar
    for (let i = 0; i <= s.length - m; i++) {
        let sum = 0;

        // Calculate the sum of the segment
        for (let j = i; j < i + m; j++) {
            sum += s[j];
        }

        // Check if the sum matches Ron's birth day
        if (sum === d) {
            count++;
        }
    }

    return count;
}