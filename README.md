Handsontable max length plugin
==============================

Limit the max length of any cell of the Handsontable plugin. 
Latest test on Handsontable version 0.14.1.

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
http://jsfiddle.net/x0zz28fb/4/

 Download original plugin at <http://handsontable.com>.
