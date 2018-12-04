window.onload = function () {
    var ostart = document.getElementsByClassName('start')[0];
    var opause = document.getElementsByClassName('pause')[0];
    var play1 = document.getElementById('play1');
    var play2 = document.getElementById('play2');
    var play3 = document.getElementById('play3');
    var play4 = document.getElementById('play4');
    var otime = document.getElementsByClassName('time')[0];
    var ocircle = document.getElementsByClassName('circle')[0];
    var ocontain = document.getElementsByClassName('contain')[0];
    var ocontain2 = document.getElementsByClassName('contain2')[0];
    var wrapper = document.getElementById('wrapper');
    var contr = this.document.getElementsByClassName('contr')[0];
    var foot = this.document.getElementsByClassName('foot')[0];
    var order = document.getElementsByClassName('order')[0];
    var oRandom = document.getElementsByClassName('random')[0];
    var repeating = document.getElementsByClassName('repeating')[0];
    var disL;
    var l;


    oplay = [play1, play2, play3, play4];

    //产生一个随机数介于oplay数组长度之间
    function getRandom(min, max) {
        return parseInt(Math.random() * (max - min + 1)) + min;
    }
    var num = getRandom(0, oplay.length - 1);

    // 点击开始按钮
    ostart.onclick = function () {
        start();
        startshow();

    }
    function startshow() {
        ostart.style.display = "none";
        opause.style.display = "block";
    }

    function pauseshow() {
        ostart.style.display = "block";
        opause.style.display = "none";
    }

    opause.onclick = function () {
        start();
        oplay[num].pause();
        pauseshow();

    }
    function start() {
        oplay[num].play();
        addTime();
        jindu();
        alltime();
    }
    var allTime;

    //获得data-ng-click属性
    var reData = repeating.getAttribute('data-ng-click');
    var orData = order.getAttribute('data-ng-click');
    var radData = oRandom.getAttribute('data-ng-click');
    repeating.onclick = function () {
        reData = 1;
        orData = 0;
        radData = 0;
    }

    order.onclick = function () {
        reData = 0;
        orData = 1;
        radData = 0;

    }

    oRandom.onclick = function () {
        reData = 0;
        orData = 0;
        radData = 1;

    }

    function decide() {
        if (reData == 1) {
            repeat();
        } else {
            if (orData == 1) {
                next();
            } else {
                if (radData == 1) {
                    rand();
                } else {
                    next();
                }

            }

        }
    }

    //当音乐开始播放时，获取当前歌曲的总播放时间
    function alltime() {
        allTime = oplay[num].duration;
        if (allTime / 60 < 10) {
            if (allTime % 60 < 10) {
                allTime = "0" + parseInt(allTime / 60) + ":" + "0" + parseInt(allTime % 60);
            } else {
                allTime = "0" + parseInt(allTime / 60) + ":" + parseInt(allTime % 60);
            }
        } else {
            if (allTime % 60 < 10) {
                allTime = + parseInt(allTime / 60) + ":" + "0" + parseInt(allTime % 60);
            } else {
                allTime = + parseInt(allTime / 60) + ":" + parseInt(allTime % 60);
            }
        }
    }
    var curr = oplay[num].currentTime;

    //歌曲实时播放时间

    var timer2;
    function addTime() {
        timer2 = setInterval(function () {
            var cur = oplay[num].currentTime;
            if (cur / 60 < 10) {
                if (cur % 60 < 10) {
                    cur = "0" + parseInt(cur / 60) + ":" + "0" + Math.ceil(cur % 60);
                } else {
                    cur = "0" + parseInt(cur / 60) + ":" + Math.ceil(cur % 60);
                }
            } else {
                if (cur % 60 < 10) {
                    cur = + parseInt(cur / 60) + ":" + "0" + Math.ceil(cur % 60);
                } else {
                    cur = + parseInt(cur / 60) + ":" + Math.ceil(cur % 60);
                }
            }
            otime.innerHTML = cur + "/" + allTime;

            if (cur == allTime) {
                decide();
            }
        }, 1000)
    }

    // 让圆点可拖拽

    ocircle.onmousedown = function (ev) {
        var oEvent = ev || event;
        disL = oEvent.clientX - ocircle.offsetLeft;
        document.onmousemove = function (ev) {
            var oEvent = ev || event;
            l = oEvent.clientX - disL;
            if (l < ocontain.offsetLeft) {
                l = 0;
            } else if (l > ocontain.offsetWidth - ocircle.offsetWidth) {
                l = ocontain.offsetWidth - ocircle.offsetWidth;
            }
            ocircle.style.left = l + 'px';
            ocontain2.style.width = l + 'px';
            adjust();
        }
        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
        }
        pauseEvent(oEvent);
    }

    //可防止出现drag操作，在区域内可以避免onmouseup丢失
    function pauseEvent(e) {
        if (e.stopPropagation) e.stopPropagation();
        if (e.preventDefault) e.preventDefault();
        e.cancelBubble = true;
        e.returnValue = false;
        return false;
    }
    //拖动或点击时播放时间变化
    var differ = ocontain.offsetWidth - ocircle.offsetWidth;;
    var halfW = ocircle.offsetWidth / 2;
    function adjust() {
        var alltime = oplay[num].duration;
        oplay[num].currentTime = "" + parseInt(((ocircle.offsetLeft + halfW) * alltime) / differ) + "";
        oplay[num].play();
        addTime();
    }

    ocontain.onclick = function (ev) {
        var oEvent = ev || event;
        clickdistance(oEvent);
    }

    ocontain2.onclick = function (ev) {
        var oEvent = ev || event;
        clickdistance(oEvent);
    }

    function clickdistance(ev) {
        var oEvent = ev || event;
        var x = oEvent.clientX - wrapper.offsetLeft - contr.offsetWidth - ocircle.offsetWidth;
        ocircle.style.left = x + "px";
        ocontain2.style.width = x + 'px';
        adjust();
    }

    var timer3;
    function jindu() {
        // var oEvent = ev || event;
        var ss = oplay[num].duration;
        timer3 = setInterval(function () {
            var cur1 = oplay[num].currentTime;
            ocircle.style.left = parseFloat(cur1 / ss) * differ + "px";
            ocontain2.style.width = parseFloat(cur1 / ss) * differ + "px";
        }, 1000)
    }

    var onext = document.getElementsByClassName('next')[0];
    // 点击上一首或下一首之后清除当前播放歌曲的样式
    function clear() {
        clearInterval(timer2);
        clearInterval(timer3);
        oplay[num].pause();
        oplay[num].currentTime = "0";
    }

    // 下一首顺序播放
    function next() {
        clear();
        num += 1;
        if (num > oplay.length - 1) {
            num = 0;
        }
        start();
        startshow();
    }

    //上一首顺序播放

    function front() {
        clear();
        num -= 1;
        if (num < 0) {
            num = oplay.length - 1;
        }
        start();
        startshow();
    }

    //   随机播放
    function rand() {
        clear();
        var hh = getRandom(0,oplay.length - 1);
        function nore(hh){
            if(num != hh){
                return num = hh;
            }else{
                hh = getRandom(0,oplay.length - 1);
                return nore(hh);
            }
        }                   
        nore(hh);
        start();
        startshow();
    }

    //单曲循坏

    function repeat() {
        clear();
        num = num;
        start();
        startshow();

    }

    var ofront = document.getElementsByClassName('front')[0];

    ofront.onclick = function () {
        decide();
    }
    var timer4;
    onext.onclick = function () {
        decide();
    }

    //音量控制
    var ovolume = document.getElementsByClassName('volume')[0];
    var ochange = document.getElementsByClassName('change')[0];
    var maxVol = document.getElementsByClassName('maxVol')[0];
    var circle1 = document.getElementsByClassName('circle1')[0];
    ovolume.onmouseover = function () {
        ochange.style.display = "block";
    }

    ovolume.onmouseout = function () {
        ochange.style.display = "none";
    }

    ochange.onmouseover = function () {
        ochange.style.display = "block";
    }

    ochange.onmouseout = function () {
        ochange.style.display = "none";
    }

    var t;
    var disT;
    var content = document.getElementsByClassName('content')[0];
    var head = document.getElementsByClassName('head')[0];
    // 拖动圆点改变音量
    circle1.onmousedown = function (ev) {
        var oEvent = ev || event;
        disT = oEvent.clientY - circle1.offsetTop;
        document.onmousemove = function (ev) {
            var oEvent = ev || event;
            t = oEvent.clientY - disT - 4;
            if (t < maxVol.offsetTop - circle1.offsetHeight) {
                t = maxVol.offsetTop - circle1.offsetHeight;
            } else if (t > maxVol.offsetHeight + maxVol.offsetTop - circle1.offsetHeight - circle1.offsetHeight) {
                t = maxVol.offsetHeight + maxVol.offsetTop - circle1.offsetHeight - circle1.offsetHeight;
            }
            circle1.style.top = t + 'px';
            changeVolume();
        }
        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
        }
        pauseEvent(oEvent);
    }

    function changeVolume() {
        var rate = circle1.offsetTop / (maxVol.offsetHeight - circle1.offsetHeight);
        oplay[num].volume = 1 - rate;
    }


}


