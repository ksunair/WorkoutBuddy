Router.configure({
   layoutTemplate: 'layout'
});

Router.route('/', function(){
   this.render('home');
});

Router.route('/home', function(){
   this.render('home');
});

Router.route('/setup', function(){
   this.render('setup');
});

Router.route('/setup/workout', function(){
   this.render('setup');
   this.render('setupWorkout', {to: 'setupDetail'})
});

Router.route('/about', function(){
   this.render('about');
});

Router.route('/workout', function(){
   this.render('workout');
});

Router.route('/setup/workout/:id', function(){
   this.render('setup');
   this.render('setupWorkout', {to: 'setupDetail'})
});

Exercises = new Mongo.Collection("exercises");
