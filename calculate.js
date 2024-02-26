function calculate() {
  var x = document.getElementById('x').value;
  var y = document.getElementById('y').value;
  var result = parseInt(x) + parseInt(y);
  document.getElementById('result').innerHTML = result;
}
