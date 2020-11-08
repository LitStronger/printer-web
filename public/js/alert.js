function myAlert(text){
    console.log("111")
    var div=document.createElement("div");
    div.id = 'my_alert'
    div.innerHTML = '<div class="popup__wrapper">' +
        '<div class="popup" >' +
        '<div class="popup__title">提示</div>' +
        '<div class="popup__text">' + text + '</div>' +
        '<div class="popup__btnWrapper">' +
        '<button class="popup__yesBtn popup_button" id="confirm_btn">确定</button>' +
        '</div>' +
        '</div >' +
        '</div >'
    div.onclick = ()=>{
        div.innerHTML = ''
    }
    document.body.appendChild(div);
}