const {expect} = require('chai');  
const top_3_words = require('../src/index');

const text1 = "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.";
const text2 = "e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e";
const text3 = " //wont won't won't";

describe('Testing the function', () => {
    it('should return the three most frequest words in a string', () => {
        let result = '';

        result = top_3_words(text1)
        expect(result).to.eql(["a", "of", "on"]);

        result = top_3_words(text2)
        expect(result).to.eql(["e", "ddd", "aa"]);

        result = top_3_words(text3)
        expect(result).to.eql(["won't", "wont"]);
    });
});