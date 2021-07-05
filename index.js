var inputCallback = function() {
  var original = document.getElementById('original-textbox').value;
  var reversed = original.split('').reverse().join('');

  document.getElementById('reversed-textbox').value = reversed;

  let charsRemaining = 300 - original.length;
  let charsRemainingString = `Characters remaining: ${charsRemaining}`;
  document.getElementById('characters-remaining').innerText = charsRemainingString;

  if (charsRemaining <= 10) {
    document.getElementById('characters-remaining').style.color = "red";
  } else {
    document.getElementById('characters-remaining').style.color = "#102A43";
  }
};

var clearText = function() {
  document.getElementById('original-textbox').value = '';
  document.getElementById('reversed-textbox').value = '';
  document.getElementById('characters-remaining').innerText = "Characters remaining: 300"
  document.getElementById('characters-remaining').style.color = "#102A43";
};