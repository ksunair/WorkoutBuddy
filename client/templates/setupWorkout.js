Template.setupWorkout.helpers({
   'submit form': function(e){
       e.preventDefault();

       var singleworkout = {
           name: $(e.target).find('[name=name]').val(),
           sets: $(e.target).find('[name=sets]').val(),
           reps1: $(e.target).find('[name=reps1]').val(),
           weight1: $(e.target).find('[name=weight1]').val(),
           reps2: $(e.target).find('[name=reps2]').val(),
           weight2: $(e.target).find('[name=weight2]').val(),
           reps3: $(e.target).find('[name=reps3]').val(),
           weight3: $(e.target).find('[name=weight3]').val(),
           notes: $(e.target).find('[name=notes]').val()
       };

       Exercises.insert(singleworkout);
   }
});