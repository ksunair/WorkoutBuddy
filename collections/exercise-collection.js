Exercises = new Meteor.Collection('exercises');

ExercisesSchema = new SimpleSchema({
    "name": {
        type: String,
        label: 'Name'
    },
    "workout.$.weight": {
        type: String,
        label: 'Weight'
    },
    "workout.$.reps": {
        type: String,
        label: 'Reps'
    },
    "notes": {
        type: String,
        label: 'Notes',
        optional: true
    },
    "owner": {
        type: String,
        autoform: {
            type: "hidden"
        }
    },
});

Exercises.attachSchema( ExercisesSchema );

Exercises.permit('insert').ifLoggedIn().apply();
Exercises.permit('update').ifLoggedIn().apply();
Exercises.permit('remove').ifLoggedIn().apply();

WorkoutPlan = new Meteor.Collection('workoutplans');

WorkoutPlanSchema = new SimpleSchema({
    "name": {
        type: String,
        label: 'Name'
    },
    "workouts$exercise": {
        type: String
    }
});

WorkoutPlan.attachSchema( WorkoutPlanSchema );