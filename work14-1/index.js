let thetime = new Date();
let thet = new Date().getTime() + thetime;
console.log(thet);
//1575738773420Sun Dec 08 2019 01:12:53 GMT+0800 (中国标准时间)
///////
let as = thetime.getFullYear(); //年
let df = thetime.getMonth(); //月
let gh = thetime.getDay(); //日
let jk = thetime.getHours() + 1; //时
//let kl = thetime.getMinutes; //分


let stopTime = new Date("df  gh as:jk:00"); ///写入月份，日，年，时，分



//设置秒杀的结果时间为1小时之后
//var nowtime = new Date();//当前时间
let lefttime = parseInt((stopTime.getTime() - thetime.getTime()) / 1000);

let endseconds = new Date().getTime() + 3600 * 1000;

//声明变量保存剩余的时间
let d = h = m = s = 0;
//设置定时器，实现限时秒杀效果
let id = setInterval(seckill, 1000);

function seckill() {

    let nowtime = new Date(); //获取当前时间  这里还有用的？？？？
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
/*

*/









////////__________________________________________________________________________________________________


console.log("A:上班996，生病ICU");
console.log("B:不，,,，应是上课855，生病就宿舍or回家");