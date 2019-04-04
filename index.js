// add solution here



const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]

const instruments = ["guitar", "guitar", "bass", "drums"]

function theBeatlesPlay(musicians, instruments) {
  var phrases = []
  for (var i = 0; i < musicians.length; i++) {
    phrases.push(musicians[i] + " plays " + instruments[i])
  }
  return phrases
}


var facts = [ "He was the last Beatle to learn to drive",
              "He was never a vegetarian",
              "He was a choir boy and boy scout",
              "He hated the sound of his own voice",
              "foo",
              "bar"
]
function johnLennonFacts(arr){
  var result = []
  var i = 0
  while(i < arr.length) {
    result.push(arr[i] + "!!!")
    i++
  }
  return result
}

function iLoveTheBeatles(number) {
  var array = []
  do {
    array.push("I love the Beatles!");
    number++;
  } while (number < 7);
  return array
}
