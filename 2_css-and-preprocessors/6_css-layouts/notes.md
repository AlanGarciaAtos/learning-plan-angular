# CSS Layouts

Think the idea/layout before coding

We can use max-content, min-content, fit-content(), fr, minmax()

```css
grid-column: 1 / -2;
grid-template-columns: max-content max-content max-content;
grid-template-rows: min-content min-content min-content;
grid-template-columns: fit-content(10em);
grid-template-columns: 1fr 1fr 1fr;
grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
```

### Line based placement

We can even overlap for the positioning

```css
grid-column: 1 / -2;
grid-row: 1 / 3;
```

### Auto placement

```css
grid-auto-flow: dense;
```

### Name lines

```css
grid-template-columns: [main-start col-start] 1fr [col-end] 1fr 1fr 1fr [main-end];
grid-column: main-start / main-end;
```

### Named grid areas (most common)

```css
grid-template-areas:
  'hd hd hd hd'
  'sd bd bd ..'
  'sd ft ft ..';
```

### Generated content layout

We can use grid to even make some components instead of making our layout

(Codepen, you can created some stuff with grid!)[https://codepen.io/Seyfir/pen/WNzxPbx]

# Flexbox

### flex layout

```css
flex-direction: row;
```

With _flex-direction:row-reversed_ they say it's a bit of a red flag, you're inverting the html and accessibility can be a problem

Using _flex_ property can rearrange our elements that we need.

Pretty much grid and flexbox are two helpful ways to layout a webpage, it's note who is better,it's which is easier to make a layout depending the situation.
