console.log('Loaded!');

// move madi
var img=document.getElementById('madi');
var marginTop=0;
function moveTop(){
    marginBottom=marginBottom+1;
    img.style.marginBottom=marginBottom+'px';
}
img.onclick =function(){
    var interval=setInterval(moveTop,50);
};

var counter=0;
var button =document.getElementById('counter');
button.onclick=function(){
  counter =counter+1;
  var span =document.getElementById('count');
  span.innerHTML=counter.toString();
};