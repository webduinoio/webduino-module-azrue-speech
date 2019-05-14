
Blockly.JavaScript['speech_to_text_result'] = function(block) {
  var variable_azure = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('azure'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = "{0}.result()".format(variable_azure);
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['speech_to_text_create'] = function(block) {
  var dropdown_language = block.getFieldValue('language');
  var dropdown_server = block.getFieldValue('server');
  // TODO: Assemble JavaScript into code variable.
  var code = speech_to_text_create(dropdown_language, dropdown_server);
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['speech_to_text_recognize'] = function(block) {
  var variable_azure = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('azure'), Blockly.Variables.NAME_TYPE);
  var text_timeout = block.getFieldValue('timeout');
  var statements_include = Blockly.JavaScript.statementToCode(block, 'include');
  // TODO: Assemble JavaScript into code variable.
  var code = '{0};\n'.format(speech_to_text_ontimer(variable_azure, statements_include, text_timeout));
  return code;
};

Blockly.JavaScript['speech_to_text_function'] = function(block) {
  var variable_azure = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('azure'), Blockly.Variables.NAME_TYPE);
  var dropdown_function = block.getFieldValue('function');
  // TODO: Assemble JavaScript into code variable.
  var code = "{0}.{1}();\n".format(variable_azure, dropdown_function);
  return code;
};

Blockly.JavaScript['text_to_speech_function'] = function(block) {
  var dropdown_language = block.getFieldValue('language');
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "webduino.module.AzrueTextToSpeech('{0}', {1})();\n".format(dropdown_language, value_text);
  return code;
};