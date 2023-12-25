function lonelyinteger(a) {
    for (let i = 0; i < a.length; i++) {
        let j;
        for (j = 0; j < a.length; j++) {
            if (i !== j && a[i] === a[j]) {
                break;
            }
        }
        if (j === a.length) {
            return a[i];
        }
    }
    return -1; // Return -1 if no unique element is found
}