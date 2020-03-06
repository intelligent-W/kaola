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
const info = JSON.parse(localStorage.getItem('information'))
    if (!info) {
      alert('您访问的数据有误')
      window.location.href = './list.html'
    }
    bindHtml()
    function bindHtml() {
      $('.information .exzoom img').attr('src', info.img)
      $('.information .name').text(info.name)
      $('.information .price').text('￥: ' + info.price)
    }
    $('.add').click(() => {
      const cartList = JSON.parse(localStorage.getItem('cartList')) || []
      let exits = cartList.some(item => {
        return item.id === info.id
      })
      if (exits) {
        let data = null
        for (let i = 0; i < cartList.length; i++) {
          if (cartList[i].id === info.id) {
            data = cartList[i]
            break
          }
        }
        data.number++
        data.xiaoji = data.number * data.price
      } else {
        info.number = 1
        info.xiaoji = info.price 
        info.isSelect = false 
        cartList.push(info)
      }
      alert('您已成功加入购物车！')
      localStorage.setItem('cartList', JSON.stringify(cartList))
    })
    $("#exzoom").exzoom();
    $('.buying').click(function(){
        $(window).attr('location','../pages/cart.html')
    })