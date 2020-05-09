const mojaZmienna = document.querySelector('h1');
mojaZmienna.textContent = 'Hello';
mojaZmienna.onclick = function(){
 alert('Co ty robisz!!!!');
}

let buzka = document.querySelector('img');

buzka.onclick = function klik()
{
  let mySRC = buzka.getAttribute('src');
  if (mySRC === 'images/oczy.jpg'){
	buzka.setAttribute('src','images/buzka.jpg');
}
  else 
	{buzka.setAttribute('src','images/oczy.jpg');
}
}

let myButton = document.querySelector('button');

myButton.onclick= function setUserName(){
	var myName = prompt('Please Enter Your User Name.');
	localStorage.setItem('name', myName);
	mojaZmienna.textContent='witaj: ' + myName;

}

if (!localStorage.getItem('name'))
   {setUserName();}
else	{
   let storedName = localStorage.getItem('name');
   mojaZmienna.textContent = 'witaj: ' + storedName;
}