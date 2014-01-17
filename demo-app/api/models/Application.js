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
    // fk
    applicant : { type : 'integer' , required : true } ,
    type      : { type : 'integer' , required : true } ,
    form      : { type : 'integer' , required : true } ,
    purposes  : { type : 'integer' , required : true } ,
    mortgages : { type : 'integer' , required : true } ,

    amount : { type : 'integer' , required : true } ,
    length : { type : 'integer' , required : true } ,

  }

};
