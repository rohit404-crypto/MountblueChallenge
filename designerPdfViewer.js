function designerPdfViewer(h, word) {
    let ar = [];
    let ar2 = [];
    let str = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < word.length; i++) {
        ar.push(str.indexOf(word[i]));
    }

    for (let j = 0; j < ar.length; j++) {
        ar2.push(h[ar[j]]);
    }

    let max = Math.max(...ar2);
    return max * word.length;
}