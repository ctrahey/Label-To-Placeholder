$(document).ready(function() {
    $('label').each(function(){
        var thisLabel = $(this);
        var labelString = thisLabel.text();

		// first we look for a "nested" control
		// <label>foo <input /></label>
        var labeledControl = $('input', this);

		// if we don't find one, use "for" attr
		// <label for="bar"></label><input id="bar"/>
        if(labeledControl.length == 0) {
            var forValue = thisLabel.attr('for');
            var selectorString = 'input[id="' + forValue + '"]';
            labeledControl = $(selectorString);
        }
		
		// only populate placeholder if there is not already on in place
		var existingPlaceholder = labeledControl.attr("placeholder");
		if(!existingPlaceholder) {
			labeledControl.attr("placeholder", labelString);
		}
    })
});