function getStyle(obj,attr){
    if(window.getComputedStyle){
        return getComputedStyle(obj,false)[attr]
    }else{
        return obj.currentStyle[attr]
    }
}
function move(obj,json,fn){
    clearInterval(obj.timer)
    obj.timer = setInterval(function(){
        var start
        for(let attr in json){
            if(attr === 'opacity'){
                start=parseFloat(getStyle(obj,attr)*100)
            }else{
                start =parseInt(getStyle(obj,attr))
            }
            var speed = (json[attr]-start)/6
            speed = speed < 0 ? Math.floor(speed):Math.ceil(speed)
            if(attr === 'opacity'){
                obj.style[attr]=(start+speed)/100
            }else{
                obj.style[attr]=(start+speed)+'px'
            }
            if(json[attr]=== start){
                fn&&fn()
                clearInterval(obj.timer)
            }
        }
    },16)
}