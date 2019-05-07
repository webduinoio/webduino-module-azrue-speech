Blockly.JavaScript['speech_result'] = function(block) {
  var variable_azure = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('azure'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = '{0}'.format(speech_result(variable_azure));
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['speech_recognize'] = function(block) {
  var variable_azure = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('azure'), Blockly.Variables.NAME_TYPE);
  var value_topic = Blockly.JavaScript.valueToCode(block, 'topic', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_include = Blockly.JavaScript.statementToCode(block, 'include');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['speech_create'] = function(block) {
  var text_azure = block.getFieldValue('azure');
  var dropdown_language = block.getFieldValue('language');
  // TODO: Assemble JavaScript into code variable.
  var code = speech_create(dropdown_language);
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['speech_start'] = function(block) {
  var variable_azure = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('azure'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['speech_stop'] = function(block) {
  var variable_azure = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('azure'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['speech_clear'] = function(block) {
  var variable_azure = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('azure'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};