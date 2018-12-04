var sliderDom = document.getElementById("slider");
var liDoms = document.getElementsByTagName("li");
var aDoms = document.getElementsByTagName("a");
var liW = liDoms[0].offsetWidth;
var liH = liDoms[0].offsetHeight;
var key = null;
var index = 0;
var ttop = 0;
var attr = 0;
var mark = true;
document.onmousewheel = function (e) {
	if (mark) {
		mark = false;
		for (var i = 0; i < aDoms.length; i++) {
			aDoms[i].style.background = "#fff";
		}

		k = e.wheelDelta;
		e.preventDefault();
		if (k > 0) {
			var lastChild = sliderDom.lastElementChild;
			liDoms[0].parentNode.insertBefore(lastChild, liDoms[0]);
			sliderDom.style.transition = "none";
			sliderDom.style.top = -1 * liH + "px";
			setTimeout(function () {
				sliderDom.style.transition = "all 0.8s ease";
				sliderDom.style.top = 0;
			}, 10);
			attr = liDoms[0].innerHTML * 1;

		} else {
			console.log(k);
			sliderDom.style.transition = "all 0.8s ease";
			sliderDom.style.top = -1 * liH + 'px';
			setTimeout(function () {
				sliderDom.appendChild(sliderDom.firstElementChild);
				sliderDom.style.transition = "none";
				sliderDom.style.top = 0;
			}, 800);
			attr = liDoms[0].innerHTML * 1 + 1;
		}
		if (attr == 4) {
			attr = 0;
		}
		aDoms[attr].style.background = "#111";
		setTimeout(function () {
			mark = true;
		}, 800);
	}

}