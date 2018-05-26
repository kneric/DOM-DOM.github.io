document.getElementById('output').style.visibility = 'hidden';
  
document.getElementById('kgInput').addEventListener('input', function(e) {
  document.getElementById('output').style.visibility = 'visible';

  var kg = e.target.value;
  document.getElementById('poundsOutput').innerHTML = kg * 2.2046;
  document.getElementById('ozOutput').innerHTML = kg * 35.274;
  document.getElementById('stoneOutput').innerHTML = kg * 0.15747;
});