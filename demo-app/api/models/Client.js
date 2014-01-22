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
    pid : { type : 'string' , required : true , unique : true } ,

    type    : { type : 'integer' , required : true } , // ClientType model
    name    : { type : 'string'  , require  : true } ,
    phone   : { type : 'string'  , required : true } ,
    address : { type : 'string'  , required : true } ,
    domains : { type : 'array'   , required : true } , // Domain model

  	email : { type : 'email' } ,
    loans : { type : 'array' } , // ClientLoan model

    /* individual clients */
    education     : { type : 'string'  , required : true } ,
    employer      : { type : 'string'  , required : true } ,
    title         : { type : 'string'  , required : true } ,
    yearly_income : { type : 'integer' , required : true } ,

    /* company clients */
    legal_person       : { type : 'string'  , required : true } ,
    contact            : { type : 'string'  , required : true } ,
    contact_phone      : { type : 'string'  , required : true } ,
    founded            : { type : 'date'    , required : true } ,
    products           : { type : 'array'   , required : true } ,
    registered_capital : { type : 'integer' , required : true } ,
    total_asset        : { type : 'integer' , required : true } ,
    net_asset          : { type : 'integer' , required : true } ,

    asset_liability_ratio  : { type : 'integer' } ,
    current_ratio          : { type : 'integer' } ,
    quick_ratio            : { type : 'integer' } ,
    sales_income_last_year : { type : 'integer' } ,
    sales_income_curr_year : { type : 'integer' } ,
    profit_curr_year       : { type : 'integer' } ,
    profit_last_year       : { type : 'integer' } ,

    shareholders : { type : 'array'    } , // ClientShareholder model
    bondings     : { type : 'array'    } , // ClientBonding model

  }

};
