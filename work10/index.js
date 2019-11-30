function monkey() {
    let total = document.getElementById("monkeytotal").value
    let kick = document.getElementById("monkeykick").value
    total = parseInt(total) && Number(total)
    kick = parseInt(kick) && Number(kick)
    if (isNaN(total) || isNaN(kick)) {
        alert('请输入数字')
        return
    }
    let monkey = []
    for (let i = 1; i <= total; i++) {
        monkey.push(i)
    }
    let i = 0
    while (monkey.length > 1) {
        i++;
        head = monkey.shift()
        if (i % kick != 0) {
            monkey.push(head);
        }
    }

    document.getElementById('monkeyking').innerText = monkey[0]

}
//___________
///qaeweezserasrweewa


function stat() {
    let str = document.getElementById("str").value
    let obj = {}
    for (var i = 0; i < str.length; i++) {
        obj[str[i]] = (obj[str[i]] + 1) || 1; //obj的[]里的内容放到{}里
        //
    }

    //document.getElementById("result").innerHTML=result;
    // document.getElementById("result").innerHTML =result.reduce()

    document.getElementById('result').innerText = JSON.stringify(obj)
        //result的index网页里的统计答案-->打印obj{}里的数组内容

    console.log("最近我掉头发有点多，我要回去养养。");
    /* 2019.11.2.1:23 */
}