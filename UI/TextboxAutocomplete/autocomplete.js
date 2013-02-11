$(document).ready(initAddPurchase);

function initAddPurchase()
{
	var autocompleteTB = new AutoCompleteTextbox();
	
	// Prepere autocomplete list.
	var autocompleteItems = new Array();
	for (var ctr = 0; ctr < items.length; ctr++)
	{
		autocompleteItems.push({item: items[ctr].name, code: items[ctr].id});
	}
	autocompleteTB.setAutocompleteList(autocompleteItems);
	
	// Set our textbox as destination
	autocompleteTB.setTargetTextbox('filter');
}
