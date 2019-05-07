+(function (factory) {
  if (typeof exports === 'undefined') {
    factory(window, window.webduino);
  } else {
    module.exports = factory;
  }
}(function (scope, webduino) {

  'use strict';

  scope.speech_create = function (eim_name) {
    return "new webduino.module.EIM('{0}')".format(eim_name);
  }

  scope.speech_recognize = function (eim, topic, payload) {
    return "{0}.sendto({1}, {2})".format(eim, topic, payload);
  }

  scope.speech_start = function (eim, topic, event) {
    return "{0}.listen(function (message) {\n if ( '' == {1} || {0}.topic == {1} ) {\n {2} }\n})".format(eim, topic, event);
  }

  scope.speech_stop = function (eim) {
    return "{0}.payload".format(eim);
  }

  scope.speech_clear = function (eim) {
    return "{0}.topic".format(eim);
  }

  scope.speech_result = function (eim) {
    return "{ topic : {0}.topic, payload : {0}.payload }".format(eim);
  }

  scope.speech_unit_test = function () {

    var code = "";
    
    code += 'var eim = {0};\n'.format(eim_create("python"));
    
    code += 'console.log({0});\n'.format("eim.socket.connected");
    
    code += 'console.log({0});\n'.format(eim_message("eim"));
    
    code += '{0};\n'.format(eim_listen("eim", "'eim/python'", 'console.log({0}, {1});\n'.format(eim_topic("eim"), eim_payload("eim"))));
    
    code += 'setInterval(function () { {0}; }, 5000);\n'.format(eim_broadcast("eim", "'eim/python'", "'print(\"hello\")'"));
  
    console.log(code);
    // eval(code);
    return code;
  }

}));
