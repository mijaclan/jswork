function monkey(){
    let total =document.getElementById("monkeytotal").Value
    let kick = document.getElementById("monkeykick").Value
    total =parseInt(total) && Number( toatl)
    kick = parseInt(kick) && Number(kick)
 if(isNaN(total)||isNaN(kick)){
     alert('请输入数字')
     return
 }
 let monkey=[]
for (let i=1;i<=total;i++){
    monkey.push(i)
}
let i=0
while (monkey.length>1){
    i++;
    head =monkey.shift()
    if(i%kick!=0){
        monkey.push(head);
    }
}

document.getElementById('monkeyking').innerText=monkey[0]

}

///____________________________________________________________
/*
function stat(){
    let str =document.getElementById("str").Value
    let obj ={}
   var result=str.split(" ");
   
// var 
//  var result=





 document.getElementById('result').innerText=JSON.stringify(obj)

  }

*/
