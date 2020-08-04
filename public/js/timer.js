var currentUrl = window.location.href;            //获取当前页面地址
var flag =  currentUrl.split('/').pop()
var timefly = 5000;         //超时时间
var beginDt = new Date();        //把得到的当前时间放入变量作为初始时间
var gourl = "/pages/ad.html";        //需要跳转的地址
    // document.onmousemove = retime;        //当鼠标移动时的时间
    // document.onkeypress = retime;        //当鼠标点击重新获取当前时间放入变量作为初始时间
    document.onclick = retime
    //判断当前页面是否为跳转页面

        console.log(flag)
        setInterval("checkTime()",1000);        //每间隔1000毫秒执行checkTime函数检查是否超时

    function retime(){
       beginDt = new Date();
    }
    function checkTime(){
        nowDt = new Date();        //得到当前时间放入变量
        console.log(nowDt - beginDt)
        if((nowDt - beginDt) > timefly){
            location.href = gourl;     //如果当前时间减去初始时间大于超时时间，就执行自动跳转
        }
    }
