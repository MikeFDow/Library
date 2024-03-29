// new class branch


const container = document.querySelector('.test');

//const content = document.createElement('p');
//content.classList.add('content');
//content.textContent = "THis is the text content!";

//container.appendChild(content);


// Test above

let myLibrary = [];

class Book {

    constructor(title, author, pages, read) {
        this.title = title 
        this.author = author
        this.pages = pages 
        this.read = read 
        this.info = function() {
            return title + ', ' + author + ', ' + pages + ', ' + read;
        }

    }
};



// uses form to add new books
function addBookToLibrary() {
    myLibrary.pop();
    const userBook = new Book(
        document.getElementById("title").value ,
        document.getElementById("author").value ,
        document.getElementById("pages").value ,
        document.getElementById("read").value
    );
    myLibrary.push(userBook);
    
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("read").value = "";
    
    displayBooks();
    
}


/*
function displayBooks() {
    for (const book of myLibrary) {
         // div.textContent = myLibrary(book);
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = book.title + ' ' + book.author ;
        container.appendChild(content);
        console.log(book);
    }
}
*/

function displayBooks() {
    for (const book of myLibrary) {
        const bookContainer = document.createElement('div');
        bookContainer.classList.add('bookContainer');
        container.appendChild(bookContainer);
        const title = document.createElement('div');
        const author = document.createElement('div');
        const pages = document.createElement('div');
        const read = document.createElement('div');
        title.classList.add('content');
        author.classList.add('content');
        pages.classList.add('content');
        read.classList.add('content');
        title.textContent = "Title:" + " " + book.title;
        author.textContent = "Author:" + " " + book.author;
        pages.textContent = "# of pages:" + " " + book.pages;
        read.textContent = book.read;
        bookContainer.appendChild(title);
        bookContainer.appendChild(author);
        bookContainer.appendChild(pages);
        bookContainer.appendChild(read);
        console.log(book);

        const remove = document.createElement('button');
        remove.classList.add('remove-button');
        remove.appendChild(document.createTextNode("Remove"));
        bookContainer.appendChild(remove);
        remove.onclick = function() {
            bookContainer.remove();
        }

        const status = document.createElement('button');
        status.classList.add('read-status');
        status.appendChild(document.createTextNode("Have you read this?"))
        bookContainer.appendChild(status);
        status.onclick = function() {
            switch (read.textContent) {
                case "yes":
                    read.textContent = "no";
                    break;
                case "no":
                    read.textContent = "yes";
            }
            console.log(read.textContent);
        }
    }
}






