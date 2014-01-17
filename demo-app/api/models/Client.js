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
    type: {
      type: 'string',
      required: true,
      unique: true
    },

    pid: {
      type: 'string',
      required: true,
      unique: true
    },

    first_name: {
      type: 'string',
      require: true
    },

    last_name: {
      type: 'string',
      require: true
    },
  	
  	email: {
  		type: 'email'
  	},

    phone: {
      type: 'string',
      required: true
    },

    address: {
      type: 'string',
      required: true
    },

    /* individual clients */

    education: {
      type: 'string',
      required: true
    },

    /* company clients */
    contact: {
      
    },

    contact_phone: {
      
    },


  }

};
