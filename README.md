Handsontable max length plugin
==============================

Limit the max length of any cell of the Handsontable plugin. 
Latest test on Handsontable version 0.18.0.

Usage:
------
```javascript
$("#sheetId").handsontable({
	(...),
	cells: function (row, col, prop) {
		var cellProperties = {};
		cellProperties.maxLength = 5;
		return cellProperties;
	}
 });
```

JSFiddle Test:
--------------
http://jsfiddle.net/jnsar1zy/

 Download original plugin at <http://handsontable.com>.
