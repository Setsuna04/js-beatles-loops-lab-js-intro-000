function theBeatlesPlay(musicians, instrument) {
  var sentence = [];
  for (let i = 0; i < musicians.length; i++) {
    sentence.push(musicians[i] +' plays ' + instrument[i]);
  }
  return sentence;
}
