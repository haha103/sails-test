/**
 * WorkflowController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

var WorkflowHelper = require("../libs/WorkflowHelper");

var display_name = {
  
  "name"       : "流程名称" ,
  "definition" : "流程定义" ,

};

var all_states = {
   
  'APPLICATION'      : { name : "提交"     } ,
  'INVESTIGATION'    : { name : "调查"     } ,
  'RISK_ASSESSMENT'  : { name : "风险评估" } ,
  'REVIEW'           : { name : "评审会"   } ,
  'CONTRACTING'      : { name : "签合同"   } ,
  'PAY'              : { name : "放款"     } ,
  'MONITORING'       : { name : "监控"     } ,
  'CONTINGENCY_PROC' : { name : "应急程序" } ,
  'RISK_CONTROL'     : { name : "风险控制" } ,
  'CLOSED'           : { name : "项目关闭" }

};


module.exports = {
    
  new: function(req, res) {
    var curr_action = "new";
    var model = "workflow";
    var title = "流程";
    var example = WorkflowHelper.getWorkflowExample();
    res.view({ 
      display_name : display_name ,
      curr_action  : curr_action  ,
      model        : model        ,
      example      : example      ,
      title        : title
    });
  }, 

  /*
  create: function(req, res) {
    var definition = JSON.parse(req.param('definition'));
    console.log(JSON.stringify(definition, null, 2));
    res.redirect("/workflow");
  },
  */

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to WorkflowController)
   */
  _config: {}

  
};
