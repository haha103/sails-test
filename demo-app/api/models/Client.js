/**
 * Client
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  
  schema: true,

  attributes: {

    /* common attrs */
    type       : { type : 'string', required  : true, unique : true },
    pid        : { type : 'string', required  : true, unique : true },
    first_name : { type : 'string', require   : true },
    last_name  : { type : 'string', require   : true },
  	email      : { type : 'email' },
    phone      : { type : 'string', required  : true },
    address    : { type : 'string',  required : true },
    // fields with fks
    loans  : { type : 'array', required : true },
    domain : { type : 'array', required : true },

    /* individual clients */
    education     : { type : 'string', required  : true },
    employeer     : { type : 'string', required  : true },
    title         : { type : 'string', required  : true },
    yearly_income : { type : 'integer', required : true },
    
    /* company clients */
    contact                : { type : 'string', required  : true },
    contact_phone          : { type : 'string', required  : true },
    founded                : { type : 'string', required  : true },
    products               : { type : 'array', required   : true },
    registered_capital     : { type : 'integer', required : true },
    total_asset            : { type : 'integer', required : true },
    net_asset              : { type : 'integer', required : true },
    asset_liability_ratio  : { type : 'integer', required : true },
    current_ratio          : { type : 'integer', required : true },
    quick_ratio            : { type : 'integer', required : true },
    sales_income_last_year : { type : 'integer', required : true },
    sales_income_curr_year : { type : 'integer', required : true },
    profit_curr_year       : { type : 'integer', required : true },
    profit_last_year       : { type : 'integer', required : true },
    /* fields as fks */
    shareholders : { type : 'array', required : true },
    bondings     : { type : 'array', required : true },
  }

};
