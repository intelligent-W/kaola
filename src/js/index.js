// 导航
// 获取左侧导航的ul里面的li里面的a
var a=document.querySelector('nav>header')
var a1=a.querySelectorAll('ul')[0]
var a2=a1.querySelectorAll('li>a')
for(let i=0;i<a2.length;i++){
    a2[i].onmouseenter=function(){
        this.style.color="white"
    }
    a2[i].onmouseleave=function(){
        this.style.color=""
    }
}
// 鼠标悬停在手机考拉的li上显示二维码
var ewm=a.querySelector('.erweima')
a2[2].onmouseenter=function(){
    ewm.style.display="block"
    a2[2].style.color="white"
}
a2[2].onmouseleave=function(){
    ewm.style.display=""
    a2[2].style.color=""
}

// 获取右侧导航的ul里面的
var b=a.querySelectorAll('ul')[1]
var b1=b.querySelectorAll('li>a')
for(let i=0;i<b1.length;i++){
    b1[i].onmouseenter=function(){
        this.style.color="white"
    }
    b1[i].onmouseleave=function(){
        this.style.color=""
    }
}

// 右侧导航里的div
var c= a.querySelectorAll('li>div')
var c1= a.querySelectorAll('li>div>a')
for(let i=0;i<c.length;i++){
    c[i].onmouseenter=function(){
        this.style.backgroundColor="white"
        this.style.color="red"
        this.children[1].style.display="block"
    }
    c[i].onmouseleave=function(){
        this.style.backgroundColor=""
        this.style.color=""
        this.children[1].style.display="none"
    }
}


// 右侧导航栏的二级菜单
var sec=a.querySelectorAll('.sec')
var second=a.querySelectorAll('.sec>a')
for(let i=0;i<second.length;i++){
    second[i].onmouseenter=function(){
        second[i].style.color="red"
    }
    second[i].onmouseleave=function(){
        second[i].style.color=""
    }
}

// 右侧导航鼠标悬停在新浪微博上面显示的图片
var i1=a.querySelector('.more>.sec>i')
var i2=a.querySelectorAll('.more>.sec>a')
i2[1].onmouseenter=function(){
    i1.style.display="block"
    i2[1].style.color="red"
}
i2[1].onmouseleave=function(){
    i1.style.display=""
    i2[1].style.color=""

}
// 右侧导航鼠标悬停在微信上面显示的图片
var i3=a.querySelector('.more>.sec>em')
i2[2].onmouseenter=function(){
    i3.style.display="block"
    i2[2].style.color="red"
}
i2[2].onmouseleave=function(){
    i3.style.display=""
    i2[2].style.color=""
}
// 悬停在购物车上面，背景变成红色，字体变成红色
$('.header>.shop').mouseenter(function(){
    $('.header>.shop').css({
        color:'red',
        backgroundColor:'rgba(255,0,0,.1)'
    })
})
$('.header>.shop').mouseleave(function(){
    $('.header>.shop').css({
        color:'',
        backgroundColor:''
    })
})

$('.dh>li:first').children().css({
    color:"red"
})
// 正文导航
for(var i=0;i<$('.dh>li').length;i++){
    $('.dh>li>a').mouseenter(function(){
        $(this).css({
            color:'red'
        })
    })
    $('.dh>li>a').mouseleave(function(){
        $(this).css({
            color:''
        })
    })
}


var mySwiper = new Swiper ('.swiper-container', {
    loop: true, // 循环模式选项
    autoplay:{
        delay:2000,
    },
    effect : 'fade',
    fadeEffect: {
        crossFade: true,
    },
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable :true,
    },
    // autoplayDisableOnInteraction:true,
    // paginationClickable:true,
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    
    // // 如果需要滚动条
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  })  
  mySwiper.el.onmouseover = function(){
    mySwiper.autoplay.stop();
  }
  
  //鼠标离开开始自动切换
  mySwiper.el.onmouseout = function(){
    mySwiper.autoplay.start();
  }  
