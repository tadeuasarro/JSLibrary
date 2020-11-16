function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;

  this.info = function(){
    console.log("This book is called " + this.title + " from " + this.author + " and it has " + this.pages + " pages.");
  }
}

let book = new Book('The Hoobit', 'Tolkien', 1000, false);

console.log(book.info());