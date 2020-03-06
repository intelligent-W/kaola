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
// 获取数据
const cartList = JSON.parse(localStorage.getItem('cartList'))
if (!cartList) {
    alert('您还没有加入商品到购物车，快去首页找找吧')
  } else {
    bindHtml()
    bindEvent()
  }
  function bindHtml() {
    let selectAll = cartList.every(item => {
     console.log(item)
      return item.isSelect === true
    })
    let str = `
    <p class="aa">我的购物车</p>
    <div class="top">
      <input class="selectAll" type="checkbox" ${ selectAll ? 'checked' : '' }>   全选
      <strong>商品信息</strong>
      <ul><li>单价(元)</li><li>数量</li><li>金额</li><li>操作</li></ul>
    </div>
    <ul class="center">
  `
  cartList.forEach(item => {
    str += `
      <li>
        <div class="select">
          <input data-id=${ item.id } class="selectOne" type="checkbox" ${ item.isSelect ? 'checked' : '' }>
        </div>
        <div class="info">
          <img src="${ item.img }" alt="">
          <p>${ item.name }</p>
        </div>
        <p class="price">${ item.price }</p>
        <div class="number">
          <button class="sub" data-id=${ item.id }>-</button>
          <input type="text" value="${ item.number }">
          <button class="add" data-id=${ item.id }>+</button>
        </div>
        <p class="xiaoji">￥： ${ item.xiaoji.toFixed(2) }</p>
        <div class="del" data-id=${ item.id }>删除</div>
      </li>
    `
  })

  let selectArr = cartList.filter(item => item.isSelect)
  let selectNumber = 0
  let selectPrice = 0
  selectArr.forEach(item => {
    selectNumber += item.number
    selectPrice += item.xiaoji
  })


  str += `
    </ul>
    <div class="bottom">
      <p>已选商品  <span>${ selectNumber }</span></p>
      <p>总价(不含运费)： <span>￥： ${ selectPrice.toFixed(2) }</span></p>
      <button class="pay" ${ selectArr.length ? '' : 'disabled'}>去结算</button>
      <button class="clear">清空购物车</button>
    </div>
  `

  $('.cart').html(str)
}

function bindEvent() {
  $('.cart').on('change', '.selectAll', function () {
    cartList.forEach(item => {
      item.isSelect = this.checked
    })

    bindHtml()

    localStorage.setItem('cartList', JSON.stringify(cartList))
  })

  $('.cart').on('change', '.selectOne', function () {

    const id = $(this).data('id')

    cartList.forEach(item => {
      if (item.id === id) {
        item.isSelect = !item.isSelect
      }
    })

    bindHtml()

    localStorage.setItem('cartList', JSON.stringify(cartList))
  })

  // 4-3. 减少商品数量的事件
  $('.cart').on('click', '.sub', function () {

    const id = $(this).data('id')

    cartList.forEach(item => {
      if (item.id === id) {
        item.number > 1 ? item.number-- : ''
        item.xiaoji = item.price * item.number
      }
    })

    bindHtml()

    localStorage.setItem('cartList', JSON.stringify(cartList))
  })

  $('.cart').on('click', '.add', function () {

    const id = $(this).data('id')

    cartList.forEach(item => {
      if (item.id === id) {
        item.number++
        item.xiaoji = item.number * item.price
      }
    })

    bindHtml()

    localStorage.setItem('cartList', JSON.stringify(cartList))
  })

  $('.cart').on('click', '.del', function () {
    const id = $(this).data('id')
    console.log('把数组中 id 为 : ' + id + ' 的数去去掉, 从新渲染页面, 从新存储到 lcoalStorage')
  })
  $('.cart').on('click', '.clear', function () {
    console.log('把数组清空')
    console.log('从新渲染页面')
    console.log('把空数组从新存储到 lcoalStorage 里面')
  })
}