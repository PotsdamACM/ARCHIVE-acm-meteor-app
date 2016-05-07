// $( document ).ready(function() {

// 	$(".button-collapse").sideNav();

// });

Template.navigation.onRendered(function () {
  $('.button-collapse').sideNav({
    closeOnClick: true
  });
});