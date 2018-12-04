window.onload = function () {

    var checkAll = this.document.getElementsByClassName('check-all'),
        checkOne = document.getElementsByClassName('check-one'),
        oSubtotal = document.getElementsByClassName('subtotal'),
        selectedTotal = document.getElementById('selectedTotal'),
        oCountInput = document.getElementsByClassName('count-input'),
        priceTotal = document.getElementById('priceTotal'),
        oAdd = document.getElementsByClassName('add'),
        oReduce = document.getElementsByClassName('reduce'),
        tbody = document.getElementsByTagName('tbody')[0],
        oTr = tbody.getElementsByTagName('tr'),
        oPrice = document.getElementsByClassName('price'),
        oDelete = document.getElementsByClassName('delete'),
        oDeleteAll = document.getElementById('deleteAll');


    //全选
    for (var j = 0; j < checkAll.length; j++) {
        checkAll[j].index = j;
        checkAll[j].onclick = function () {
            for (var i = 0; i < checkOne.length; i++) {
                checkOne[i].checked = this.checked;
            }
            if (this.index != 1) {
                checkAll[1].checked = this.checked;
            } else {
                checkAll[0].checked = this.checked;
            }
            isSelect();
            getTotal();
        }
    }

    function isSelect() {
        var n = 0;
        for (var i = 0; i < checkOne.length; i++) {
            checkOne[i].checked && ++n;
        }
        if (n == checkOne.length) {
            for (var j = 0; j < checkAll.length; j++) {
                checkAll[j].checked = true;
            }
        } else {
            for (var j = 0; j < checkAll.length; j++) {
                checkAll[j].checked = false;
            }
        }
    }

    for (var l = 0; l < checkOne.length; l++) {
        checkOne[l].onclick = function () {
            isSelect();
            getTotal();
        }
    }

    // 计数


    function getTotal() {
        var select = 0;
        var price = 0;
        for (var i = 0; i < checkOne.length; i++) {
            if (checkOne[i].checked) {
                select += parseInt(oCountInput[i].value);
                price += parseFloat(oSubtotal[i].innerHTML);
            }
        }
        selectedTotal.innerHTML = select;
        priceTotal.innerHTML = price.toFixed(2);
    }

    // 增加减少数量

    for (var m = 0; m < oTr.length; m++) {
        oAdd[m].index = m;
        oReduce[m].index = m;
        oDelete[m].index = m;
        //增加按钮
        oAdd[m].onclick = function () {
            key = true;
            changeNum(this.index);
            getTotal();
        }
        //减少按钮
        oReduce[m].onclick = function () {
            key = false;
            changeNum(this.index);
            getTotal();
        }

        //每行删除
        oDelete[m].onclick = function () {
            var conf = confirm('确定要删除吗');
            if (conf) {
                tbody.removeChild(oTr[this.index]);
            }
        }
    }

    function changeNum(a) {
        var value = parseInt(oCountInput[a].value);
        var price = parseFloat(oPrice[a].innerHTML);
        key ? value++ : value--;
        if (value <= 1) {
            value = 1;
        }
        oSubtotal[a].innerHTML = (price * value).toFixed(2);
        oCountInput[a].value = value;
        oReduce[a].innerHTML = value > 1 ? "-" : "";
    }

    //删除选中行

    oDeleteAll.onclick = function () {
        var conf = confirm('确定要删除吗？');
        for (var i = 0; i < checkOne.length; i++) {
            if (checkOne[i].checked) {
                if (conf) {
                    tbody.removeChild(oTr[i]);
                    i--;
                }
            }
        }
    }

    // 输入数量
    for (var x = 0; x < oTr.length; x++) {
        oCountInput[x].index = x;
        oSubtotal[x].index = x;
        oCountInput[x].onkeyup = function () {
            var w = parseInt(oCountInput[this.index].value);
            var price = parseFloat(oPrice[this.index].innerHTML);
            oCountInput[this.index].value = w;
            oSubtotal[this.index].innerHTML = (w * price).toFixed(2);
            getTotal();

        }
    }



}