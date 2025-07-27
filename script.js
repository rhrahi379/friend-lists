document.getElementById('btn').onclick = function () {
    document.getElementById('block').style.height = '0%';
}
document.getElementById('btn').onmouseenter = function () {
    document.getElementById('block').style.height = '100%';
}

let num = 1;
document.getElementById('right').onclick = function () {
    num = (num + 1);
    let src = 'img/img' + num + '.jpg';
    document.getElementById('img').src = src;
}
document.getElementById('left').onclick = function () {
    num = Math.abs((num - 1));
    let src = 'img/img' + num + '.jpg';
    document.getElementById('img').src = src;
}