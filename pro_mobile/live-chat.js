function add_chatinline() {
	var hccid = 89257005;
	var nt = document.createElement("script");
	nt.async = true;
	nt.src = "https://mylivechat.com/chatinline.aspx?hccid=" + hccid;
	var ct = document.getElementsByTagName("script")[0];
	ct.parentNode.insertBefore(nt, ct);
}
add_chatinline();

window.onload = function() {
	var leaveMessage = document.getElementsByClassName('mylivechat_buttonround_label')[0];
	leaveMessage.innerText = 'Message';
	
	leaveMessage.οncοntextmenu=new Function("event.returnValue=false"); 
	leaveMessage.onselectstart=new Function("event.returnValue=false"); 

	// var char = document.getElementsByClassName('mylivechat_inline')[0];
	// var posX = '',
	// 	posY = '',
	// 	more = null,
	// 	ifMove = false;
	// char.ontouchstart = function(e) {
	// 	ifMove = false;

	// 	var Left = char.offsetLeft;
	// 	var Top = char.offsetTop;
	// 	var e = window.event ? window.event : e;
	// 	var oLeft = e.targetTouches[0].clientX - Left;
	// 	var oTop = e.targetTouches[0].clientY - Top;

	// 	move = char.addEventListener('touchmove', function(e) {
	// 		ifMove = true;
	// 		var e = window.event ? window.event : e;
	// 		var clientX = e.targetTouches[0].clientX;
	// 		var clientY = e.targetTouches[0].clientY;
	// 		char.style.marginLeft = posX = clientX - oLeft + 'px';
	// 		char.style.marginTop = posY = clientY - oTop + 'px';
	// 	}, false);
	// }

	// char.addEventListener('click', function(e) {
	// 	more = null;
	// 	if (ifMove == false) {
	// 		char.style.marginLeft = 0;
	// 		char.style.marginTop = 0;
	// 	}
	// }, false);

	// var mylivechat_sprite = document.getElementsByClassName('mylivechat_sprite')[1];
	// mylivechat_sprite.addEventListener('click', function(e) {
	// 	setTimeout(function(){
	// 		if (posX == '') {
	// 			char.style.marginLeft = 200+ 'px';
	// 			char.style.marginTop = '400px';
	// 		}else{
	// 			char.style.marginLeft = posX;
	// 			char.style.marginTop = posY;
	// 		}
	// 	},0)

	// },true)

}
