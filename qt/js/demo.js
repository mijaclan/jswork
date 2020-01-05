

/*4.初始化Swiper：最好是挨着</body>标签**/
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',  // 垂直切换选项
    loop: true, // 循环模式选项
    
     // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
     // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    //  // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })  



/*+++++*/

   var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

   
    



    //如果作为CommonJs 或ES 模块引入

    //CommonJs
    var Swiper = require('swiper');    
    var mySwiper = new Swiper('.swiper-container', { /* ... */ });
    
    //ES
    import Swiper from 'swiper';    
    var mySwiper = new Swiper('.swiper-container', { /* ... */ });