# SASS

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

## Variables

Using the dollar sign

```scss
$primary-color: #333;
```

## Maps
