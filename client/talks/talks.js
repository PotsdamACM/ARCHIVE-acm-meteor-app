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

Template.talks.events({
  // functionality for add button. this button makes the modal appear
  // which has a form for adding fields for a talk.
  'click .modal-trigger': function(e) {
    e.preventDefault();
    $('#modal1').openModal();
  },

  // cancel button on the talks form will close the modal window.
  'click .close': function(e) {
    $('#modal1').closeModal();
  }
});
