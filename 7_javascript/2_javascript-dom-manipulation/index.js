//? Is there any difference using DOMContentLoaded than defer?
document.addEventListener('DOMContentLoaded', () => {
  //* Gettings Elements by ID, ClassName & Tag
  // console.groupCollapsed('Gettings Elements by ID, ClassName & Tag');
  // let pageBanner = document.getElementById('page-banner');
  // let lis = document.getElementsByTagName('li');
  // lis[0]; //Get the first li tag

  // let titles = document.getElementsByClassName('title');
  // console.log(Array.isArray(titles)); //false
  // titles = []; // ✅ Good
  // Array.from(titles); // ❌ 🤮
  // console.log(Array.isArray(titles)); //true
  // titles.forEach((e) => {
  //   console.log(e);
  // });
  // console.groupEnd();

  // const wrap = document.querySelector('#wrapper');
  // console.log(wrap);

  // const wmf = document.querySelector('#book-list li:nth-child(2) .name');
  // console.log(wmf);

  //* Getting elements with querySelector(All), and modifying elements with innerHTML & textContent
  // let books = document.querySelectorAll('#book-list li .name');
  // // ? Why he use Array.from(books).forEach...
  // books.forEach((book) => {
  //   console.log((book.textContent += ' (book title)'));
  // });

  // const bookList = document.querySelector('#book-list');
  // // bookList.innerHTML = '<h2> Books and more books</h2>';
  // bookList.innerHTML += '<p>More content in here...</p>';

  //* See what can you do with nodes
  // const banner = document.querySelector('#page-banner');
  // console.log('#page-banner node type is:', banner.nodeType);
  // console.log('#page-banner node name is:', banner.nodeName);
  // console.log('#page-banner has child nodes:', banner.hasChildNodes());

  // const clonedBanner = banner.cloneNode(true);
  // console.log(clonedBanner);

  //* Selecting the parent nodes/elements and children nodes/elements

  // const bookList = document.querySelector('#book-list');
  // console.log('The parent node is: ', bookList.parentNode);
  // console.log('The parent element is: ', bookList.parentElement.parentElement);

  // console.log(bookList.childNodes);
  // console.log(bookList.children);

  //* Getting the previous siblings and next siblings

  // const bookList = document.querySelector('#book-list');
  // console.log('book-list next sibling is: ', bookList.nextSibling);
  // console.log('book-list next element sibling is: ', bookList.nextElementSibling);

  // console.log('book-list previous sibling is: ', bookList.previousSibling);
  // console.log(
  //   'book-list previous element sibling is: ',
  //   bookList.previousElementSibling
  // );

  // bookList.previousElementSibling.querySelector(
  //   'p'
  // ).innerHTML += `<br>Too cool for everyone else`;

  //* Using DOM events, addEventListener(), event target and making the delete button.
  //This can work, however if we add another 'book', you couldn't use the delete btn. We need event bubbling
  // const btns = document.querySelectorAll('#book-list .delete');

  // btns.forEach((btn) => {
  //   btn.addEventListener('click', (e) => {
  //     const li = e.target.parentElement;
  //     li.parentNode.removeChild(li);
  //   });
  // });

  //delete books - Better way than the above, using a forEach
  const list = document.querySelector('#book-list ul');
  // ? Why we use an span instead of a button
  list.addEventListener('click', (e) => {
    if (e.target.className == 'delete') {
      const li = e.target.parentElement;
      list.removeChild(li);
    } else {
      console.log('Click in the delete button');
    }
  });

  //Prevent event default of an anchor
  const link = document.querySelector('#page-banner a');
  link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Navigation to', e.target.textContent, ' was prevented');
  });

  //add books
  const addForm = document.forms['add-book'];

  addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // ? Is there any other way to get the value?
    const value = addForm.querySelector('input[type="text"]').value;

    //create elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    //add content
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;

    //add classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');
    //* Using className (although they recommend the use of classList). ClassList can remove classes!
    // deleteBtn.className += 'delete';
    // bookName.classList.remove('ugly-color');

    //append to document
    li.appendChild(bookName); //Adding something into the DOM
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });

  //* Using attributes, are more generic, we can changed any attribute
  // const book = document.querySelector('li:first-child .name');
  // // Can also use this
  // // const book = document.querySelector('li:nth-child(1) .name');
  // console.log(book);
  // book.setAttribute('class', 'name-2');
  // book.getAttribute('href');
  // book.removeAttribute('class');
  // book.hasAttribute('href');

  //* Another event listener this are change events
  // hide books
  const hideBox = document.querySelector('#hide');
  hideBox.addEventListener('change', (e) => {
    if (hideBox.checked) {
      list.style.display = 'none';
    } else {
      list.style.display = 'block';
    }
  });

  //*
  //filter books

  const searchBar = document.forms['search-books'].querySelector('input');
  searchBar.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase();
    let books = list.getElementsByTagName('li');
    // ? Making the books HTMLCollection to an array didn't work with the new methodm but the old one works
    books = [...books]; //It works 🥳
    // books = []; Didn't work 😔
    // books = [...li]; Didn't work 😔
    books.forEach((book) => {
      const title = book.firstElementChild.textContent;
      const matches = title.toLowerCase().includes(term);
      if (matches) {
        //title.toLowerCase().indexOf(term) != -1 Not elegant way
        book.style.display = 'block';
      } else {
        book.style.display = 'none';
      }
    });
  });

  //* Using data attribute. In this case is called target, if I want to call it beans it would be data-beans
  //Tabbed content
  const tabs = document.querySelector('.tabs');
  const panels = document.querySelectorAll('.panel');
  tabs.addEventListener('click', (e) => {
    if (e.target.tagName == 'LI') {
      const targetPanel = document.querySelector(e.target.dataset.target);
      panels.forEach((panel) => {
        if (panel == targetPanel) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    }
  });
});
