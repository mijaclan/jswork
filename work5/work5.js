    
    //9X9的空表，请自行编写这段代码
    str1 ='<table border="2">'
    for(let i=9;i>0;--i){
      str1 += '<tr>' 
       for(var j=9;j>0;--j){
       str1 += ' <td>&nbsp;</td>'
    }
     str1 +='</tr>'
    }
        str1 += '</table>'
    document.getElementById('table1').innerHTML = str1
 //倒九九乘法空表——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————-
str2 =' <table border="1">'
for(let i=9;i>0;--i){
  str2 += '<tr>'
   for(var j=i;j>0;--j){
   str2 += ' <td>&nbsp;</td>'
}
   str2 +='</tr>'
}
    str2 += '</table>'
document.getElementById('table2').innerHTML = str2

//倒九九乘法表，请自行编写这段代码
//____________________________________________________________________________________________
//计算/*
/*

 str3 ='<table border="1">'//00
   for(let n=9;m>0;--n ){//00
       str3 += '<tr>'//00
   for(var m=n;m>0;--n){//00
   // for( var b=9; b>=a;b--){//列的
     str3 += (a+"x"+b+"= "+ a*b);//表达
    }
    str3 += '</table>'
    document.getElementById('table3').innerHTML = str3
*/

      str3 = "<table border='1'>"//表格
    for(let i=9;i>0;--i){//用for函数定义变量，设定数字
    str3 += "<tr>"   
      /* tabel里的 列表  
      <tr>  
      <td> 子列表名1 </td>
      <td>   子列表名1 </td>
      </tr>


      */
    for(let j=i;j>0;--j) {  
        str3 += "<td>" + j + "*" + i + "=" + (j * i) + "</td>" //计算，赋值给str3
    }
    str3 += "</tr>"  //列表的结束
}
    document.getElementById("table3").innerHTML = str3;  //放到表格里打印str3
