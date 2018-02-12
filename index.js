function theBeatlesPlay(musicians, instrument) {
  sentence = [];
  for (i = 0; i < musicians.length(); i++) {
    sentence.push(musicians + instrument);
  }
  return sentence;
}
