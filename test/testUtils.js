import { expect } from 'chai';

import wordCount from '../src/utils/wordCount';

describe('Test word count', () => {
  it('"Hello World!" shoud be 2 words', () => {
    expect(wordCount('Hello World!')).to.equal(2);
  });
  it('""Hi, Ben!" she says," shoud be 4 words', () => {
    expect(wordCount('"Hi, Ben!" she says,')).to.equal(4);
  });
  it('"台灣人" shoud be 3 words', () => {
    expect(wordCount('台灣人')).to.equal(3);
  });
  it('"I am a 台灣人" shoud be 6 words', () => {
    expect(wordCount('I am a 台灣人')).to.equal(6);
  });
});
