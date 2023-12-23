function alternatingCharacters(s) {
    let deletions = 0;

    for (let i = 1; i < s.length; i++) {
        // Check if the current character is the same as the previous one
        if (s[i] === s[i - 1]) {
            deletions++;
        }
    }

    return deletions;
}