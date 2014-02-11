Template.ticketPage.events({
	'click #add-testscript': function(e) {
		e.preventDefault();
		e.stopPropagation;
		if (Meteor.user()) {
			$('#new-testscript').find('textarea').val('');
			$('#new-testscript').show();
		}
	},
	'dblclick .main.ticket': function(e) {
		e.preventDefault();
		if (Meteor.user()) {
			$(e.currentTarget).hide();
			$('.edit-ticket').show();
		}
	}
});

Template.ticketPage.helpers({
	assignedTo: function() {
		if (AssemblaUsers.findOne({ id: this.assignedToId })) {
			return AssemblaUsers.findOne({ id: this.assignedToId }).login;
		}
		return '';
	},
	ticketTesters: function() {
		if (this.testers) {
			var testers = _.filter(this.testers, function(tester) { 
				return tester !== '' && tester !== null; 
			});
			if (testers.length > 0) {
				return testers.join(', ');				
			}
		}
		return 'No Testers Assigned';
	}
})
