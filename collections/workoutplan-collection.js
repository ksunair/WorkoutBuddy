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