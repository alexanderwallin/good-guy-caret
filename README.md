<h1 align="center">
  <img src="good-guy-caret.png" width="200" />
  <br />
    <br />
  Good Guy Caret
</h1>

Need your tooltip to point to the source of its existence? Got a select that ought to have a nice, juicy caret pointer at its right end? **Good Guy Caret has got your back.**

Good Guy Caret allows you to easily create carets of different styles and ratios in your React thingamajiggy:

```js
import Caret, { Direction } from 'good-guy-caret'

<Caret direction={Direction.DOWN} size={10} ratio={2} />
```

This is handy when:

* you need carets but don't want to include an entire icon font or library;
* the icon font or library you're using have a filled or stroked version bot not the other, and because you are the Elvis of web development you want both;
* the graphic designer naively puts a nice box shadow on the tooltip caret, and no one (not even you) wants to hear you explain that *it's actually quite tricky*: Good Guy Caret will shadow your box;
