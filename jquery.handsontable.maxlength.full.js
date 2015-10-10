/**
 * Handsontable max length plugin 2.0.0
 * Limit the max length of any cell of the Handsontable plugin.
 *
 * Márcio Gabriel
 * https://github.com/marcioggs
 *
 * Usage:
 * 	new Handsontable(container, {
 * 		(...)
 * 		cells: function (row, col, prop) {
 *   		this.maxLength = row + col;
 *     	}
 * 	});
 *
 */
Handsontable.hooks.add('beforeChange', function(changes, source) {

	var meta = this.getCellMeta(changes[0][0], changes[0][1]);
	var text = changes[0][3];

	if (typeof meta.maxLength == "number" &&
			text.length > meta.maxLength) {
				
		changes[0][3] = text.substring(0, meta.maxLength);
	}
});
