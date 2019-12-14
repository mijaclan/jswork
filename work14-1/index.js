////////
let thetime = new Date();

let hour = thetime.getHours(); //当前 时 分  //用固定的60分减去变化的当前时间
let min = thetime.getMinutes();
let min60 = 60;
let sj = 60 - min;

//  console.log(sj);



//该时间为一小时 单位分钟（60*1000）=1分钟
let endseconds = new Date().getTime() + (sj * 60 * 1000) - (sj * 1000);
//声明变量保存剩余的时间
let d = h = m = s = 0;
//设置定时器，实现限时秒杀效果
let id = setInterval(seckill, 1000);

function seckill() {

    let nowtime = new Date(); //获取当前时间 
    //获取时间差，单位秒
    let remaining = parseInt((endseconds - nowtime.getTime()) / 1000);
    //判断秒杀是否过期
    if (remaining > 0) {
        d = parseInt(remaining / 86400); //计算剩余数（除以60*60*24取整，获取剩余的天数）
        h = parseInt((remaining / 3600) % 24); //计算剩余小时（除以60*60装换位小时，与24取模，获取剩余的小时）
        m = parseInt((remaining / 60) % 60); //计算剩余分钟（除以60转为分钟，与60取模，获取剩余的分钟）
        s = parseInt(remaining % 60); //计算剩余秒（与60取模，获取剩余的秒数）
        //统一利用两位数表示剩余的天数，小时，分钟，秒
        d = d < 10 ? '0' + d : d;
        h = h < 10 ? '0' + h : h;
        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;

    } else {
        clearInterval(id); //秒杀过期，取消定时器
        d = h = m = s = '00';
    }
    // 将剩余的天数，小时，分钟和秒，显示到指定的网页中
    document.getElementById('d').innerHTML = d + '天';
    document.getElementById('h').innerHTML = h + '时';
    document.getElementById('m').innerHTML = m + '分';
    document.getElementById('s').innerHTML = s + '秒';
}
//////////////////////////////////————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
/*分割线
 
////////__________________________________________________________________________________________________


console.log("A:上班996，生病ICU");
console.log("B:不，,,，应是上课855，生病就宿舍or回家");



*/