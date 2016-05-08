/*
	Formats the date nicely to teh front-end.
*/
Template.registerHelper('formatDate', function(date) {
  	return moment(date).format('MM-DD-YYYY');
});

/*
	Does not display talks that are past the current date
 */
Template.registerHelper('dateCheck', function(date) {
	console.log(moment(date));
	console.log(moment());
	return moment(date).isAfter(moment());
});

/*
  Helpers for displaying content from DB.
*/
Template.talks.helpers({
	
  	/*
    	Displays all talks.
  	*/ 
	talks() {
    	return Talks.find({});
  	}
});