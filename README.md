# Ferro.js README

Ferro.js is a lightweight JavaScript library designed to add interactive animations and effects to your web elements using GSAP (GreenSock Animation Platform). It offers various functions to apply effects like magnetic cursor interactions, text splitting animations, text waves, parallax image shifts, elastic image effects, and text underlining. This README provides usage instructions for each function available in Ferro.js.

## FerroMagnet

This function creates a magnetic cursor effect on the specified elements.

### Usage
```javascript
FerroMagnet(".ferro-magnet", sensitivity);
```

### Parameters
- `selector` (string): CSS selector for the elements to which the effect will be applied.
- `sensitivity` (number): Sensitivity level (1 to 5) for the magnetic effect.

### Example
```javascript
FerroMagnet(".ferro-magnet", 3);
```

## FerroTextSplit

This function splits text into individual words and animates them with various effects when they enter the viewport.

### Usage
```javascript
FerroTextSplit(".text", scrub, style, start, end);
```

### Parameters
- `selector` (string): CSS selector for the elements to which the effect will be applied.
- `scrub` (number): Enables scrub if set to 1. (Optional, default is 0)
- `style` (number): Style of the animation (0 to 4). (Optional, default is 0)
- `start` (string): Scroll start position (e.g., "top"). (Optional, default is "top")
- `end` (string): Scroll end position (e.g., "70%"). (Optional, default is "70%")

### Example
```javascript
FerroTextSplit(".text", 1, 4, "0%", "5%");
```

## FerroTextWaves

This function creates a wave effect on text with two layers of text, one with an outline and the other filled.

### Usage
```javascript
FerroTextWaves(selector, txt, color1, color2);
```

### Parameters
- `selector` (string): CSS selector for the element to which the effect will be applied.
- `txt` (string): Text to be displayed.
- `color1` (string): Color for the text outline. (Optional, default is "#fff")
- `color2` (string): Color for the text fill. (Optional, default is the same as `color1`)

### Example
```javascript
FerroTextWaves(".box1", "Ferro.js", "#000", "#fff");
```

## FerroImgShift

This function creates a parallax shift effect on images.

### Usage
```javascript
FerroImgShift(element, eff);
```

### Parameters
- `element` (string): CSS selector for the element containing the image.
- `eff` (number): Amount of vertical shift (in vh). (Optional, default is 10)

### Example
```javascript
FerroImgShift(".box", 20);
```

## FerroElasticImg

This function creates an elastic effect on images when they enter the viewport.

### Usage
```javascript
FerroElasticImg(element, style);
```

### Parameters
- `element` (string): CSS selector for the element to which the effect will be applied.
- `style` (number): Style of the animation (0 for height, 1 for width, 2 for both). (Optional, default is 0)

### Example
```javascript
FerroElasticImg(".box", 2);
```

## FerroTextUnderline

This function adds an underline effect to text elements.

### Usage
```javascript
FerroTextUnderline(buttons, cl, height);
```

### Parameters
- `buttons` (string): CSS selector for the elements to which the effect will be applied.
- `cl` (string): Color of the underline. (Optional, default is "#000")
- `height` (string): Height of the underline. (Optional, default is "3px")

### Example
```javascript
FerroTextUnderline(".btn", "green", "5px");
```

## Additional Notes

- Ensure GSAP is included in your project for Ferro.js to work correctly.
- Customize the CSS styles as needed to match your design requirements.

### Example of Including GSAP
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
```

## Conclusion

Ferro.js provides an easy and flexible way to add interactive animations to your web elements. By following the usage instructions and examples provided, you can enhance your website with engaging and dynamic effects.
