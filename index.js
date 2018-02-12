function theBeatlesPlay(musicians, instrument) {
  var sentence = [];
  for (let i = 0; i < musicians.length; i++) {
    sentence.push(musicians[i] +' plays ' + instrument[i]);
  }
  return sentence;
}

function johnLennonFacts(fact) {
  var i = 0
  var facts = [];
  while (i < fact.length) {
    facts.push(fact[i] + '1');
    i++;
  }
}
