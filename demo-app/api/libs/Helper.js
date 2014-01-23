module.exports = {
  compactObj: function (o) {
    var r = { };
    for (var k in o) {
      var v = o[k];
      var nv = v;
      if (_.isArray(v)) nv = _.compact(v);
      r[k] = nv;
    }
    return r;
  }
  
};
