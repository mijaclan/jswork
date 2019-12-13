//需求：鼠标经过盒子 显示覆盖和大图 鼠标移动的时候 让覆盖跟着移动让大图按比例移动
function $(id) { //根据id值获取元素对象
    return document.getElementById(id);
}
//鼠标经过盒子 显示覆盖和大图
$('smallBox').onmouseover = function() {
    $('mask').style.display = 'block';
    $('bigBox').style.display = 'block';
};
//鼠标离开盒子 隐藏遮罩和大图
$('smallBox').onmouseout = function() {
    //隐藏遮盖和大图
    $('mask').style.display = 'none';
    $('bixBox').style.display = 'none';
};
//鼠标在盒子上移动的时候
//让遮罩跟着鼠标
$('smallBox').onmousemove = function(event) {
    var event = event || window.event;
    //鼠标在页面中的坐标
    var pageX = event.pageX || event.clientX + document.documentElement.scrollLeft;
    var pageY = event.pageY || event.clientY + document.documentElement.scrollTop;
    //计算鼠标的位置 距 盒子的距离
    var boxX = pageX - $('box').offsetLeft;
    var boxY = pageY - $('box').offsetTop;
    //计算遮罩的位置
    var maskX = boxX - $('mask').offsetWidth / 2;
    var maskY = boxY - $('mask').offsetHeight / 2;
    //限定遮罩课移动范围
    if (maskX < 0) {
        maskX = 0;

    }
    if (maskX > $('smallBox').offsetWidth - $('mask').offsetWidth) {
        maskX = $('smallBox').offsetWidth - $('mask').offsetWidth;
    }
    if (maskY < 0) {
        maskY = 0;

    }
    if (maskY > $('smallBox').offsetHeight - $('mask').offsetHeight) {
        maskY = $('smallBOx').offsetHeight - $('mask').offsetHeight;
    }
    //修改遮罩的位置
    $('mask').style.left = maskX + 'px';
    $('mask').style.top = maskY + 'px';
    //按比例移动大图 大图片能够移动的总距离 =大图的宽度 -大盒子的宽度
    var bigImgToMove = $('bigImg').offsetWidth - $('bigBox').offsetWidth;
    //遮罩能够移动的距离 =小盒子的宽度-遮罩的宽度
    var maskToMove = $('smallBox').offsetWidth - $('mask').offsetWidth;
    //计算移动比例rate=大图片能够移动的总距离/遮罩能够移动的总距离
    var rate = bigImgToMove / maskToMove;
    //设置大图片当前的位置=rate *遮罩当前的位置

    $('bigImg').style.left = -rate * maskX + 'px';
    $('bigImg').style.top = -rate * maskY + 'px';

};