Exercises = new Mongo.Collection("exercises");

Meteor.publish('exercises', function () {
    return Exercises.find();
});