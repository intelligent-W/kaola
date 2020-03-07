// 获取手机号登录的那个p
var way=document.querySelectorAll('aside>p')[0]
// 获取手机号登录和邮箱登录的标签
var way1=way.querySelectorAll('a')
// 使用密码验证登录的p
var lg1=document.querySelectorAll('aside>p')[1]
// 使用密码验证登录的那个锁
var lock1=lg1.querySelector('a')
// 获取手机号登录的那个页面
var ph1=document.querySelector('.phone')
// 获取邮箱登录的那个页面
var ph2=document.querySelector('.phone2')
// 获取使用手机密码登录的那个页面
var ph3=document.querySelector('.phone1')
// 使用密码验证登录的p
var lg2=document.querySelectorAll('aside>p')[2]
// 使用短信验证登录的那个锁
var lock1=lg2.querySelector('a')
// 使用密码登录的那个信封
var lock2=lg1.querySelector('a')
// 获取忘记密码
var forget=document.querySelectorAll('.forget')
// 获取验证码按钮
var secCode=document.querySelector('.mes')
way1[1].onmouseenter=function(){
    way1[1].style.color="red"
}
way1[1].onmouseleave=function(){
    way1[1].style.color="black"
}
// 点击手机号登录出现的样式
way1[0].onclick=function(){
    lg1.style.display="block"
    ph1.style.display="block"
    ph2.style.display="none"
    lg2.style.display="none"
    ph3.style.display="none"
    way1[0].style.color="red"
    way1[1].style.color="black"
    way1[1].onmouseenter=function(){
        way1[1].style.color="red"
    }
    way1[1].onmouseleave=function(){
        way1[1].style.color="black"
    }
    way1[0].onmouseleave=function(){
        way1[1].style.color="red"
    }
}
// 点击邮箱登录出现的样式
way1[1].onclick=function(){
    lg1.style.display="none"
    ph1.style.display="none"
    ph2.style.display="block"
    ph3.style.display="none"
    lg2.style.display="none"
    way1[1].style.color="red"
    way1[0].style.color="black"
    way1[0].onmouseenter=function(){
        way1[0].style.color="red"
    }
    way1[0].onmouseleave=function(){
        way1[0].style.color="black"
    }
    way1[1].onmouseleave=function(){
        way1[1].style.color="red"
    }
}
// 点击使用密码登录出现的样式
lg1.onclick=function(){
    lg1.style.display="none"
    lg2.style.display="block"
    ph1.style.display="none"
    ph2.style.display="none"
    ph3.style.display="block"
}
// 点击使用短信验证码的那个p出现的样式
lg2.onclick=function(){
    lg2.style.display="none"
    lg1.style.display="block"
    ph1.style.display="block"
    ph2.style.display="none"
    ph3.style.display="none"
}
lg1.onmouseenter=function(){
    lg1.style.color="red"
    lock2.style.backgroundPosition="0px -95px"
}
lg1.onmouseleave=function(){
    lg1.style.color=""
    lock2.style.backgroundPosition=""
}
lg2.onmouseenter=function(){
    lg2.style.color="red"
    lock1.style.backgroundPosition="0px -110px"
}
lg2.onmouseleave=function(){
    lg2.style.color=""
    lock1.style.backgroundPosition=""
}
for(let i=0;i<forget.length;i++){
    forget[i].onmouseenter=function(){
        forget[i].style.color="red"
    }
    forget[i].onmouseleave=function(){
        forget[i].style.color=""
    }
}
secCode.onmouseenter=function(){
    secCode.style.color="red"
}
secCode.onmouseleave=function(){
    secCode.style.color=""
}

// 判断密码登录是否正确
var telInp=document.querySelector('.tel')
var psdInp=document.querySelector('.password')
var errInfo=document.querySelector('.hint')

var login1=document.querySelectorAll('.lg')[1]
login1.onclick=function(e){
    e=e||window.event
    e.preventDefault()

    var utel=telInp.value
    var upsd=psdInp.value

    if (!utel || !upsd) {
        alert('请完整填写表单')
        return
      }
      postSend('/xiangmu', function (res) {
        var result = JSON.parse(res)

        if (result.code === 0) {
          alert('您输入的信息有误')
        } else {
          // 登录成功
          setCookie('login', 1, 3000)
          window.location.href = '../pages/index.html'
        }

      }, `tel=${utel}&password=${upsd}`)
}


// 判断邮箱登录是否正确
var mailInp=document.querySelector('.mail')
var passInp=document.querySelector('.pass')
var errInfo=document.querySelector('.hint')

var login2=document.querySelectorAll('.lg')[2]
login2.onclick=function(e){
    e=e||window.event
    e.preventDefault()

    var umail=mailInp.value
    var upass=passInp.value

    if (!umail || !upass) {
        alert('请完整填写表单')
        return
      }
      postSend('/myproject', function (res) {
        var result = JSON.parse(res)

        if (result.code === 0) {
          alert('您输入的信息有误')
        } else {
          // 登录成功
          setCookie('login1', 1, 3000)
          window.location.href = '../pages/index.html'
        }

      }, `mail=${umail}&pass=${upass}`)
}