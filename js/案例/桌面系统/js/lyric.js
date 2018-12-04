/*
*@author 弗兰纳忠
*@version 1.0
*discript:
*    you should create some elements to finish this project as fallowing:
*		1.create textarea to cantain all lyrics like this:
*			[]
*			[00:00.33]在建安费
*			[00:03.06]按时发发发
*			[00:20.05]阿尔法法规果然是个人工
*		2.the id you cantain all lyrics(ul) --- div
*		3.the id you cantain all list(li) --- ul
*		4.the audio element'id
*		5.the color what you want when lyric selected
*	that's all;
*
*/	
function domName(id){
	return document.getElementById(id);
}
function lyric(lyric_ID,lyric_box_ID,liric_list_ID,audio_ID,selectColor){
		var lyric_boxDom = domName(lyric_box_ID);
		var lyricDom = domName(lyric_ID);
		var lyric_listDom = domName(liric_list_ID);
		var audioDom = domName(audio_ID);
		var lyric = lyricDom.value;
		var html1 = null,html2 = null;
		var arr1 = lyric.split("\n"),arr2 = [],arr2_left = [],arr2_right = [];
		for (var i = 1;i<arr1.length;i++ ){
			arr2_left.push(arr1[i].split("]")[0]);
			arr2_right.push(arr1[i].split("]")[1]);
			
		};
		var arr2_left_left = [];
		for (var i = 0;i<arr2_left.length ;i++ ){
			arr2_left_left.push(arr2_left[i].split("[")[1]);
		
		};
		var arr_min = [],arr_sec = [],arr_total = [];
		for(var j=0;j<arr2_left_left.length - 1;j++){
			arr_min.push(arr2_left_left[j].split(":")[0]);
			arr_sec.push(arr2_left_left[j].split(":")[1]);
			arr_total.push(arr_min[j]*60 + arr_sec[j]*1);
		}
		lyric_listDom.style.top = (lyric_boxDom.clientHeight / 2)+"px";
		var currenttime = null;
		audioDom.ontimeupdate = function(){
			currenttime = audioDom.currentTime;
			var s = lyric_listDom.children;
			for(var i = 0;i<s.length;i++){
				if(s[i].id <= currenttime){
					s[i].style.color = selectColor?selectColor:"red";
					s[i].style.fontSize = "26px";
					lyric_listDom.style.top = (lyric_boxDom.clientHeight / 2)-i*25+"px";
					if(s[i-1]){
						s[i-1].style.color = "#fff";
						s[i-1].style.fontSize = "18px";
					}
				}
				
			}
			if(currenttime >= s[s.length-1].id){
					s[s.length-1].style.fontSize = "18px";
					s[s.length-1].style.color = "#fff";
				};

		}
		for (var i = 0;i<arr_total.length;i++){
			lyric_listDom.innerHTML += "<li id="+arr_total[i]+" style='height:36px line-height:36px;letter-spacing:1px;margin:0px'>"+arr2_right[i]+"</li>";
		};

};