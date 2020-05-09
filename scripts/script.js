var list = document.createElement('ul');
var info = document.createElement('p');
var ol = document.querySelector('ol');

info.textContent = 'Lista Dynamiczna. Kliknij na puste pole aby dodać element. Kliknij na istniejący tekst na liście aby go zmienić.';

document.body.appendChild(info);
document.body.appendChild(list);

list.onclick = function() {
  var listItem = document.createElement('li');
  var listContent = prompt('Co chcesz aby było wpisane na liście?');
  listItem.textContent = listContent;
  list.appendChild(listItem);

  listItem.onclick = function(e) {
    e.stopPropagation();
    var listContent = prompt('Wpisz nową zawartość, która będzie wyświetlana na liście');
    this.textContent = listContent;
  }
}