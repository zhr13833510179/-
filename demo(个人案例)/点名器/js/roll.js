//初始化名字数据——用数组存储
var names = 
["王明",
"赵紫琪",
"龙小宇",
"吴玉凤",
"王建祥",
"刘文博",
"高彬",
"李钰莹",
"高浩博",
"张明媛",
"王志海",
"王志涛",
"寇树磊",
"张艾青",
"吕琢",
"孙家豪",
"周昕壮",
"王勃文",
"陈威宇"
]

//产生从beg到end的随机数
function produceRandomNumber(beg, end) {
	with(Math) {
		return (beg + floor(random() * (end - beg)));
	}
}

//开关图标切换控制
document.getElementById("btn1").onmouseover=function () {
	document.getElementById("btn1").src="images/play-button.png";
}
document.getElementById("btn1").onmouseout=function () {
	document.getElementById("btn1").src="images/music_play_button.png";
}

document.getElementById("btn2").onmouseover=function () {
	document.getElementById("btn2").src="images/play-button.png";
}
document.getElementById("btn2").onmouseout=function () {
	document.getElementById("btn2").src="images/music_play_button.png";
}

document.getElementById("btn1").onmousedown=function () {
	document.getElementById("disp1").innerHTML = names[produceRandomNumber(0, 8)];
}

//名字滚动及打印功能实现
var count = 0, id = 0;
var control = true;
function rollNamesEx() {
	if(8 == count) {
		count = 0;
	}
	document.getElementById("disp2").innerHTML = names[count++];
}
document.getElementById("btn2").onmousedown=function () {
	if(true == control) {
		id = setInterval("rollNamesEx()", 100);
		control = false;
	}
	else {
		clearInterval(id);
		control = true;
	}
}

//纯属装饰
function SwitchImages() {
	document.getElementById("disp").src = "images/shifu2.png";

}

function SwitchImages2() {
	document.getElementById("disp").src = "images/shifu1.png";
}

document.getElementById("disp").onmouseover=SwitchImages;
document.getElementById("disp").onmouseout=SwitchImages2;

document.getElementById("dispx").onmouseover= function () {
	document.getElementById("dispx").src = "images/wukong2.png";
}
document.getElementById("dispx").onmouseout= function () {
	document.getElementById("dispx").src = "images/wukong1.png";
}

document.getElementById("disp3").onmouseover= function () {
	document.getElementById("disp3").src = "images/bajie2.png";
}
document.getElementById("disp3").onmouseout= function () {
	document.getElementById("disp3").src = "images/bajie1.png";
}

document.getElementById("disp4").onmouseover= function () {
	document.getElementById("disp4").src = "images/shaseng2.png";
}
document.getElementById("disp4").onmouseout= function () {
	document.getElementById("disp4").src = "images/shaseng1.png";
}
