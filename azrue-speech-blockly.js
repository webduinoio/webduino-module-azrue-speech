+(function (factory) {
  if (typeof exports === 'undefined') {
    factory(window, window.webduino);
  } else {
    module.exports = factory;
  }
}(function (scope, webduino) {

  'use strict';

  scope.speech_to_text_create = function (language, region) {
    return "new webduino.module.AzrueSpeechToText('{0}', '{1}')".format(language, region);
  }

  scope.speech_to_text_ontimer = function (speech, callback, timeout) {
    return "{0}.clear();\nsetTimeout(function (message) {\n{1}\n}, {2} * 1000)".format(speech, callback, timeout);
  }

  scope.speech_to_text_start = function (speech) {
    return "{0}.start()".format(speech);
  }

  scope.speech_to_text_stop = function (speech) {
    return "{0}.stop()".format(speech);
  }

  scope.speech_to_text_clear = function (speech) {
    return "{0}.clear()".format(speech);
  }

  scope.speech_to_text_result = function (speech) {
    return "{0}.result()".format(speech);
  }

  scope.speech_to_text_unit_test = function () {

    var code = "";
    
    code += 'var azrue = {0};\n'.format(speech_to_text_create("zh-CN"));
    
    code += '{0};\n'.format(speech_to_text_start("azrue"));

    code += '{0};\n'.format(speech_to_text_ontimer("azrue", "console.log({0})".format(speech_to_text_result("azrue")), "5"));
    
    console.log(code);
    
    // eval(code);
    
    return code;
  }

}));

// speech_to_text_unit_test();
