# SEMANTIC HTML & ARIA (Accessibility HTML)

## Semantical Introduction

**Button:** specify an action

**Anchor:** links specify a change in a location

Sometimes an **anchor** can **simulate** to be a **button**.

![Imagen](https://i.postimg.cc/mkjZBvqR/Untitled.png)

Most of webpages you can **TAB** and **ENTER** to navigate through the entire place like a vim pro user 😎.

Click link to open the code

[https://codepen.io/Seyfir/pen/abYNdvV](https://codepen.io/Seyfir/pen/abYNdvV)

## ARIA ROLES

**Landmark roles:** Main header and footer. Don’t overused this tags, having multiples nav could harm your webpage.

Describing the content of the tag section.

```html
<section role="contentinfo" />
```

Identify which are the primary and seconday

```html
<nav aria-label="primary" />
```

### Document structure

You can use `role=”nav”` & `“form”`. That’s not necessary we have proper tags

**Widget:** describe interactive roles which lacks semantic ( _div_ ).

**Window:** your typical pop-ups (_dialog_ & _alertdialog_)

**Live region:** set to _assertive_, _polite_ and _off_ states. When we use JS to change the webpage without reloading the website.

This will help the people who need accessibility in the website. Using aria-labels correctly facilitates the navigation.

Semantic describes its meaning to both the browser and developer.

1. Describes the version of the HTML, this one is HTML5
2. Determines the language of our website. (es = spanish, en = english)
3. Accepts certain characters like accents, ñ and even emotes 👁👄👁
4. Tells the browser to use the latest version of IE
5. Tells the browser to always make the website the size of the device (make it “responsive”)
6. Help the SEO and when they find the website it will observe the description
7. Robots the help us to follow my index and to be visible

```html
1 <!DOCTYPE html> 2
<html lang="en">
  <head>
    3
    <meta charset="UTF-8" />
    4
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    5
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    6
    <meta name="description" content="Esta pagina te mostrara fotos de gatos" />
    7
    <meta name="robots" content="index,follow" />
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
  </head>
</html>
```

### More meta tags

Shows the author name, and in which language is the name of the author

```html
<meta name="Author" lang="es" content="Alan Garcia" />
```

Shows the what topics you’re showing in the webpage. They said this method show no benefit for the SEO at least for google but in the other hand bing they didn’t say anything. They disregard (since 2009) this meta tag because you can spam a ton of words like you’re using # in instagram.

```html
<meta name="keywords" content="HTML, CSS, Javascript, PHP" />
```

Show a description about your website

```html
<meta
  name="description"
  content="Aprende Nuevas Tecnologias como: HTML, CSS, JS, SASS"
/>
```

Show the copyright of who made this webpage (You can add your website)

```html
<meta name="copyright" content="Copyright alanseyfir.com" />
```

Refresh the website in certain time

```html
<meta http-equiv="refresh" content="10" />
```

Refresh the website in certain time and travel to the designated website

```html
<meta http-equiv="refresh" content="5;url=https://www.github.com" />
```
