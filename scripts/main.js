const mojaZmienna = document.querySelector('h1');
mojaZmienna.textContent = 'Hello Brat';
mojaZmienna.onclick = function(){
 alert('Co ty robisz!!!!');
}

let buzka = document.querySelector('img');

buzka.onclick = function klik()
{
  let mySRC = buzka.getAttribute('src');
  if (mySRC === 'images/dog.jpg'){
	buzka.setAttribute('src','images/buzka.jpg');
}
  else 
	{buzka.setAttribute('src','images/dog.jpg');
}
}

let myButton = document.querySelector('button');

myButton.onclick= function setUserName(){
	var myName = prompt('Please Enter Your User Name.');
	localStorage.setItem('name', myName);
	mojaZmienna.textContent='Zalogowany Nowy User: ' + myName;

}

if (!localStorage.getItem('name'))
   {setUserName();}
else	{
   let storedName = localStorage.getItem('name');
   mojaZmienna.textContent = 'Zalogowany User: ' + storedName;
}