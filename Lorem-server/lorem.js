const lorem = require('./lorem-data');

// sentences
const getSentences = (noOfLines) => {
    let splitSentences = lorem.loremIpsumData.split(".");

    const sentences = splitSentences.map(sentence => {
        return sentence.trim();
    });
    return sentences.slice(0, noOfLines);
}

// paragraphs
const getParagraphs = (noOfParagraphs) => {
    let splitParagraphs = lorem.loremIpsumData.split("\n");

    const paragraphs = splitParagraphs.filter((paragraph, index) => {
        return paragraph[index];
    });
    return paragraphs.slice(0, noOfParagraphs);
}

// words
const getWords = (noOfWords) => {
    let splitWords = lorem.loremIpsumData.split(" ");

    const words = splitWords.map(word => {
        return word.replace(/[,.]/g, '');
    });
    return words.splice(0, noOfWords);
}

module.exports = {
    loremSentence: getSentences,
    loremParagraph: getParagraphs,
    loremWord: getWords
}