Meteor.publish('exercises', function () {
    console.log(this.userId);
    return Exercises.find({owner: this.userId});
});

Meteor.methods({
   insertNewExercise: function(singleWorkout) {
       Console.log("insert called");
       Exercises.insert(singleWorkout);
   }
});