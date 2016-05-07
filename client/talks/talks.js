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

