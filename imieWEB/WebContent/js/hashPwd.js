function hashPwd(){
	var pass = document.forms[0].elements['pwdInput'].value;
	pass = Sha256.hash(pass);
	console.log(pass);
	document.forms[0].elements['pwdInput'].value = pass;
}