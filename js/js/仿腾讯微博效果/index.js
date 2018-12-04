window.onload = function () {


    var oP = document.getElementById('face');
    var faceImg = oP.getElementsByTagName('img');
    var num = 0;
    var sendBtn = document.getElementById('sendBtn');
    var oList = document.getElementById('list');
    var oUl = oList.getElementsByTagName('ul')[0];
    var oLi = oList.getElementsByTagName('li');
    var times = document.getElementById('times');
    var oA = document.getElementsByClassName('del');
    var conBox = document.getElementById('conBox');
    var maxNum = document.getElementsByClassName('maxNum')[0];
    var oUserName = document.getElementById('userName');


    //选择不同的头像时

    for (var i = 0; i < faceImg.length; i++) {
        faceImg[i].index = i;
        faceImg[i].onclick = function () {
            num = this.index;
            for (var j = 0; j < faceImg.length; j++) {
                faceImg[j].className = "";
            }
            faceImg[this.index].className = "curImg";
        }

        faceImg[i].onmouseover = function () {
            faceImg[num].className = "curImg";
            for (var j = 0; i < faceImg.length; j++) {
                if (j != num) {
                    faceImg[j].className = "";
                }
            }
            faceImg[this.index].className = "curImg";
        }

        faceImg[i].onmouseout = function () {
            faceImg[num].className = "curImg";
            if (this.index != num) {
                faceImg[this.index].className = "";
            }
        }

    }

    //删除广播

    for (var c = 0; c < oLi.length; c++) {
        oLi[c].index = c;
        oLi[c].onmouseover = function () {
            for (var j = 0; j < oLi.length; j++) {
                oA[j].id = "";
            }
            oA[this.index].id = "cur";
        }
    }

    //时间
    var time;
    function getTime() {
        var date = new Date();
        var month = date.getMonth();
        var days = date.getDate();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        time = change(month + 1) + "月" + change(days) + "日 " + change(hours) + ":" + change(minutes);
        return time;
    }

    function change(num) {
        if (num < 10) {
            num = "0" + num;
        } else {
            num = num;
        }
        return num;
    }

    //字符检测功能

    conBox.onkeyup = function (ev) {
        var value = this.value;
        countCharacters(value);
        if (totalCount - parseInt(totalCount) == 0.5) {
            maxNum.innerHTML = 140 - totalCount - 0.5;
        } else {
            maxNum.innerHTML = 140 - totalCount;
        }
    }

    var totalCount;
    function countCharacters(str) {
        totalCount = 0;
        for (var i = 0; i < str.length; i++) {
            var c = str.charCodeAt(i);
            if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
                totalCount += 0.5;
            } else {
                totalCount += 1;
            }
        }
        return totalCount;
    }
    //ctrl + enter发送消息
    var bCtrlkey = false;

    document.onkeydown = function (ev) {
        var event = ev || window.event;
        bCtrlkey = event.ctrlKey;
        if (bCtrlkey && event.keyCode == 13) {
            start();
        }
    }

    //发送广播

    function send() {
        var oli = document.createElement('li');
        oli.innerHTML = "<div class=\"userPic\"><img src=\"" + oP.getElementsByClassName('curImg')[0].src + "\"></div>\
        <div class=\"content\">\
            <div class=\"userName\"><a href=\"javascript:;\">" + oUserName.value + "</a>:</div>\
           <div class=\"msgInfo\">" + conBox.value.replace(/<[^>]*>|&nbsp;/ig, "") + "</div>\
           <div class=\"times\"><span>" + getTime() + "</span><a class=\"del\" href=\"javascript:;\">\u5220\u9664</a></div>\
        </div>";
        oLi.length ? oUl.insertBefore(oli, oLi[0]) : oUl.appendChild(oli);
    }

    sendBtn.onclick = function () {
        start();
    }

    function start() {
        var nameValue = oUserName.value;
        var reg = /^[\u4E00-\u9FA5\uf900-\ufa2d\w]{2,8}$/;
        if (nameValue == "") {
            alert('请填写你的姓名');
        } else if (!nameValue.match(reg) && nameValue != "") {
            oUserName.onfocus = "onfocus";
            alert('姓名由2到8位数字、字母、汉字和下划线组成');
        } else if (conBox.value == "") {
            alert('说点什么吧');
        } else {
            send();
            oUserName.value = "";
            conBox.value = "";
            totalCount = 0;
            num = 0;
         
            maxNum.innerHTML = 140 - totalCount;
        }
    }

}