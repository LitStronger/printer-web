var currentUrl = window.location.href; //获取当前页面地址
currentUrl = currentUrl.split('/')
currentUrl.pop()
var flag = currentUrl.pop()
var timefly = 10 * 60000; //超时时间 ms
var beginDt = new Date(); //把得到的当前时间放入变量作为初始时间
var gourl = "pages/ad.html"; //需要跳转的地址

if(flag == "pages"){  //判断当前页面位置
    gourl = "ad.html"
}

document.onclick = retime

setInterval("checkTime()", 1000); //每间隔1000毫秒执行checkTime函数检查是否超时

function retime() {
    beginDt = new Date();
}
function checkTime() {
    nowDt = new Date();  //得到当前时间放入变量
    console.log(nowDt - beginDt)
    if ((nowDt - beginDt) > timefly) {
        console.log(gourl)
        window.location = gourl
    }
}
