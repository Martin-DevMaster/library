const author = document.querySelector('#author');
const title = document.querySelector('#title');
const pages = document.querySelector('#pages');
const form = document.querySelector('.form');
const bookContainer = document.querySelector('.book_container');
const read = document.getElementById('read');
// const button = document.querySelector('.btn');

// const myLibrary = [];
// const savedBooks = [];

// function Book() {
//     this.author = 'Unknown'
//     this.title = 'Unknown'
//     this.pages = 0
//     this.read = 'Unknown'
// }

// function addBookToLibrary() {
//     let book = new Book
//     book.author = author.value
//     book.title = title.value
//     book.pages = pages.value
//     if(readCheck.checked === false) {
//         book.read = 'Not read'
//     } else {
//         book.read = 'Read'
//     }
//     if(savedBooks.length < 6) {
//         myLibrary.push(book);
//             const card = document.createElement('div');
//             const para1 = document.createElement('p');
//             const para3 = document.createElement('p');
//             const para2 = document.createElement('p');
//             const para4 = document.createElement('p');
//             const span1 = document.createElement('span');
//             const span2 = document.createElement('span');
//             const span3 = document.createElement('span');
//             const span4 = document.createElement('span');
//             const removeBtn = document.createElement('button');
//             removeBtn.innerText = 'Remove';
//             para1.innerText = `Author: ` ;
//             para2.innerText = `Title: `;
//             para3.innerText = `Pages: `;
//             para4.innerText = `Read: `;
//             span1.innerText = `${myLibrary[0].author}`;
//             span2.innerText = `${myLibrary[0].title}`;
//             span3.innerText = `${myLibrary[0].pages}`;
//             span4.innerText = `${myLibrary[0].read}`;
//             para1.append(span1);
//             para2.append(span2);
//             para3.append(span3);
//             para4.append(span4);
//             bookContainer.appendChild(card);
//             card.appendChild(para1);
//             card.appendChild(para2);
//             card.appendChild(para3);
//             card.appendChild(para4);
//             card.appendChild(removeBtn);
//             savedBooks.push(myLibrary.shift());
//         }
//     }


// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     addBookToLibrary();
//     form.reset();
// });

// window.addEventListener('click', (e) => {
//     if(e.target.innerText === 'Remove') {
//        let targetBtn = e.target;
//        let parent = targetBtn.parentElement;
//        let currentChild = [];
//        Array.from(parent.childNodes).forEach(item => {
//         if(item.childNodes[1] !== undefined) {
//             currentChild.push(`${item.childNodes[1].innerText}`)
//         }
//        });
//        console
//        return [...savedBooks.map((n, i, arr) => {
//         if(Object.values(n).includes(currentChild[i])) {
//             savedBooks.splice(i, 1)
//             parent.remove()
//         } else {
//             return false
//         }
//        })];
//     };
// });


class Node {
    constructor() {
        this.author = author.value;
        this.title = title.value;
        this.pages = pages.value;
        this.read  = read.checked ? 'Read' : 'Not read';
        this.next = null
    }
}

class Book {
    constructor() {
        this.head = null
        this.size = 0
    }
    isEmpty() {
        return this.size === 0
    }
    isFull() {
        return this.size === 6
    }
    getSize() {
        return this.size
    }
    append() {
        const node = new Node();
        if(!this.isFull()) {
            const card = document.createElement('div');
            const para1 = document.createElement('p');
            const para3 = document.createElement('p');
            const para2 = document.createElement('p');
            const para4 = document.createElement('p');
            const span1 = document.createElement('span');
            const span2 = document.createElement('span');
            const span3 = document.createElement('span');
            const span4 = document.createElement('span');
            const removeBtn = document.createElement('button');
            removeBtn.innerText = 'Remove';
            para1.innerText = `Author: ` ;
            para2.innerText = `Title: `;
            para3.innerText = `Pages: `;
            para4.innerText = `Read: `;
            para1.append(span1);
            para2.append(span2);
            para3.append(span3);
            para4.append(span4);
            bookContainer.appendChild(card);
            card.appendChild(para1);
            card.appendChild(para2);
            card.appendChild(para3);
            card.appendChild(para4);
            card.appendChild(removeBtn);
            
        if(this.isEmpty()) {
            this.head = node
        }  else {
            let curr = this.head;
            while(curr.next) {
                curr = curr.next
            }
            curr.next = node
        }

        span1.innerText = node.author
        span2.innerText = node.title
        span3.innerText = node.pages
        span4.innerText = node.read

          this.size++  
      }
    }
    remove() {
        window.addEventListener('click', (e) => {
            if(e.target.innerText === 'Remove') {
                const span = e.target.parentElement.firstChild;
                e.target.parentElement.remove();
               if(this.head.author === span.lastChild.innerText) {
                    this.head = this.head.next
                    this.size--
                    return span.lastChild.innerText
                } else {
                    let curr = this.head;
                    while(curr.next && curr.next.author !== span.lastChild.innerText) {
                        curr = curr.next
                    }
                    if(curr.next) {
                     let removedNode = curr.next
                     curr.next = removedNode.next
                     this.size--
                     return removedNode
                    }
                    return null
            }
            }
        })
    }
}

const library = new Book();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    library.append();
    library.remove()
    form.reset();
});