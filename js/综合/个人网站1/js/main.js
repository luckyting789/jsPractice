window.onload = function () {

    //获取各种元素
    var oImg = document.getElementById('Img');
    var one = document.getElementById('one');
    var trees = document.getElementById('trees');
    var firstImg = document.getElementById('firstImg');
    var twoImg = document.getElementById('twoImg');
    var threeImg = document.getElementById('threeImg');
    var fourImg = document.getElementById('fourImg');


    function getStyle(obj, name) {
        if (obj.currentStyle) {
            return obj.currentStyle[name];
        } else {
            return getComputedStyle(obj, false)[name];
        }
    }

    function startMove(obj, json, fn) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var stop = true;
            for (var attr in json) {
                var cur = 0;
                if (attr == 'opacity') {
                    cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
                } else {
                    cur = parseInt(getStyle(obj, attr));
                }
                var speed = (json[attr] - cur) / 8;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                if (cur != json[attr]) {
                    stop = false;
                }
                if (attr == 'opacity') {
                    obj.style.opacity = (cur + speed) / 100;
                } else {
                    obj.style[attr] = cur + speed + 'px';
                }
                if (stop) {
                    clearInterval(obj.timer);
                    if (fn) {
                        fn();
                    }
                }
            }
        }, 30)

    }

    //控制图片right

    firstImg.onclick = function () {
        startMove(firstImg, { right: 600 }, function () { });
        startMove(twoImg, { right: 20 }, function () { });
        startMove(threeImg, { right: -60 }, function () { });
        startMove(fourImg, { right: -140 }, function () { });
        firstImg.style.transform = 'scale(1.3,1.2)';
        twoImg.style.transform = 'scale(1,1)';
        threeImg.style.transform = 'scale(1,1)';
        fourImg.style.transform = 'scale(1,1)';

    }

    twoImg.onclick = function () {
        startMove(twoImg, { right: 600 }, function () { });
        startMove(firstImg, { right: 20 }, function () { });
        startMove(threeImg, { right: -60 }, function () { });
        startMove(fourImg, { right: -140 }, function () { });
        twoImg.style.transform = 'scale(1.3,1.2)';
        firstImg.style.transform = 'scale(1,1)';
        threeImg.style.transform = 'scale(1,1)';
        fourImg.style.transform = 'scale(1,1)';

    }

    threeImg.onclick = function () {
        startMove(threeImg, { right: 600 }, function () { });
        startMove(firstImg, { right: 20 }, function () { });
        startMove(twoImg, { right: -60 }, function () { });
        startMove(fourImg, { right: -140 }, function () { });
        threeImg.style.transform = 'scale(1.3,1.2)';
        firstImg.style.transform = 'scale(1,1)';
        twoImg.style.transform = 'scale(1,1)';
        fourImg.style.transform = 'scale(1,1)';

    }


    fourImg.onclick = function () {
        startMove(fourImg, { right: 600 }, function () { });
        startMove(firstImg, { right: 20 }, function () { });
        startMove(twoImg, { right: -60 }, function () { });
        startMove(threeImg, { right: -140 }, function () { });
        fourImg.style.transform = 'scale(1.3,1.2)';
        firstImg.style.transform = 'scale(1,1)';
        twoImg.style.transform = 'scale(1,1)';
        threeImg.style.transform = 'scale(1,1)';
    }


    var oreturn = document.getElementsByClassName('return')[0];

    oreturn.onclick = function () {
        startMove(firstImg, { right: 100 }, function () { });
        startMove(twoImg, { right: 20 }, function () { });
        startMove(threeImg, { right: -60 }, function () { });
        startMove(fourImg, { right: -140 }, function () { });
        firstImg.style.transform = 'scale(1,1)';
        twoImg.style.transform = 'scale(1,1)';
        threeImg.style.transform = 'scale(1,1)';
        fourImg.style.transform = 'scale(1,1)';
    }

    //二维码显示

    var oQQ = document.getElementsByClassName('QQ')[0];
    var oqqma = document.getElementsByClassName('qqma')[0];
    var oweibo = document.getElementsByClassName('weibo')[0];
    var oweiboma = document.getElementsByClassName('weiboma')[0];
    var ozhihu = document.getElementsByClassName('zhihu')[0];
    var ozhihuma = document.getElementsByClassName('zhihuma')[0];


    oQQ.onmouseover = function () {
        oqqma.style.display = "block";
    }
    oQQ.onmouseout = function () {
        oqqma.style.display = "none";
    }

    oweibo.onmouseover = function () {
        oweiboma.style.display = "block";
    }
    oweibo.onmouseout = function () {
        oweiboma.style.display = "none";
    }

    ozhihu.onmouseover = function () {
        ozhihuma.style.display = "block";
    }
    ozhihu.onmouseout = function () {
        ozhihuma.style.display = "none";
    }





    var obtn = document.getElementsByClassName('obtn')[0];
    var oul = document.getElementsByClassName('btnul')[0];
    var oLi = oul.getElementsByTagName('li');

    var clientHeight = document.documentElement.clientHeight;

    var odawn = document.getElementsByClassName('dawn')[0];
    var onavul = document.getElementsByClassName('navul')[0];
    var onavLi = onavul.getElementsByTagName('li');

    function cycle() {
        for (var j = 0; j < oLi.length; j++) {
            oLi[j].className = "";
        }
        for (var i = 0; i < onavLi.length; i++) {
            onavLi[i].className = "";
        }
    }

var scrollTop = 0;
    //当前滚动条的距离
    window.onscroll = function () {
     scrollTop = document.documentElement.scrollTop + document.body.scrollTop;
        if (scrollTop > 500 && scrollTop <= 1000) {
            cycle();
            oLi[1].className = 'current'
            onavLi[3].className = 'firPage';
        }
        if (scrollTop > 1000 && scrollTop <= 1400) {
            cycle();
            oLi[2].className = 'current';
            onavLi[2].className = 'firPage';

        }

        if (scrollTop > 1400 == scrollTop <= 1800) {
            cycle();
            oLi[3].className = 'current';
            onavLi[1].className = 'firPage';

        }

        if (scrollTop > 1800) {
            cycle();
            oLi[4].className = 'current';
            onavLi[0].className = 'firPage';

        }
        if (scrollTop < 500) {
            cycle();
            oLi[0].className = 'current';
            onavLi[4].className = 'firPage';

        }
    }


    var oRetop = document.getElementsByClassName('retop')[0];
    oRetop.onclick = function(){
        window.scroll(0,0);
        
    }





}