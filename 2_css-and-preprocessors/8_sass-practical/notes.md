# SASS

(Documentation)[https://sass-lang.com/documentation/]

### TODO LIST

- How to structure folder of sass
- Is it bad to nest a lot or what is the limit
- transition: 1s ease-out; works but no transition: all 0.2 ease-in-out;

### Configuration in settings.json for sass

Although I don't why we would use it.

```json
"liveSassCompile.settings.formats": [
        //This is default
        {
            "format": "expanded",
            "extensionName": ".css",
            "savePath": null
        },
        //You can add more
        {
            "format": "compressed",
            "extensionName": ".min.css",
            "savePath": "/dist/css"
        },
        //More complex
        {
            "format": "compressed",
            "extensionName": ".min.css",
            "savePath": "~/../css/"
        }
    ]
```

## Importing

They say it's better to use @use & @forward instead of @import.

We can simply add a comma. @import resets, variables;

## Variables

Using the dollar sign

```scss
$primary-color: #333;
```

## Maps

It's like an array and we can use it to have multiple values

```scss
$font-weight: (
  'regular': 400,
  'medium': 500,
  'bold': 700,
);
font-weight: map-get($font-weight, bold);
```

## Nesting

We can nest tags instead making the typical "nesting" in CSS.

However we need to make use of interpolation using _#{&}_ and the class name.

```scss
.main {
  width: 88%;
  margin: 0 auto;

  #{&}__paragraph {
    font-weight: map-get($font-weight, bold);

    &:hover {
      color: pink;
    }
  }
}
```

## Partials

Contain little snippets of CSS that you can include in other Sass files.

- Great way to modularize css
- Easier to maintain

Naming convention for partials are with undercore and the word.

> Ex: \_partials.scss, \_resets.scss

## Functions

Pretty much like any other language, instead of repeating the same property. We can simply use a function.

> Functions return values and to computed values

```scss
@function weight($weight-name) {
  @return map-get($font-weight, $weight-name);
}
font-weight: weight(bold); //This is CSS
```

## Mixins

Similar to functions, we can even add parameters

> Don't get confuse with functions. Mixins _should define styles_

Mixin, when you don't have to repeat a lot the same properties

```scss
@mixin flexCenter($direction) {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: $direction;
}
```

Mixin when you can use if statements. In this case chossing a dark & light theme

```scss
@mixin theme($light-theme: true) {
  @if $light-theme {
    background: lighten($primary-color, 100%);
    color: darken($text-color, 100%);
  }
}

.light {
  //Don't need to add $light-theme only true but with this it make it identifiable
  @include theme($light-theme: true);
}
```

We can also add mixins with media queries

```scss
@mixin mobile {
  @media (max-width: $mobile) {
    @content;
  }
}

//This is inside a container ⏬
@include mobile {
  flex-direction: column;
}
```

## Extensions

When you have a class which you want to edit however, you only want to add one property but you need to copy again the parent style.

```scss
.main {
  #{&}__paragraph1 {
    color: #333;
  }

  #{&}__paragraph2 {
    @extend .main__paragraph1
    border: 2px solid #900;
  }
}
```

## Math Operations

Like in css we can use math operations. However, we don't need the keyword _calc_. Like a normal mathematical operation

```scss
.main {
  width: 80% - 40%; //Correct ✅
}

.main {
  width: 80% - 200px; //Incorrect ❌
}
```

> Note: We can mix different types
