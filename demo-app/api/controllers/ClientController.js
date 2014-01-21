/**
 * ClientController
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

module.exports = {
    
  
  new: function(req, res) {
    var display_name = {
      "pid"           : "ID"       , "name"        : "名字"     , "email"                  : "电子邮箱"     ,
      "address"       : "地址"     , "phone"       : "电话"     , "type"                   : "客户类型"     ,
      "loans"         : "贷款情况" , "domains"     : "从事行业" , "profit_curr_year"       : "今年利润"     ,
      "employer"      : "雇主"     , "title"       : "职位"     , "profit_last_year"       : "去年利润"     ,
      "legal_person"  : "法人"     , "contact"     : "联系人"   , "contact_phone"          : "联系人电话"   ,
      "founded"       : "成立时间" , "products"    : "主要产品" , "registered_captical"    : "注册资金"     ,
      "total_asset"   : "总资产"   , "net_asset"   : "净资产"   , "asset_liability_ratio"  : "资产负债率"   ,
      "current_ratio" : "流动比率" , "quick_ratio" : "速动比率" , "sales_income_last_year" : "去年销售收入" ,
      "shareholders"  : "股权结构" , "bondings"    : "对外担保" , "sales_income_curr_year" : "今年销售收入" ,
      "yearly_income" : "年收入"   , "education"   : "学历"
    };
    var curr_action = "new";
    var model = "client";
    var title = "客户";
    res.view({ 
      display_name : display_name ,
      curr_action  : curr_action  ,
      model        : model        ,
      title        : title
    });
  },

  create: function(req, res) {
    console.log(req.params.all());
    res.json(req.params.all());
  },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to ClientController)
   */
  _config: {}

  
};
