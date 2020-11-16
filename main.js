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
    j.classList.add('list-group-item');
    let u = document.createTextNode(myLibrary[i].info());
    j.appendChild(u);
    document.getElementById('printing').appendChild(j);
  }
}

let book;

function NewBook(){
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let read = document.getElementById('read').value;
  
  console.log(title);
  book = new Book(title, author, pages, read);
  console.log(book);
  addBookToLibrary(book);
  printLibrary();
}
