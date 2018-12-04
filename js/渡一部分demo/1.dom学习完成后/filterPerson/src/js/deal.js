// deal   deal.js
function renderPageByArr (personArr) {
    var htmlAllStr = '';
    personArr.forEach(function (ele, index) {
        htmlAllStr += '<li>' + 'name: ' + ele.name + ',  age: ' + ele.age + ',  sex: ' + ele.sex  + '</li>';
    });
    oUl.innerHTML = htmlAllStr
}

function filterPersonArr(personArr, filterText) {
    return personArr.filter(function (ele, index) {
        return ele.name.indexOf(filterText) != -1;
    });
}

// 正在显示的那些数组;
function mapMinusAgeArr (personArr) {
    return personArr.map(function (ele, index) {
        ele.age--;
        return ele;
    });
}

// 根据性别过滤
function filterSexArr (personArr, sexFilterText) {
    return personArr.filter(function (ele, index) {
        return sexFilterText === 'all' ? true : ele.sex === sexFilterText;
    });
}

