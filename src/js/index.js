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


var mySwiper = new Swiper ('.banner', {
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
  window.onload=function(){
    for(i=0;i<mySwiper.pagination.bullets.length;i++){
        mySwiper.pagination.bullets[i].onmouseover=function(){
          this.click();
        };
      } 
      
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
            str+=`<ul>`
            res.forEach(item=>{
                str+=`
                    <li>
                    <img src="${item.img}">
                    <a>${item.moduleTitle}</a>
                    <span>${item.arrow}</span>
                    </li>
                `
                
            })
            str+=`</ul>`
            $('.left_nav').html(str)
        }
    })
}

getList2()
function getList2(){
    $.ajax({
        url:'../lib/self/left_nav.json',
        dataType:'json',
        success:function(res){
            // console.log(res)
            let str=''


            res.forEach(item1=>{
                //先11分类
                str+=`<div class="left_nav_second">`

                str+=`<ul>`
                //ul li为小模块=>item1.
                // console.log(item1.list.length)//5
                item1.list.forEach(item2=>{
                    // console.log(item2.title)
                    str+=`<li>
                            <dl><dt>${item2.title}</dt>`
                    //a
                    str+=`<dd><div>`
                    item2.content.forEach(item3=>{
                    str+=`<a>${item3.name}</a>`
                    })
                    str+=`</div></dd>`
                    str+=` </dl>
                   </li>`
                })

                str+=`</ul>`
                str+=`<ol>`
                item1.imgsrc.forEach(item4=>{
                    str+=`<li><img src="${item4.img}"></li>`
                })

                str+=`<p><img src="${item1.lastimg}"></p>`
                str+=`</ol>`
                ///1个分类结束
                str+=`</div>`
        })
        $('.bigsel').html(str)
    }
})
}



$(function(){
    $('.left_nav>ul>li').each(function(index,item){
        $(this).mouseenter(function(){
            $('.bigsel').css({
                display:'block'
            })
            $('.bigsel>.left_nav_second').eq($(this).index()).css({
                display:'block'
            }).siblings().css({
                display:'none'
            })
        })
        $(this).mouseleave(function(){
            $('.bigsel').css({
                display:'none'
            })
            $('.bigsel>.left_nav_second').eq($(this).index()).css({
                display:'none'
            }).siblings().css({
                display:'none'
            })
        })
        })
    })
    $('.bigsel').mouseenter(function(){
        $('.bigsel').css({
            display:'block'
        })
        $('.bigsel>.left_nav_second').eq($(this).index()).css({
            display:'block'
        }).siblings().css({
            display:'none'
        })
    })
    $('.bigsel').mouseleave(function(){
        $('.bigsel').css({
            display:'none'
        })
        $('.bigsel>.left_nav_second').eq($(this).index()).css({
            display:'none'
        }).siblings().css({
            display:'none'
        })
    })

    


 // 右侧小轮播图
    
//   window.onload=function(){
    // for(i=0;i<mySwiper1.pagination.bullets.length;i++){
    //     mySwiper1.pagination.bullets[i].onmouseover=function(){
    //       this.click();
    //     };
    //   } 
//   }

   
// 内容部分请求数据

$.ajax({
    url:'../lib/self/section.json',
    dataType:'json',
    // success:function(res){
        
    //  }   
    }).then(function(res){
        let str=''
        res.forEach(item=>{
            str+=`<div class="beauty"><div class="b_o">
            <div class="b_top">`
            // b_top div结束
    
            str+=`<h1>${item.title}</h1>`
            str+=`<ul>`
            str+=`<section class="first"><a href="">${item.keyname}</a></section>`
            item.list.forEach(item2=>{
                str+=`<li><a href="">${item2.name}</a></li>`
            })
            str+=`</ul>`
            str+=`<p>${item.more}</p>`
            str+=`</div>
            
            <div class="b_m"><div class="b_m_l">`
    
            str+=`<p><img src="${item.img}"></p>`
            str+=`<div class="xx">`
            // div.xx结束
            item.list1.forEach(item3=>{
                str+=`<p>${item3.listname}</p>`
            })
            str+=`</div>
            </div><div class="b_m_m"><ul>`
            // div.bml结束
            item.list2.forEach(item4=>{
                str+=`<li><p>${item4.listtitle}</p><span>${item4.listtile1}</span><img src="${item4.imgsour}"></li>`
            })
            // b_m_m结束
            str+=`</ul></div><div class="b_m_r">`
            str+=`<h2>${item.fire}</h2>`
            str+=`<div class="swiper-container right_s">
            <div class="swiper-wrapper">`
            item.list3.forEach(item5=>{
                str+=`<div class="swiper-slide">
                <div class="a1">
                    <ol>`
                item5.listbuy.forEach(item6=>{
                    str+=`<li><img src="${item6.imgpic}"><p><a href="">${item6.buyname}</a><span>${item6.price}</span></p></li>`
                })
                str+=`</ol></div></div>` 
            })
            str+=`</div>`
            str+=`<div class="swiper-pagination"></div>
                </div>
        `
            // bmr的div结束
            str+=`</div>`
                // bm的div结束
                str+=`</div>`
                //b_o
                str+=`</div>`
                str+=`<div class="b_b"><div class="b_b_t">`
                item.list4.forEach(item7=>{
                    str+=`<h1>${item7.picname}</h1>`
                    str+=`<ul>`
                    item7.picsrc.forEach(item8=>{
                        str+=`<li><img src="${item8.pic}"></li>`
                    })
                    str+=`</ul>`
                })
                str+=`</div></div></div>`
    })
    
    $('.box').html(str)
    cb()
    })

    
    function cb(){
        var mySwiper1 = new Swiper ('.right_s', {
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
          })    
        for(i=0;i<mySwiper1.pagination.bullets.length;i++){
            this.mySwiper1.pagination.bullets[i].onmouseover=function(){
              this.click();
            };
          } 
    }







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
// if($(window).scrollTop()>=750){
//     $('.p_l').css({
//         position:'fixed',
//     })
//     $('.p_r').css({
//         position:'fixed'
        
//     })
// }










