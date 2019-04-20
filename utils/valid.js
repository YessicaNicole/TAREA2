var valid ={
  checkParams:function(refobj,evalueobj) {
    if (Object.key(refobj).sort().toString()==Object.keys(evalueobj).sort().toString()){
      return true;
    }
    return false;
  }
};
module.exports = valid;
