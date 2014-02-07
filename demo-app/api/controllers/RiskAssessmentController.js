/**
 * RiskAssessmentController
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
var Helper = require('../libs/Helper');
var display_name = {  };

module.exports = {
    
   new: function(req, res, next) {
    var app = req.param("app");
    if (!app) {
      res.redirect("/application/");
      return;
    }
    RiskAssessment.findOne({ application: app }).done(function(err, val) {
      if (err) { return next(err); }
      if (val) { res.redirect("/application/"); return; }
    });
    
    var app_info = Helper.get_app_info(app);
    var investigation_info = Helper.get_investigation_info_by_app(app);
    //console.log(app_info);

    var curr_action = "new";
    var model = "riskassessment";
    var title = "风险报告";
    res.view({ 
      app_info           : app_info,
      investigation_info : investigation_info,
      curr_action        : curr_action,
      model              : model,
      title              : title,
      display_name       : display_name
    });
  }, 


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to RiskAssessmentController)
   */
  _config: {}

  
};
