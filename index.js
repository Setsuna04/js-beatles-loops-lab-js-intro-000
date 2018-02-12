function theBeatlesPlay(musicians, instrument) {
  array = [];
  for (i = 0; i < musicians.length(); i++) {
    array.push(musicians + instrument);
  }
  return array;
}
