console.log('Loaded!');

// move madi
var img=document.getElementById('madi');
var marginTop=0;
function moveBottom(){
    marginTop=marginTop+1;
    img.style.marginTop=marginTop+'px';
}
img.onclick =function(){
    var interval=setInterval(moveBottom,50);
};