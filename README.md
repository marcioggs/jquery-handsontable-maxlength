Handsontable max length plugin
==============================

Limit the max length of any cell of the Handsontable plugin.
Latest test on Handsontable version 0.19.0.

Usage:
------
```javascript
new Handsontable(container, {
		(...)
		cells: function (row, col, prop) {
 		this.maxLength = row + col;
   	}
	});
```

JSFiddle Test:
--------------
http://jsfiddle.net/qyptgkwk/

 Download original plugin at <http://handsontable.com>.
