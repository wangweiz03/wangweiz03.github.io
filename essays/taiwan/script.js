var left = 0;
var timer;

var b = document.getElementById('icolist').getElementsByTagName('li');
var c = document.querySelector("#icolist");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");

function imgChange(n){
    let lt = -(n*1350);
    imglist.style.marginLeft = lt + 'px';
    left = lt;
}

prev.onclick = function(){
    let prevgo = Math.floor(-left/1350) - 1;
    if (prevgo === -1)
        prevgo = 3;
    imgChange(prevgo);
}

next.onclick = function(){
    let nextgo = Math.floor(-left/1350) + 1;
    if (nextgo === 4)
        nextgo = 0;
    imgChange(nextgo);
}

c.onclick = function(){
    var tg = event.target;
    let ico = tg.innerHTML - 1;
    curImg(ico);
    imgChange(ico);
}

function curImg(m) {
    for (let i=0;i<b.length;i++){
        b[i].style.backgroundColor = "";
    }
    b[m].style.backgroundColor = "rgb(184, 231, 127)";
}

run();

function run() {
    if (left <= -5400) left = 0;
    var m = Math.floor(-left / 1350);
    curImg(m);
    imglist.style.marginLeft = left + 'px';
    var n = (left % 1350 == 0) ? n = 3000 : n = 5;
    left -= 10;
    timer = setTimeout(run,n);
}



