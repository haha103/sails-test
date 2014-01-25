/**
 * ApplicationController
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

var display_name = {
  "type"           : "申请类型" ,
  "applicant"      : "申请者"   ,
  "credit_type"    : "授信类型" ,
  "credit_purpose" : "授信用途" ,
  "mortgages"      : "抵押物"   ,
  "amount"         : "申请金额" ,
  "partner"        : "合作机构" ,
  "due"            : "还款日期"
};

module.exports = {
    
   new: function(req, res) {
    var curr_action = "new";
    var model = "application";
    var title = "申请";
    res.view({ 
      display_name : display_name ,
      curr_action  : curr_action  ,
      model        : model        ,
      title        : title
    });
  },
 
  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to ApplicationController)
   */
  _config: {}

  
};
