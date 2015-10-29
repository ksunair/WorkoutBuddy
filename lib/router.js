Router.configure({
   layoutTemplate: 'layout'
});

Router.route('/', function(){
   template: 'home'
});

Router.route('/home');

Router.route('/setup');

Router.route('/setup/workout/:_id', function(){
   console.log("entering");
   this.render('setup');
   this.render('updateWorkout', {
      to: 'setupDetail',
      data: function () {
         console.log(this.params._id);
         return Exercises.findOne({_id: this.params._id});
      }
   });
});

Router.route('/setup/workout', function(){
   this.render('setup');
   this.render('setupWorkout', {to: 'setupDetail'})
});

Router.route('/about');

Router.route('/workout');

