/**
 * Created by huangxiong on 15/11/1.
 */

document.write("<h1>This is a heading</h1>");
document.write("<p>This is a paragraph</p>");


var  request;
function myfuction() {

    request = new XMLHttpRequest();
    //http:192.168.0.101:88888
    request.open("GET", "http:www.baidu.com");

    $.get("http:www.baidu.com");
    request.onreadystatechange = callBack();
    request.send();

}

function callBack() {

    alert(request.responseText);
    if (request.readyState == 4) {
        if(request.state == 200) {
            alert("你他妈是傻逼");
        }
    } else {

    }
}