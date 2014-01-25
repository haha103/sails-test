/**
 * Application
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  schema: true,
  attributes: {

    type            :  { type : 'integer' , required : true } , // ApplicationType
    applicant       :  { type : 'integer' , required : true } , // Client
    credit_type     :  { type : 'integer' , required : true } , // CreditType
    credit_purposes :  { type : 'integer' , required : true } , // CreditPurpose

    mortgages :  { type : 'array' }  , // Mortgage
    partners  :  { type : 'array' }  , // Partner

    amount         :  { type : 'integer' , required : true }  ,
    due            :  { type : 'date'    , required : true }  ,
    payment_source :  { type : 'string'  , required : true }  ,

  }

};
