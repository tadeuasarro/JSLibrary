function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    return (`This book is called ${this.title} from ${this.author} and it has ${this.pages} pages and${this.convert()}`);
  };

  this.convert = function () {
    if (this.read) {
      return ' this book has been read';
    }

    return ' this book has NOT been read';
  };
}

const myLibrary = [];

function printLibrary() {
  document.getElementById('printing').innerHTML = '';

  for (const i in myLibrary) {
    const j = document.createElement('li');

    const u = document.createElement('p');
    u.innerHTML = myLibrary[i].info();

    // delete button
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-danger');
    button.onclick = function () { deleteBook(i); };
    button.innerHTML = 'Delete';

    // change status button
    const button2 = document.createElement('button');
    button2.classList.add('btn', 'btn-primary', 'ml-2');
    button2.onclick = function () { changeStatus(i); };
    button2.innerHTML = 'Change status';

    j.classList.add('list-group-item');
    j.id = `book${i}`;
    j.appendChild(u);
    j.appendChild(button);
    j.appendChild(button2);
    document.getElementById('printing').appendChild(j);
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function deleteBook(bookId) {
  (myLibrary.splice(bookId, 1));

  printLibrary();
}

function changeStatus(bookId) {
  if (myLibrary[bookId].read) {
    myLibrary[bookId].read = false;
  } else {
    myLibrary[bookId].read = true;
  }

  printLibrary();
}

function NewBook() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;
  const book = new Book(title, author, pages, read);
  addBookToLibrary(book);

  printLibrary();
}

function showForm() {
  document.getElementById('form').classList.remove('d-none');
  document.getElementById('form').classList.add('d-block');
  document.getElementById('hide-button').classList.add('d-block');
  document.getElementById('show-button').classList.add('d-none');
}

function hideForm() {
  document.getElementById('form').classList.remove('d-block');
  document.getElementById('form').classList.add('d-none');
  document.getElementById('hide-button').classList.remove('d-block');
  document.getElementById('show-button').classList.remove('d-none');
}

printLibrary();