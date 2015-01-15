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
  },

  nextTicketNumber: function() {
    return Tickets.findOne({assemblaId: {$gt: this.assemblaId}}, {sort: {assemblaId: 1}});
  },

  previousTicketNumber: function() {
    return Tickets.findOne({assemblaId: {$lt: this.assemblaId}}, {sort: {assemblaId: -1}});
  }
});
