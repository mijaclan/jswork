//定义年历生成函数
function calendar(y) {
    //获取指定年份1月1日的星期数值
    var w = new Date(y, 0).getDate();
    var html = '<div class="box">';
    //拼接每个月份的表格
    for (var m = 1; m <= 12; ++m) {
        html += '<table>';
        html += '<tr class="title"><th colspan="7">' + y + '年' + m + '月</th></tr>';
        html += '<tr><td>日</td><td>一</td><td>二</td><td>三</td><td>四</td><td>五</td><td>六</td></tr>';
        //获取月份m共有多少天
        var max = new Date(y, m, 0).getDate();

        html += '<tr>';//开始,<tr>标签
        for (var d = 1; d <= max; ++d) {
            if (w && d == 1) {//如果该月的第一天不是星期天，则填充空白
                html += '<td colspan="' + w + '">  </td>';
            }
            html += '<td>' + d + '</td>';
            if (w == 6 && d != max) {//如果星期六不是该月的最后一天，那么就换行
                html += '<tr></tr>';
            }
            else if (d == max) {//该月的最后一天，用闭合《tr》标签
                html += '</tr>';
            }
            w = (w + 1 > 6) ? 0 : w + 1;
        }
        html += '</table>';

    }
    html += '</div>';
    return html;


}
//////////////对时时间

function startTime() {
    var x = new Date();
    var a = x.getHours();
    var b = x.getMinutes();
    var c = x.getSeconds();
    b = checkTime(b);
    c = checkTime(c);
    y = document.getElementById("ceshi");
    y.innerHTML=a+":"+b+":"+c;
    t = setTimeout(function () {
        startTime();
    }, 1000)
}
function checkTime(i){
    if(i<10){
        i ="0" +i;
    }
    return i;
}