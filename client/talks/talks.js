Template.talks.events({
  // functionality for add button. this button makes the modal appear
  // which has a form for adding fields for a talk.
  'click .modal-trigger': function(e) {
    e.preventDefault();
    $('#modal1').openModal();
  },

  // additional functionality for the submit button on the form. this
  // button will also close the modal window when this button is clicked.
  'click .btn-primary': function(e) {
    $('#modal1').closeModal();
  }
});

