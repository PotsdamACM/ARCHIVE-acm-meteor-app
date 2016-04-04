Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.render('home');
});

Router.route('/about', function() {
  this.render('about');
});

Router.route('/activities', function() {
  this.render('activities');
});

Router.route('/contact', function() {
  this.render('contact');
});

Router.route('/projects', function() {
  this.render('projects');
});

Router.route('/talks', function() {
  this.render('talks');
});

Router.route('/events', function() {
  this.render('events');
});
