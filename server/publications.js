Meteor.publish('exercises', function () {
    return Exercises.find({owner: this.userId});
});

Meteor.methods({
   insertNewExercise: function(singleWorkout) {
       Exercises.insert(singleWorkout);
   }
});