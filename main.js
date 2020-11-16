function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function(){
    return("This book is called " + this.title + " from " + this.author + " and it has " + this.pages + " pages and" + this.convert());
  }

  this.convert = function(){
    if (this.read){
      return ' this book has been read';
    }
    else {
      return ' this book has NOT been read';
    }
  }

}

let myLibrary = [];

function addBookToLibrary(book){
  myLibrary.push(book)
}

function printLibrary(){
  document.getElementById('printing').innerHTML = '';

  for (let i in myLibrary){
    let j = document.createElement('li');

    let u = document.createElement('p');
    u.innerHTML = myLibrary[i].info();

    // delete button
    let button = document.createElement('button');
    button.classList.add("btn", "btn-danger");
    button.onclick = function() {deleteBook(i)};
    button.innerHTML = 'Delete';

    // change status button
    let button2 = document.createElement('button');
    button2.classList.add("btn", "btn-primary","ml-2");
    button2.onclick = function() {changeStatus(i)};
    button2.innerHTML = 'Change status';

    j.classList.add('list-group-item');
    j.id = 'book' + i;
    j.appendChild(u);
    j.appendChild(button);
    j.appendChild(button2);
    document.getElementById('printing').appendChild(j);
  }
}

function changeStatus(book_id){
  if(myLibrary[book_id].read) {
    myLibrary[book_id].read = false;
  }
  else {
    myLibrary[book_id].read = true;
  }

  printLibrary();

}

function deleteBook(book_id){

  (myLibrary.splice(book_id, 1));

  printLibrary();

}

function NewBook(){
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let read = document.getElementById('read').checked;
  book = new Book(title, author, pages, read);
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