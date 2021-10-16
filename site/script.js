var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i in names) {
  var name = names[i];
  var firstLetter = name.charAt().toLowerCase();

  if (firstLetter === "j") {
    byeSpeaker.speak();
  } else {
    helloSpeaker.speak();
  }
}

//