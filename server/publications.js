Meteor.publish('exercises', function () {
    return Exercises.find();
});

Meteor.methods({
   insertNewExercise: function(singleWorkout) {
       Exercises.insert(singleWorkout);
   }
});