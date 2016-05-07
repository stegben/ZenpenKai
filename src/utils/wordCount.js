function wordCount(text) {
  // split by space
  // or by each chinese characters
  const splitWords = text.match(/[^\x00-\xff]|\S+/g);
  return splitWords.length;
}

export default wordCount;
