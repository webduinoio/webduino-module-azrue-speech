Blockly.Blocks['speech_result'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("speech")
        .appendField(new Blockly.FieldVariable("azure"), "azure")
        .appendField("recognize result");
    this.setOutput(true, "String");
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['speech_recognize'] = {
  init: function() {
    this.appendValueInput("topic")
        .setCheck("String")
        .appendField("speech")
        .appendField(new Blockly.FieldVariable("azure"), "azure")
        .appendField("recognize");
    this.appendStatementInput("include")
        .setCheck(null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['speech_create'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("speech")
        .appendField(new Blockly.FieldTextInput("azure"), "azure")
        .appendField(new Blockly.FieldDropdown([["Chinese","Chinese - CN"], ["English","English - US"], ["Japanese","Japanese - JP"], ["Russian","Russian - RU"]]), "language");
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['speech_start'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("speech")
        .appendField(new Blockly.FieldVariable("azure"), "azure")
        .appendField("recognize start");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['speech_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("speech")
        .appendField(new Blockly.FieldVariable("azure"), "azure")
        .appendField("recognize stop");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['speech_clear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("speech")
        .appendField(new Blockly.FieldVariable("azure"), "azure")
        .appendField("clear result");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};