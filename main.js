function eyes(){var eyeBall = document.querySelector('#eyeBall');
var eyeBall1 =document.querySelector('#eyeBall1')

document.onmousemove = (event) => {
    var x1 =event.clientX*100/window.innerWidth+"%"
    var y1 =event.clientY*100/window.innerHeight+"%"
    var x = event.clientX * 100 / window.innerWidth + "%";
    var y = event.clientY * 100 / window.innerHeight + "%";
    
    eyeBall.style.transition = ".1s";
    eyeBall.style.left = x;
    eyeBall.style.top = y;
    eyeBall1.style.transition = ".1s";
    eyeBall1.style.left = x1;
    eyeBall1.style.top = y1;
}

document.onmouseout = (event) => {
    eyeBall.style.transition = "0.1s";
    eyeBall.style.left = "50%";
    eyeBall.style.top = "50%";
    eyeBall1.style.left = "50%";
    eyeBall1.style.top = "50%";
}
}
eyes()
