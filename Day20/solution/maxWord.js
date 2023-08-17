const mostWordsFound = (sentences, maxLength = 0) => {

    for (let sentence of sentences) {
        maxLength = sentence.split(" ").length > maxLength ? sentence.split(" ").length : maxLength;
    }
    return maxLength;
};

const sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];
console.log(mostWordsFound(sentences));