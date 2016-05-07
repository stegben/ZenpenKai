function wordCount(text) {
  const splitWords = text.match(/[^\x00-\xff]|\S+/g);
  return splitWords.length;
}

export default wordCount;
