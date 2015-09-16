
var mile = prompt("How many miles did you drove today?");
mile = parseFloat(mile);
alert("You drove:  " + mile);
var gallon = prompt("How many gallons did you consume today");
gallon = parseFloat(gallon);
alert("The number of gallons you used is:  " + gallon);
var mpg = mile / gallon;
mpg = parseFloat(mpg);
alert("You consumed:  " +mpg + "  gallons while you were driving today")