// 点击下面的小圆点，图片跟着动
  for(i=0;i<mySwiper.pagination.bullets.length;i++){
    mySwiper.pagination.bullets[i].onmouseover=function(){
      this.click();
    };
  } 

//  左侧导航请求数据
getList()
function getList(){
    $.ajax({
        url:'../lib/self/left_nav.json',
        dataType:'json',
        success:function(res){
            // console.log(res)
            let str=''
            res.forEach(item=>{
                str+=`
                <ul>
                    <img src="${item.img}">
                    <li>"${item.moduleTitle}</li>
                    <span>${item.arrow}</span>
                </ul>
                `
                
            })
            $('.left_nav>ul').html(str)
        }
    })
}

// 美容彩妆
getList1()
function getList1(){
    $.ajax({
        url:'../lib/self/right_nav.json',
        dataType:'json',
        success:function(res){
            // console.log(res)
            let str=''
            res.forEach(item=>{
                // console.log(item)
                str+=`
                    <li>
                    <dl>
                    <dt>${item.title}</dt>
                    <dd>
                    <div>
                `
                item.list.forEach(item2=>{
                    str+= `
                        <a>${item2.name}</a>
                    `
                })
                str+=`
                </div>
                </dd>
                </dl>
                </li>
                `
            })
            $('.left_nav_second>.lf').html(str)
        }
    })
}

// 美容彩妆
getList2()
function getList2(){
    $.ajax({
        url:'../lib/self/right_pic.json',
        dataType:'json',
        success:function(res){
            let str=''
            res.forEach(item=>{
                str+=`
                <li>
                <img src="${item.img}">
                </li>
                `
            })
            $('.left_nav_second>.rg').html(str)
        }
    })
}

// 母婴儿童
getList3()
function getList3(){
    $.ajax({
        url:'../lib/self/right_nav_one.json',
        dataType:'json',
        success:function(res){
            // console.log(res)
            let str=''
            res.forEach(item=>{
                // console.log(item)
                str+=`
                    <li>
                    <dl>
                    <dt>${item.title}</dt>
                    <dd>
                    <div>
                `
                item.list.forEach(item2=>{
                    str+= `
                        <a>${item2.name}</a>
                    `
                })
                str+=`
                </div>
                </dd>
                </dl>
                </li>
                `
            })
            $('.left_nav_second_one>.lf').html(str)
        }
    })
}
// 母婴儿童
getList4()
function getList4(){
    $.ajax({
        url:'../lib/self/right_nav_one_pic.json',
        dataType:'json',
        success:function(res){
            let str=''
            res.forEach(item=>{
                str+=`
                <li>
                <img src="${item.img}">
                </li>
                `
            })
            $('.left_nav_second_one>.rg').html(str)
        }
    })
}
// 营养保健
getList5()
function getList5(){
    $.ajax({
        url:'../lib/self/right_nav_two.json',
        dataType:'json',
        success:function(res){
            // console.log(res)
            let str=''
            res.forEach(item=>{
                // console.log(item)
                str+=`
                    <li>
                    <dl>
                    <dt>${item.title}</dt>
                    <dd>
                    <div>
                `
                item.list.forEach(item2=>{
                    str+= `
                        <a>${item2.name}</a>
                    `
                })
                str+=`
                </div>
                </dd>
                </dl>
                </li>
                `
            })
            $('.left_nav_second_two>.lf').html(str)
        }
    })
}
// 营养保健
getList6()
function getList6(){
    $.ajax({
        url:'../lib/self/right_nav_two_pic.json',
        dataType:'json',
        success:function(res){
            let str=''
            res.forEach(item=>{
                str+=`
                <li>
                <img src="${item.img}">
                </li>
                `
            })
            $('.left_nav_second_two>.rg').html(str)
        }
    })
}
// 数码家电
getList7()
function getList7(){
    $.ajax({
        url:'../lib/self/right_nav_three.json',
        dataType:'json',
        success:function(res){
            // console.log(res)
            let str=''
            res.forEach(item=>{
                // console.log(item)
                str+=`
                    <li>
                    <dl>
                    <dt>${item.title}</dt>
                    <dd>
                    <div>
                `
                item.list.forEach(item2=>{
                    str+= `
                        <a>${item2.name}</a>
                    `
                })
                str+=`
                </div>
                </dd>
                </dl>
                </li>
                `
            })
            $('.left_nav_second_three>.lf').html(str)
        }
    })
}
// 数码家电
getList8()
function getList8(){
    $.ajax({
        url:'../lib/self/right_nav_three_pic.json',
        dataType:'json',
        success:function(res){
            let str=''
            res.forEach(item=>{
                str+=`
                <li>
                <img src="${item.img}">
                </li>
                `
            })
            $('.left_nav_second_three>.rg').html(str)
        }
    })
}

