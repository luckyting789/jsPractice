window.onload = function () {
    var ocheckAll = document.getElementsByClassName('check-all'),
        ocheckOne = document.getElementsByClassName('check-one');

    //全选功能
    var i, j;
    for (i = 0; i < ocheckAll.length; i++) {
        ocheckAll[i].index = i;
        ocheckAll[i].onclick = function () {
            for (j = 0; j < ocheckOne.length; j++) {
                ocheckOne[j].checked = ocheckAll[this.index].checked;
                getTotal();
            }
            if (this.index == 1) {
                ocheckAll[0].checked = ocheckAll[this.index].checked;
            } else {
                ocheckAll[1].checked = ocheckAll[this.index].checked;
            }
            isSelect();
        }
    }

    //判断除了全选按钮外的复选框是否被全部选中
    function isSelect() {
        var n = 0;
        for (var i = 0; i < ocheckOne.length; i++) {
            ocheckOne[i].checked && ++n;
        }
        if (n == ocheckOne.length) {
            for (var j = 0; j < ocheckAll.length; j++) {
                ocheckAll[j].checked = true;
            }
        } else {
            for (var j = 0; j < ocheckAll.length; j++) {
                ocheckAll[j].checked = false;
            }
        }
    }

    //给每个复选框添加选中事件
    for (var m = 0; m < ocheckOne.length; m++) {
        ocheckOne[m].onclick = function () {
            isSelect();
            getTotal();
        }
    }


    //默认全部选中

    function select() {
        for (var i = 0; i < ocheckAll.length; i++) {
            ocheckAll[i].checked = true;
        }
        for (j = 0; j < ocheckOne.length; j++) {
            ocheckOne[j].checked = true;
        }

    }

    //增加数量
    var num = 0;
    var oAdd = document.getElementsByClassName('add'),
        oCountInput = document.getElementsByClassName('count-input'),
        oReduce = document.getElementsByClassName('reduce'),
        oSubtotal = document.getElementsByClassName('subtotal'),
        oPrice = document.getElementsByClassName('price');
    var selectedTotal = document.getElementById('selectedTotal');


    for (var i = 0; i < oAdd.length; i++) {
        oAdd[i].index = i;
        oAdd[i].onclick = function () {
            key = true;
            numChange(this.index);
        }
    }

    for (var i = 0; i < oReduce.length; i++) {
        oReduce[i].index = i;
        oReduce[i].onclick = function () {
            key = false;
            numChange(this.index);

        }
    }

    function numChange(a) {
        key ? num = 1 : num = -1;
        oCountInput[a].value = parseInt(oCountInput[a].value) + num;
        oSubtotal[a].innerHTML = (parseFloat(oPrice[a].innerHTML) * oCountInput[a].value).toFixed(2);
        if (oCountInput[a].value > 1) {
            oReduce[a].innerHTML = "-";
        } else {
            oCountInput[a].value = 1;
            oSubtotal[a].innerHTML = oPrice[a].innerHTML;
            oReduce[a].innerHTML = "";
        }
        getTotal();
    }

    //删除

    var oDelete = document.getElementsByClassName('delete'),
        tbody = document.getElementsByTagName('tbody')[0],
        oTr = tbody.getElementsByTagName('tr');

    function del(a) {
        var choose = confirm('确定要删除吗');
        if (choose) tbody.removeChild(oTr[a]);
    }

    for (var x = 0; x < oDelete.length - 1; x++) {
        oDelete[x].index = x;
        oDelete[x].onclick = function () {
            del(this.index);
        }
    }


    //如果当前按钮被选中，则该商品的数量计入总计
    var priceTotal = document.getElementById('priceTotal');
    function getTotal() {
        var select = 0;
        var price = 0;
        for (var i = 0; i < oTr.length; i++) {
            if (ocheckOne[i].checked) {
                select += parseInt(oCountInput[i].value);
                price += parseFloat(oSubtotal[i].innerHTML);
            }
        }
        selectedTotal.innerHTML = select;
        priceTotal.innerHTML = price.toFixed(2);
    }

    //点击最下面的删除按钮时，如果有商品被选中，则弹出确定框，并执行删除函数

    var deleteAll = document.getElementById('deleteAll');
    deleteAll.onclick = function () {
        for (var i = 0; i < oTr.length; i++) {
            if (ocheckOne[i].checked) {
                var conf = confirm('确定要删除吗？')
                if (conf) {
                    tbody.removeChild(oTr[i]);
                    i--;
                    selectedTotal.innerHTML = 0;
                    priceTotal.innerHTML = "0:00";
                }
            }

        }
    }



}