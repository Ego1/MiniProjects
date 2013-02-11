function AutoCompleteTextbox()
{
	// The autocomplete list that will provide autocomplete values
	var autocompleteList;
	var textboxId;
	
	// The widget
	var autocompleteDivWidgets = 
	"<div class=\"autocompleteTextboxDiv\" id=\"autocompleteTextboxDiv\">" +
	"</div>";
	
	this.setAutocompleteList = function(list)
		{
		this.autocompleteList = list;
		};
	
	this.setTargetTextbox = function(textbox)
		{
		textboxId = textbox;
		// Registering the listener.
		$('input#'+textboxId).keyup(filter);
		$('input#'+textboxId).focus(textboxFocussed);
		
		// Adding the filterdiv to the textbox.
		$('input#'+textboxId).parent().append(autocompleteDivWidgets);
		$("div#autocompleteTextboxDiv").width($('input#'+textboxId).width());
		addFilteredItem("Harsh");
		addFilteredItem("Vardhan");
		addFilteredItem("Singh");
		};
		
	function filter()
	{
		// Obtain the word typed by user till now.
		var word =  $('input#'+textboxId).val().trim();
		alert("Word to be filtered is: " + word);
	}
	
	function textboxFocussed()
	{
		// Textbox is focussed. We need to attach turn on the filter div.
		
	}
	
	function addFilteredItem(item)
	{
		$("div#autocompleteTextboxDiv").append("<div class=\"autocompleteTextboxSelectionItem\" width=\"" + $('input#'+textboxId).width() + "\">" + item + "</div>");
	}
}