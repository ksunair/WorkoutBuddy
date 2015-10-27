Exercises = new Meteor.Collection('exercises');

ExercisesSchema = new SimpleSchema({
    "name": {
        type: String,
        label: 'Name'
    },
    "sets": {
        type: Number,
        label: 'Sets'
    },
    "workout.$.weight": {
        type: String,
        label: 'Weight'
    },
    "workout.$.reps": {
        type: String,
        label: 'Weight'
    },
    "warmup": {
        type: String,
        label: 'Warmup',
        optional: true
    },
    "notes": {
        type: String,
        label: 'Notes',
        optional: true
    },
    "owner": {
        type: String,
        label: 'User Id'
    }
});

Exercises.attachSchema( ExercisesSchema );