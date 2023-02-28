
// 點選menu按鈕手機版本小調整
// 點選menu, 文字消失
let menu2 = document.getElementById('menu');
let nav = document.getElementsByClassName('nav')[0];
let menuWord = document.getElementsByClassName('menu-word')[0];
menu2.addEventListener('click', function(){
	nav.classList.toggle('bottom0');
	menuWord.classList.toggle('close');
})


// navigation
let navInner = document.getElementsByClassName('nav-inner')[0];
let menu = document.getElementById('menu');

menu.addEventListener('click', function(){
	navInner.classList.toggle("open");
	menu.classList.toggle("menu-close");
})