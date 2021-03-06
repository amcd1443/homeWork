//Assignment take list of countries, determine which two letter ending is most used
// Steps: 

var countriesArray = ["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Antarctic Territory","British Indian Ocean Territory","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Canton and Enderbury Islands","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos [Keeling] Islands","Colombia","Comoros","Congo - Brazzaville","Congo - Kinshasa","Cook Islands","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Côte d’Ivoire","Denmark","Djibouti","Dominica","Dominican Republic","Dronning Maud Land","East Germany","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","French Southern and Antarctic Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Honduras","Hong Kong SAR China","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Johnston Island","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau SAR China","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands",
	"Martinique","Mauritania","Mauritius","Mayotte","Metropolitan France","Mexico","Micronesia","Midway Islands","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar [Burma]","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","Neutral Zone","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","North Korea","North Vietnam","Northern Mariana Islands","Norway","Oman","Pacific Islands Trust Territory","Pakistan","Palau","Palestinian Territories","Panama","Panama Canal Zone","Papua New Guinea","Paraguay","People's Democratic Republic of Yemen","Peru","Philippines","Pitcairn Islands","Poland","Portugal","Puerto Rico","Qatar","Romania","Russia","Rwanda","Réunion","Saint Barthélemy","Saint Helena","Saint Kitts and Nevis","Saint Lucia","Saint Martin","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Saudi Arabia","Senegal","Serbia","Serbia and Montenegro","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","South Korea","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen","Swaziland","Sweden","Switzerland","Syria","São Tomé and Príncipe","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","U.S. Minor Outlying Islands","U.S. Miscellaneous Pacific Islands","U.S. Virgin Islands","Uganda","Ukraine","Union of Soviet Socialist Republics","United Arab Emirates","United Kingdom","United States","Unknown or Invalid Region","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Wake Island","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe","Åland Islands"];

var counts = {};

// Steps
// Display the most popular last two letters of a country 
function totalEnding () {
	
	for (var i = 0; i < countriesArray.length; i++ ) {
		var lastTwoLetters = countriesArray[i].slice(-2);
		var firstTwoLetters = countriesArray[i].substring(0,2);
		if ( counts[lastTwoLetters] === undefined, counts[lastTwoLetters] === undefined) {
			counts[lastTwoLetters] = 1;
		} else {
			counts[lastTwoLetters] = counts[lastTwoLetters] + 1;
		}
	}; 

// 1. store list of keys - done, in variable listOfKeys;
// 2. loop through list of keys - done, with 'for' loop line 32;
// 3. check if the value of that key is higer then your currentHighest value - done, line 36
// 4. if the value of that key is higher then your currentHighestValue then keeptrack of that key - done line 37
// 5. after you are done looping through, print out the key which you were keeping track of - line 39
	var listOfKeys = Object.keys(counts);
	var currentHighest = 0;
	var newKey = null;
	for (j = 0; j < listOfKeys.length; j++) {
		var keyWeWantToCheckTheValueOf = listOfKeys[j];
	 	var valueWeWantToCheck = counts[keyWeWantToCheckTheValueOf];
		if (valueWeWantToCheck > currentHighest) {
			currentHighest = valueWeWantToCheck;
			newKey = keyWeWantToCheckTheValueOf;
		} 
	};
	console.log("The country ending that is most popular is " + '\"' + newKey + '\"' + " and it appears " + currentHighest + " times");
	console.log("The country beginning that is most common is " + '\"' + newKey + '\"' + " and it appears " + currentHighest + " times");
	console.log(counts);
};


totalEnding();
