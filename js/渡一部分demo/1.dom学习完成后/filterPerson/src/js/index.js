var allPersonArr = [
    {name: '邓旭明', age: 55, sex: 'male', email: '111@163.com'},
    {name: '很老邓', age: 75, sex: 'male',email: '222@163.com'}, 
    {name: '邓嫂子', age: 20, sex: 'female', email: '777@163.com'}, 
    {name: '刘朝旭', age: 20, sex: 'male',email: '333@163.com'}, 
    {name: '王朝君', age: 20, sex: 'female', email: '222@163.com'}, 
    {name: '刘德华', age: 50, sex: 'male', email: '666@163.com'},
    {name: '马德华', age: 55, sex: 'male',email: '333@163.com'}, 
    {name: '罗子君', age: 35, sex: 'female', email: '222@163.com'}, 
    {name: '罗大佑', age: 55, sex: 'male', email: '666@163.com'}
];
var currentPersonArr = allPersonArr;
var lastFilterSex = 'all';



//初始化
renderPageByArr(allPersonArr);



// bindEventByAction 
function bindEventByAction (actionArray) {
    actionArray.forEach(function (ele, index) {
        var actor = ele.leadingActor;
        switch(ele.type) {
            case 'INPUT':
                    actor.oninput = function () {
                        renderPageByArr(
                            currentPersonArr =  filterPersonArr(allPersonArr,  this.value)
                        )
                    };
                break;
            case 'MINUS':
                    actor.onclick = function () {
                        renderPageByArr(
                            mapMinusAgeArr(
                                filterSexArr(currentPersonArr, lastFilterSex)
                            )
                        )
                    }   
                break;
            case 'SEX':
                    actor.onclick = function () {
                        renderPageByArr(
                            filterSexArr(currentPersonArr, lastFilterSex = ele.prama)
                        )
                    }
                break;
        }
    });
}

bindEventByAction(actionArr);

























// inp.oninput = function () {
//     renderPageByArr( 
//         currentPersonArr = filterPersonArr(allPersonArr, this.value) 
//     );                      
// }
// btn.onclick = function () {
//     renderPageByArr( 
//         mapMinusAgeArr( 
//             filterSexArr(currentPersonArr, lastFilterSex) 
//         ) 
//     );
// }











// onlyManBtn.onclick = function () {
//     renderPageByArr(
//         filterSexArr( currentPersonArr, lastFilterSex = 'male')
//     );
// }
// onlyWomanBtn.onclick = function () {
//     renderPageByArr(
//         filterSexArr( currentPersonArr, lastFilterSex = 'female')
//     );
// }

// showAllBtn.onclick = function () {
//    renderPageByArr(
//         filterSexArr( currentPersonArr, lastFilterSex = 'all')
//    );
// }



// var actionArr = [
//     {id: inp, type: 'INPUT'}, 
//     {id: btn, type: 'MINIUS'}, 
//     {id: onlyManBtn, type: 'CLICK', param: 'male'}, 
//     {id: onlyWomanBtn, type: 'CLICK',  param: 'female'}, 
//     {id: showAllBtn, type: 'CLICK', param: 'all'}
// ];


// function bindEventByAction (actionArray) {
//     actionArray.forEach(function (ele, index) {
//         switch(ele.type) {
//             case 'INPUT':
//                     ele.id.oninput = function () {
//                         renderPageByArr( 
//                             currentPersonArr = filterPersonArr(allPersonArr, this.value) 
//                         ); 
//                     }                     
//                 break;
//             case 'MINIUS':
//                     ele.id.onclick = function () {
//                         renderPageByArr( 
//                             mapMinusAgeArr( filterSexArr(currentPersonArr , lastFilterText) ) 
//                         );
//                     }
//                 break;
//             case 'CLICK':
//                     ele.id.onclick = function () {
//                         renderPageByArr(
//                             filterSexArr(currentPersonArr, lastFilterText = ele.param)
//                         ); 
//                     }  
//                 break;
//         }
//     });
// }

// bindEventByAction(actionArr); 


// inp.oninput = function () {
//     renderPageByArr( 
//         currentPersonArr = filterPersonArr(allPersonArr, this.value) 
//     );                      
// }

// btn.onclick = function () {
//     renderPageByArr( 
//         mapMinusAgeArr( filterSexArr(currentPersonArr , lastFilterText) ) 
//     );
// }

// onlyManBtn.onclick = function () {
//     renderPageByArr(
//         filterSexArr(currentPersonArr, lastFilterText = 'male')
//     )
// }

// onlyWomanBtn.onclick = function () {
//     renderPageByArr(
//         filterSexArr(currentPersonArr, lastFilterText = 'female')
//     )
// }
// showAllBtn.onclick = function () {
//     renderPageByArr(
//         filterSexArr(currentPersonArr, lastFilterText = 'all')
//     )           
// }







// var cookie = {};

// var cookieStr = 'key1=value1; key2=value2; key3=value3';
// // ['key1=value1', ,]
// var cookieArr = cookieStr.split('; ');

// cookieArr.reduce(function (pram, ele, index) {
//     var keyValueArr = ele.split('=')
//     pram[ keyValueArr[0] ] = keyValueArr[1];
//     return pram;
// }, cookie);

// console.log(cookie);


// var str = '邓旭明';
// console.log( str.indexOf('邓明') );


// inp.oninput = function () {
//     console.log(this.value);
// }


// oUl.innerHTML = '<li>' + '<span></span>' + '</li>';