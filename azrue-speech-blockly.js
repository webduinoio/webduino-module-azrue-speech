+(function (factory) {
  if (typeof exports === 'undefined') {
    factory(window, window.webduino);
  } else {
    module.exports = factory;
  }
}(function (scope, webduino) {

  'use strict';

  scope.speech_create = function (Language) {
    return "new webduino.module.AzrueSpeech('{0}')".format(Language);
  }

  scope.speech_recognize = function (speech, topic, payload) {
    return "{0}.sendto({1}, {2})".format(speech, topic, payload);
  }

  scope.speech_start = function (speech, topic, event) {
    return "{0}.listen(function (message) {\n if ( '' == {1} || {0}.topic == {1} ) {\n {2} }\n})".format(speech, topic, event);
  }

  scope.speech_stop = function (speech) {
    return "{0}.payload".format(speech);
  }

  scope.speech_clear = function (speech) {
    return "{0}.topic".format(speech);
  }

  scope.speech_result = function (speech) {
    return "{ topic : {0}.topic, payload : {0}.payload }".format(speech);
  }

  scope.speech_unit_test = function () {

    var code = "";
    
    code += 'var speech = {0};\n'.format(speech_create("python"));
    
    code += 'console.log({0});\n'.format("speech.socket.connected");
    
    code += 'console.log({0});\n'.format(speech_message("speech"));
    
    code += '{0};\n'.format(speech_listen("speech", "'speech/python'", 'console.log({0}, {1});\n'.format(speech_topic("speech"), speech_payload("speech"))));
    
    code += 'setInterval(function () { {0}; }, 5000);\n'.format(speech_broadcast("speech", "'speech/python'", "'print(\"hello\")'"));
  
    console.log(code);
    // eval(code);
    return code;
  }

}));
