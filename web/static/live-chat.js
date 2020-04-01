function add_chatinline(){
  var hccid=89257005;
  var nt=document.createElement("script");
  nt.async=true;
  nt.src="https://mylivechat.com/chatinline.aspx?hccid="+hccid;
  var ct=document.getElementsByTagName("script")[0];
  ct.parentNode.insertBefore(nt,ct);
}
add_chatinline();

window.onload = function(){
  var leaveMessage = document.getElementsByClassName('mylivechat_buttonround_label')[0];
  leaveMessage.innerText = 'Message';
}
