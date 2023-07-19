const BookGrid = document.getElementById('books_grid')

let myLibrary = [];

class Book {
  constructor(
    title = 'none',
    author = 'none',
    pages = '0',
  ) {
    this.title = title
    this.author = author
    this.pages = pages
  }
}

/*
  <div class="book_item">
    <h3>Title</h3>
    <h4>Author</h4>
    <h4>Number of pages</h4>
    <button class="remove_book">Remove book</button>
  </div>
*/

//Open and close form
const Form = document.getElementById("addBookForm");
const Form_OpenButton = document.getElementById("openFormButton");
const Form_CloseButton = document.getElementsByClassName("close")[0];

Form_OpenButton.onclick = function() {
  Form.style.display = "block";
}
Form_CloseButton.onclick = function() {
  Form.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == Form) {
    Form.style.display = "none";
  }
}


const getBookFromInput = () => {
  const title = document.getElementById('title').value
  const author = document.getElementById('author').value
  const pages = document.getElementById('pages').value
  
 
  return new Book(title, author, pages)
}


const updateBooksGrid = () => {
  resetBooksGrid()
  for (let i=0;i< myLibrary.length;i++) {
    createBookItem(myLibrary[i])
    console.log(myLibrary[i])
  }
}

const resetBooksGrid = () => {
  BookGrid.innerHTML = ''
}

const addBook = (e) => {
  
  e.preventDefault()
  const newBook = getBookFromInput()
  if (document.getElementById('pages').value.length == 0) {
    document.getElementById('pages').style.borderColor = "red"
    console.log("34")
    return 0;
  }
  else{
  
  Form.style.display = "none";
  myLibrary.push(newBook);
  
  updateBooksGrid()}
}

Form.onsubmit = addBook



const removeBook = (bo) => {
  myLibrary = myLibrary.filter(function(el) { return el.title != bo.title;})
  resetBooksGrid()
}

const createBookItem = (book) => {
  const BookItem = document.createElement('div')
  const Title = document.createElement('h3')
  const Author = document.createElement('h4')
  const pages = document.createElement('h4')
  const removeButton = document.createElement('button')

  BookItem.classList.add('book_item')
  removeButton.classList.add('remove_book')
  removeButton.onclick = removeBook

  Title.textContent = `"${book.title}"`
  Author.textContent = book.author
  pages.textContent = `${book.pages} pages`
  removeButton.textContent = 'Remove'

  BookItem.appendChild(Title)
  BookItem.appendChild(Author)
  BookItem.appendChild(pages)
  BookItem.appendChild(removeButton)
  BookGrid.appendChild(BookItem)
}