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

Router.route('/about', function(){
   this.render('about');
});

Router.route('/workout', function(){
   this.render('workout');
});

