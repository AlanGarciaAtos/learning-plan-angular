# DOM (Document Object Model)

In a graphical form it looks like a tree of elements/nodes.

### Interacting with the DOM

- Change/Remove HTML elements in the DOM/on the page
- Change & add CSS styles to elements
- Read & change element attributes(href,src,alt, custom)
- Create new HTML elements and insert them into the DOM/the page
- Attach event listeners to elements(click,keypress,submit)

Better naming convention for javascript files (app, main, index)?

### Getting an element

There are some ways to get an element
`document.getElementById`
`document.getElementsByTagName`
`document.getElementsByClassName`
`document.querySelector`
`document.querySelectorAll`

With `querySelectorAll` you **DON'T** need to convert to an array, but with `getElementsByClassName` **do** need to convert it an array

Why?
1- `querySelectorAll` makes a NodeList
2- `getElementsByClassName` makes a HTMLCollection

### Changing text & HTML content

Change the html, although it will only appear the h2 and remove the other content.<br>
If you want to add only an element without removing the content simply add a +

```js
const bookList = document.querySelector('#book-list');
bookList.innerHTML = '<h2>Books and more Books...</h2>';
bookList.innerHTML += '<p>Books and more Books...</p>';
```

Change the text inside the tag or add text depending the operator.

```js
book.textContent = ' Book Title';
book.textContent += ' (book title)';
```

### Nodes

(Types of nodes)[https://i.postimg.cc/7hqbCMH6/types-of-nodes.png]

### DOM event

### Questions

1- Is there some use for `Array.` ?
2- For some it doens't get the elements in js. Once I changed the script in head it solved my issue <sub>(sometimes)<sub>.
