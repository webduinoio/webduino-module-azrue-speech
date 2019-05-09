
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

Blockly.JavaScript['speech_to_text_create'] = function(block) {
  var text_azure = block.getFieldValue('azure');
  var dropdown_language = block.getFieldValue('language');
  // TODO: Assemble JavaScript into code variable.
  var code = '{0}'.format(speech_to_text_create(dropdown_language));
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['speech_to_text_start'] = function(block) {
  var variable_azure = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('azure'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = "{0}.start()".format(speech);
  return code;
};

Blockly.JavaScript['speech_to_text_stop'] = function(block) {
  var variable_azure = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('azure'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = "{0}.stop()".format(speech);
  return code;
};

Blockly.JavaScript['speech_to_text_clear'] = function(block) {
  var variable_azure = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('azure'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = "{0}.clear()".format(speech);
  return code;
};

Blockly.JavaScript['speech_to_text_recognize'] = function(block) {
  var variable_azure = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('azure'), Blockly.Variables.NAME_TYPE);
  var text_timeout = block.getFieldValue('timeout');
  var statements_include = Blockly.JavaScript.statementToCode(block, 'include');
  // TODO: Assemble JavaScript into code variable.
  var code = '{0};\n'.format(speech_to_text_ontimer(variable_azure, statements_include, text_timeout));
  return code;
};
