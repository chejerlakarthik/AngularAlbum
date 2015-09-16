album.filter('pluralise', function() {

	return function pluralise(count, noun_rules) {
		
		var messageText = 'Displaying ';
		var returnStr = messageText;

		if (!noun_rules.sing || !noun_rules.plur)
			return count;

		switch (count){
		case 0:
			returnStr = "There are no albums to display";
			break;
		case 1:
			returnStr += count + " " + noun_rules.sing;
			break;
		default:
			returnStr += count + " " + noun_rules.plur;
		}
		return returnStr;
	};
});
