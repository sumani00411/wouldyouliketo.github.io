const yesButton = document.getElementById('notMovingElement');
const happyImg = document.getElementById('happy');
const pleaseImg = document.getElementById('please');
const yayImg = document.getElementById('yay');
const winnerImg = document.getElementById('winner');

document.addEventListener('DOMContentLoaded', function(){
  var element = document.getElementById('movingElement');

  element.addEventListener('mouseover', function(e){

    var newX = Math.random() * (window.innerWidth - element.offsetWidth);
    var newY = Math.random() * (window.innerHeight - element.offsetHeight);

    element.style.left = newX +'px';
    element.style.top = newY + 'px';
  });
});

yesButton.addEventListener('click', function() {
  happyImg.style.display = 'block'; 
  yayImg.style.display = 'block'; 
  winnerImg.style.display = 'block'; 
  pleaseImg.style.display = 'none';
});