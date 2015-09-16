/**
 * Handsontable max length plugin 1.0.0
 * Limit the max length of any cell of the Handsontable plugin.
 *
 * Márcio Gabriel
 * https://github.com/marcioggs
 * 
 * Usage:
 *	$("#sheetId").handsontable({
 *		(...),
 *		cells: function (row, col, prop) {
 *			var cellProperties = {};
 *			cellProperties.maxLength = 5;
 *			return cellProperties;
 *		}
 *  });
 * 
 */
(function ($) {
	
	/**
	 * Add max length to a text area.
	 * Implementation based on: http://stackoverflow.com/a/12131507/1026624
	 * 
	 * @param jqObj Object to add max length
	 * @param maxLength Max length
	 */
	var _addMaxLengthTextArea = function(jqObj, maxLength) {
		jqObj.unbind("input.handsontableMaxlength");
		jqObj.unbind("propertychange.handsontableMaxlength");
		
		jqObj.bind("input.handsontableMaxlength propertychange.handsontableMaxlength", function() {
			if ($(this).val().length > maxLength) {
				$(this).val($(this).val().substring(0, maxLength));
			}
		});
	};

	(Handsontable.hooks || Handsontable.PluginHooks).add("afterGetCellMeta", function(row, col, cellProperties) {
		if (typeof cellProperties.maxLength === "number") {
			_addMaxLengthTextArea($(".handsontableInput"), cellProperties.maxLength);
		}
	});
	
})(jQuery);
