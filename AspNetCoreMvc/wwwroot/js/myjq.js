// JavaScript source code
$(document).ready(function () {
    // Additional task: 
    var headers = $('header');
    for (var i = 0; i < $(headers).length; i++) {
        if (i % 2 == 0) // even index -> navy
            $(headers[i]).css('color', 'navy');
        else // odd index: green
            $(headers[i]).css('color', 'green');
    }

    // Additional task: declare bgColour as a global variable
    var bgColour;
    // Mouse over a section element
    $("section").mouseover(function () {
        // get its original background colour
        // Additional task: remove var from the line below
        bgColour = $(this).css('background-color');
        // parse the bgColour to red, green, blue, alpha
        var rgbaValues = bgColour.match(/\d+/g);
        var red = parseInt(rgbaValues[0]);
        var green = parseInt(rgbaValues[1]);
        var blue = parseInt(rgbaValues[2]);
        var alpha = parseFloat(rgbaValues[3]);
        // change alpha from its current value to 1
        alpha = 1;
        // construct the new color string with modified components
        var newBgColour = 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + alpha + ')';
        // Apply the new background colour to the current section
        $(this).css('background-color', newBgColour);
        //$(this).css('color', newTextColour);
        
    });
    // Additional task: mouse out
    $("section").mouseout(function () {
        $(this).css('background-color', bgColour);
    });
});