// 个人洗护
getList9()
function getList9(){
    $.ajax({
        url:'../lib/self/right_nav_four.json',
        dataType:'json',
        success:function(res){
            // console.log(res)
            let str=''
            res.forEach(item=>{
                // console.log(item)
                str+=`
                    <li>
                    <dl>
                    <dt>${item.title}</dt>
                    <dd>
                    <div>
                `
                item.list.forEach(item2=>{
                    str+= `
                        <a>${item2.name}</a>
                    `
                })
                str+=`
                </div>
                </dd>
                </dl>
                </li>
                `
            })
            $('.left_nav_second_four>.lf').html(str)
        }
    })
}
// 个人洗护
getList10()
function getList10(){
    $.ajax({
        url:'../lib/self/right_nav_four_pic.json',
        dataType:'json',
        success:function(res){
            let str=''
            res.forEach(item=>{
                str+=`
                <li>
                <img src="${item.img}">
                </li>
                `
            })
            $('.left_nav_second_four>.rg').html(str)
        }
    })
}
// 服饰鞋靴
getList11()
function getList11(){
    $.ajax({
        url:'../lib/self/right_nav_five.json',
        dataType:'json',
        success:function(res){
            // console.log(res)
            let str=''
            res.forEach(item=>{
                // console.log(item)
                str+=`
                    <li>
                    <dl>
                    <dt>${item.title}</dt>
                    <dd>
                    <div>
                `
                item.list.forEach(item2=>{
                    str+= `
                        <a>${item2.name}</a>
                    `
                })
                str+=`
                </div>
                </dd>
                </dl>
                </li>
                `
            })
            $('.left_nav_second_five>.lf').html(str)
        }
    })
}
// 服饰鞋靴
getList12()
function getList12(){
    $.ajax({
        url:'../lib/self/right_nav_five_pic.json',
        dataType:'json',
        success:function(res){
            let str=''
            res.forEach(item=>{
                str+=`
                <li>
                <img src="${item.img}">
                </li>
                `
            })
            $('.left_nav_second_five>.rg').html(str)
        }
    })
}
// 户外运动
getList13()
function getList13(){
    $.ajax({
        url:'../lib/self/right_nav_six.json',
        dataType:'json',
        success:function(res){
            // console.log(res)
            let str=''
            res.forEach(item=>{
                // console.log(item)
                str+=`
                    <li>
                    <dl>
                    <dt>${item.title}</dt>
                    <dd>
                    <div>
                `
                item.list.forEach(item2=>{
                    str+= `
                        <a>${item2.name}</a>
                    `
                })
                str+=`
                </div>
                </dd>
                </dl>
                </li>
                `
            })
            $('.left_nav_second_six>.lf').html(str)
        }
    })
}
// 户外运动
getList14()
function getList14(){
    $.ajax({
        url:'../lib/self/right_nav_six_pic.json',
        dataType:'json',
        success:function(res){
            let str=''
            res.forEach(item=>{
                str+=`
                <li>
                <img src="${item.img}">
                </li>
                `
            })
            $('.left_nav_second_six>.rg').html(str)
        }
    })
}
// 鼠标滚轮到100px的时候header变成固定定位
$(window).scroll(function(){
    if($(window).scrollTop()>=150){
        $('.change').css({
            display:'block'
        })
    }else{
        $('.change').css({
            display:'none'
        })
    }
})








