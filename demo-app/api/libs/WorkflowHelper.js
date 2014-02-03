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

var all_states = {
   
  'APPLICATION'      :  { name : "申请提交" } ,
  'INVESTIGATION'    :  { name : "现场调查" } ,
  'RISK_ASSESSMENT'  :  { name : "风险评估" } ,
  'REVIEW'           :  { name : "评审会"   } ,
  'CONTRACTING'      :  { name : "签合同"   } ,
  'PAY'              :  { name : "放款"     } ,
  'MONITORING'       :  { name : "监控"     } ,
  'CONTINGENCY_PROC' :  { name : "应急程序" } ,
  'RISK_CONTROL'     :  { name : "风险控制" } ,
  'CLOSED'           :  { name : "项目关闭" }

};


var visited_states = [  ];


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
  },
  getProgress: function(workflow_id, current_state) {
    var ret = 0;
    Workflow.findOne({ id: workflow_id }).done(function foundWorkflow(err, workflow) {
      var def = workflow.definition;
      var depth_total = _.size(def);
      visited_states = [  ];
      var depth_to_end = __depth_to_end_state(def, current_state);
      ret = 100 - ((depth_to_end / depth_total) * 100);
    });
    return ret;
  },
  getAllStates: function() {
    return all_states;
  }
};

function __depth_to_end_state(def, state) {
  var next_states = def[state].next_states;
  if (_.contains(visited_states, state)) return 0;
  visited_states.push(state);
  if (!next_states) return 1;
  var ret = 0;
  for (var i = 0; i < next_states.length; ++i) {
    var depth = __depth_to_end_state(def, next_states[i]) + 1;
    if (depth > ret) ret = depth;
  }
  return ret;
}
