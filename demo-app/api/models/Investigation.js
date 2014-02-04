/**
 * Investigation
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  schema: true,

  attributes: {
  
    application: { type: "integer", required: true },

    blacklisted: { type: "array" }, // Blacklist
    credit_rating: { type: "integer" }, 
    avg_score: { type: "integer" },
    case_summary: { type: "string" },
    
  }

};
