function getSend(url,cb){
    // 创建一个ajax对象
    var xhr=new XMLHttpRequest();
    // 配置本次请求信息
    xhr.open('GET',url)
    // 接收相应信息
    xhr.onload=function(){
        cb(xhr.responseText)
    }
    // 发送请求
    xhr.send()
}

function postSend(url,cb,data){
    var xhr=new XMLHttpRequest()
    xhr.open('POST',url)
    xhr.onload=function(){
        cb(xhr.responseText)
    }
    
    xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
    xhr.send(data)
}