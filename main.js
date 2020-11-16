function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function(){
    return("This book is called " + this.title + " from " + this.author + " and it has " + this.pages + " pages.");
  }
}

let myLibrary = [];
let newBooks = [];

function addBookToLibrary(book){
  myLibrary.push(book)
}

let book1 = new Book('The Hoobit', 'Tolkien', 1000, false);
let book2 = new Book('Diary', 'Tadeu', 100, true);
let book3 = new Book('Some book', 'Some author', 500, false);
let book4 = new Book('Another book', 'Same author', 20, false);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);

function printLibrary(){
  for (let i in myLibrary){
    let j = document.createElement('li');

    let u = document.createElement('span');
    u.innerHTML = myLibrary[i].info();

    let button = document.createElement('button');
    button.classList.add("btn", "btn-danger");
    button.innerHTML = 'Delete';

    j.classList.add('list-group-item');
    j.appendChild(u);
    j.appendChild(button);
    document.getElementById('printing').appendChild(j);
  }
}

function createButton(){

}

let book;

function NewBook(){
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let read = document.getElementById('read').value;
  book = new Book(title, author, pages, read);

  document.getElementById('printing').innerHTML = '';

  addBookToLibrary(book);

  printLibrary();
}

function showForm(){
  document.getElementById('form').classList.remove('d-none');
  document.getElementById('form').classList.add('d-block');
  document.getElementById('hide-button').classList.add('d-block');
  document.getElementById('show-button').classList.add('d-none');
}

function hideForm(){
  document.getElementById('form').classList.remove('d-block');
  document.getElementById('form').classList.add('d-none');
  document.getElementById('hide-button').classList.remove('d-block');
  document.getElementById('show-button').classList.remove('d-none');
}

printLibrary();