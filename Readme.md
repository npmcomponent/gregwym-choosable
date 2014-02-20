*This repository is a mirror of the [component](http://component.io) module [gregwym/choosable](http://github.com/gregwym/choosable). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/gregwym-choosable`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# choosable

  Choosable DOM elements. Forked and modified from [component/selectable](https://github.com/component/selectable)

## Installation

    $ component install gregwym/choosable

## Example

```html
<ul id="pets">
  <li data-name="tobi">Tobi</li>
  <li data-name="loki">Loki</li>
  <li data-name="jane">Jane</li>
  <li data-name="abby">Abby</li>
</ul>

<script>
  var Choosable = require('choosable');
  var choosable = Choosable('#pets > li');

  choosable.on('change', function(e){
    console.log(e.selected.getAttribute('data-name'));
  });
</script>
```

## API

### Choosable(selector, el)

  Make elements with the given `selector` choosable, with optional context `el`.

### Choosable#select(el)

  Add the given `el` to the selection.

### Choosable#deselect(el)

  Remove the given `el` from the selection.

## License

  MIT
