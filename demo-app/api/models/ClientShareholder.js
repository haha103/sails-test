/**
 * ClientShareholder
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  schema     : true,
  attributes : {

    first_name : { type : 'string' , required : true } ,
    last_name  : { type : 'string' , required : true } ,
    share      : { type : 'float'  , required : true } ,
    // fk
    form       : { type : 'integer' , required : true }

  }

};
