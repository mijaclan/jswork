/////
var lamp = {
    red :{
        obj:document.getElementById('red'),
        timeout:3,
        style:['red','gray','gray'],
        next:'green'
    },
     yelllow:{
         obj:document.getElementById('yellow'),
         timeout:2,
         style:['gray','yellow','gray'],
         next:'red'

     },
     changeStyle(style){
         this.red.obj.className=style[0]
     }
}
