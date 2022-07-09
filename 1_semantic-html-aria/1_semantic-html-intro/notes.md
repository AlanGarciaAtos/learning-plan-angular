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
