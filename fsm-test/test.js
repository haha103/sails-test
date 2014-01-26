var Stately = require('stately.js');

var machine = Stately.machine({

  'SUBMIT': {
    ok: function() {
      return this.INVEST;
    },
    nok: function() {
      return this.CLOSED;
    }
  },

  'INVEST': {
    ok: function() {
      return this.REVIEW;
    },
    nok: function() {
      return this.CLOSED;
    }
  },

  'REVIEW': {
    ok: function() {
      return this.APPROVED;
    },
    nok: function() {
      return this.CLOSED;
    },
    insufficient: function() {
      return this.INVEST;
    }
  },

  'APPROVED': {
    ok: function() {
      return this.CLOSED;
    }
  },

  'CLOSED': {
    
  }

}, "SUBMIT");

console.log(machine.getMachineState());

machine.ok();

console.log(machine.getMachineState());

machine.nok();
console.log(machine.getMachineState());
console.log(machine);
