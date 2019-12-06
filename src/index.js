function top_3_words(text) {
    const words = text
        .toLowerCase()
        .match(/[^\s.,;!?/]+/g)
        .map(word => `_${word}`); //to avoid problems with reserved words like 'constructor'

    const wordsFrequency = words.reduce(setFrequency, {});

    const numberOfWords = Math.min(3, Object.keys(wordsFrequency).length);

    return findMostFrequestWords(wordsFrequency, numberOfWords)
        .map(word => word.substr(1)); // remove the '_' we added before
}

function setFrequency(frequencyOf, word) {
    if (!frequencyOf[word]) {
        frequencyOf[word] = 0;
    }

    frequencyOf[word]++;
    
    return frequencyOf;
}

/* 
    This is designed to avoid having to traverse wordsFrequency more than once. It means that we have to do several loops equal
    to numberOfWords. But the assumption is that the number of words we want to get at the end is much smaller than 
    the number in wordsFrequency
*/
function findMostFrequestWords(wordsFrequency, numberOfWords = 3) {
    const biggestFrequencies = new Array(numberOfWords).fill(0);
    const mostFrequestWords = new Array(numberOfWords).fill('');

    for (const word in wordsFrequency) {
        const currentFrequency = wordsFrequency[word];

        for (let position = 0; position < numberOfWords; position++) {
            const frequencyInPosition = biggestFrequencies[position];
            
            if (frequencyInPosition < currentFrequency) {
                biggestFrequencies.splice(position, 0, currentFrequency);
                biggestFrequencies.pop();

                mostFrequestWords.splice(position, 0, word);
                mostFrequestWords.pop();
                break;
            }
        }
    }

    return mostFrequestWords;
}

module.exports = top_3_words;