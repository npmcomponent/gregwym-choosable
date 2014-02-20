/**
 * Module dependencies.
 */

var Emitter = require('component-emitter');
var classes = require('component-classes');
var events = require('component-events');
var query = require('component-query');

/**
 * Expose `Choosable`.
 */

module.exports = Choosable;

/**
 * Initialize a new `Choosable` with `selector`
 * and optional `el` defaulting to the document
 * element.
 *
 * @param {String} selector
 * @param {Element} el
 * @api public
 */

function Choosable(selector, el) {
  if (!(this instanceof Choosable)) return new Choosable(selector, el);
  this.el = el || document.documentElement;
  this.selector = selector;
  this.events = events(this.el, this);
  this.events.bind('click');
}

/**
 * Mixin emitter.
 */

Emitter(Choosable.prototype);

/**
 * Handle click.
 */

Choosable.prototype.onclick = function(e) {
  var els = this.els();
  var el = e.toElement;
  this.deselectAll(els);
  for (var i = 0; i < els.length; i++) {
    if (els[i] === el) { return this.select(el); }
  }
};

/**
 * Apply "selected" classes.
 *
 * TODO: cache ClassLists
 */

Choosable.prototype.select = function(el){
  classes(el).add('selected').remove('selectover');

  this.change(el);
};

/**
 * Remove "selected" classes.
 */

Choosable.prototype.deselect = function(el){
  classes(el).remove('selected');
};

/**
 * Remove all elements' "selected" classes.
 */

Choosable.prototype.deselectAll = function(els){
  for (var i = 0; i < els.length; i++) {
    classes(els[i]).remove('selected');
  }
};

/**
 * Toggle "selected".
 */

Choosable.prototype.toggle = function(el){
  if (classes(el).has('selected')) {
    this.deselect(el);
  } else {
    this.select(el);
  }
};

/**
 * Emit "change".
 */

Choosable.prototype.change = function(el){
  var e = {};
  e.elements = this.els();
  e.selected = el;
  this.emit('change', e);
};

/**
 * Get selectable elements.
 */

Choosable.prototype.els = function(){
  return query.all(this.selector, this.el);
};
