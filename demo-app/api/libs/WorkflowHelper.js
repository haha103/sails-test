var workflow_example = {

  "APPLICATION"      : { "init_state" : true, "next_states" : [ "INVESTIGATION", "CLOSED" ] },
  "INVESTIGATION"    : { "next_states" : [ "RISK_ASSESSMENT", "CLOSED" ] },
  "RISK_ASSESSMENT"  : { "next_states" : [ "INVESTIGATION", "REVIEW", "CLOSED" ] },
  "REVIEW"           : { "next_states" : [ "RISK_ASSESSMENT", "CLOSED", "CONTRACTING" ] },
  "CONTRACTING"      : { "next_states" : [ "PAY", "REVIEW" ] },
  "PAY"              : { "next_states" : [ "CONTRACTING", "MONITORING" ] },
  "MONITORING"       : { "next_states" : [ "CLOSED", "CONTINGENCY_PROC" ] },
  "CONTINGENCY_PROC" : { "next_states" : [ "RISK_CONTROL", "MONITORING" ] },
  "RISK_CONTROL"     : { "next_states" : [ "CLOSED" ] },
  "CLOSED"           : { "end_state" : true }

};


module.exports = {
  getWorkflowExample: function() {
    return JSON.stringify(workflow_example, null, 2);
  },
  getInitState: function(workflow) {
    var definitions = workflow.definition;
    for (var state in definitions) {
      if (definitions[state].init_state)
        return state;
    }
    return null;
  },
  getEndState: function(workflow) {
    var definitions = workflow.definition;
    for (var state in definitions) {
      if (definitions[state].end_state)
        return state;
    }
    return null;
  }
};
