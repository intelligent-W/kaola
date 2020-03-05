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
var flag = true
var list2 = []
getList()
function getList() {
    $.ajax({
    url: '../lib/self/list.json',
    dataType: 'json',
    success: function (res) {
    $('.page').pagination({
    pageCount: Math.ceil(res.length / 11),
    current: 1,
    jump: true,
    coping: true,
    homePage: '首页', 
    endPage: '末页',
    prevContent: '上页',
    nextContent: '下页',
    callback: function (api) {
        let curr = api.getCurrent()
        var list = res.slice((curr - 1) * 11, curr * 11)
        bindHtml(list)
        }
        })
        bindHtml(res.slice(0, 11))
        list2 = res
    }
    })
}

function bindHtml(list) {
    let str=''
    list.forEach(function(item){
        // str+=`<ul>`
        
            str+=`<li data-id="${ item.id }">
                <img src="${item.img}"><p>${item.name}</p>
                <strong>￥:${item.price}</strong>
            </li>`
      
        // str+=`</ul>`
    })
    $('.box>ul').html(str)
}


var btn = document.querySelector('.sort')
btn.onclick = function () {
    flag = !flag
    list2.sort(function (a, b) {
    if (flag === true) {
        return a.id - b.id
    } else {
        return b.id - a.id
    }
    })

    $('.page').pagination({
    pageCount: Math.ceil(list2.length / 11), // 总页数
    current: 1, // 当前页
    jump: true,
    coping: true,
    homePage: '首页', // 首页按钮的文本
    endPage: '末页', // 末页按钮的文本
    prevContent: '上页',
    nextContent: '下页',
    callback: function (api) { // 当你切换页面的时候会触发
        let curr = api.getCurrent()
        var list3 = list2.slice((curr - 1) * 11, curr * 11)
        bindHtml(list3)
    }
    })

    bindHtml(list2.slice(0, 11))
}
$('.box > ul').on('click', 'li', function () {
    // console.log($(this).data('id'))
    console.log(this)
    const id = $(this).data('id')
    let data = null
    for (let i = 0; i < list2.length; i++) {
      if (list2[i].id === id) {
        data = list2[i]
        break
      }
    }
    localStorage.setItem('information', JSON.stringify(data))
    window.location.href = '../pages/details.html'
  })
