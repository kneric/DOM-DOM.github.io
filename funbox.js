var box = document.getElementById('box');

box.addEventListener('mousemove', function (e){
  box.style.backgroundColor = 'rgb('+e.offsetX+', '+e.offsetY+', 40)';
})