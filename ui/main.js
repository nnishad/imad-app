console.log('Loaded!');

// move madi
var img=document.getElementById('madi');
var marginTop=0;
function moveBottom(){
    marginTop=marginTop-1;
    img.style.marginTop=marginTop+'px';
}
img.onclick =function(){
    var interval=setInterval(moveBottom,100);
};

var counter=0;
var button =document.getElementById('counter');
button.onclick=function(){
  counter =counter+1;
  var span =document.getElementById('count');
  span.innerHTML=counter.toString();
};