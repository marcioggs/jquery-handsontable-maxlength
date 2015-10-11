/**
 * Handsontable max length plugin 2.0.1
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

	for (i = 0; i < changes.length; i++) { //Iteration on all changed cells.

		var row = changes[i][0]; //0 is the changed cell row index.
		var col = changes[i][1]; //1 is the changed cell column index.
		var meta = this.getCellMeta(row, col);
		var data = changes[i][3]; //3 is the changed data index.

		if (typeof meta.maxLength == "number" && //maxLength setted by the caller code.
				data.length > meta.maxLength) {

			changes[i][3] = data.substring(0, meta.maxLength); //Change the data with the collapsed text.
		}
	}

});
