/**
 * ClientBonding
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {

    warrantee_first_name : { type : 'string'  , required : true } ,
    warrantee_last_name  : { type : 'string'  , required : true } ,
    start                : { type : 'date'    , required : true } ,
    end                  : { type : 'date'    , required : true } ,
    amount               : { type : 'integer' , required : true } ,
    // fk
    loaner : { type : 'string' , required : true } ,

  }

};
