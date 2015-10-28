Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
});

Meteor.subscribe('exercises');

AutoForm.hooks({
    insertExercisesForm: {
        formToDoc: function(doc) {
            doc.owner = Meteor.userId();
            console.log(doc.ownerId);
            return doc
        }
    }
});