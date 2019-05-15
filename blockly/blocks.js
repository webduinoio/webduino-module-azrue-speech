Blockly.Blocks['speech_to_text_result'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.azrue_speech)
      .appendField(new Blockly.FieldVariable("azure"), "azure")
      .appendField(Blockly.Msg.azrue_recognize_result);
    this.setOutput(true, "String");
    this.setColour(195);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['speech_to_text_create'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.azrue_speech_language)
      .appendField(new Blockly.FieldDropdown([["Chinese", "zh-CN"], ["English", "en-US"], ["Japanese", "ja-JP"], ["Russian", "ru-RU"]]), "language")
      .appendField("server")
      .appendField(new Blockly.FieldDropdown([["eastasia", "eastasia"]]), "server");
    this.setOutput(true, null);
    this.setColour(195);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['speech_to_text_recognize'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.azrue_recognize)
      .appendField(new Blockly.FieldVariable("azure"), "azure")
      .appendField(Blockly.Msg.azrue_recognize_until)
      .appendField(new Blockly.FieldTextInput("5"), "timeout")
      .appendField(Blockly.Msg.azrue_seconds);
    this.appendStatementInput("include")
      .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['speech_to_text_function'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.azrue_speech)
      .appendField(new Blockly.FieldVariable("azure"), "azure")
      .appendField(Blockly.Msg.azrue_recognize)
      .appendField(new Blockly.FieldDropdown([["start", "start"], ["clear", "clear"], ["stop", "stop"]]), "function");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['text_to_speech_function'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.azrue_speech)
      .appendField(new Blockly.FieldDropdown([["普通话", "zh-CN"], ["粤語（香港）", "zh-HK"], ["國語（臺灣）", "zh-TW"], ["Deutsch", "de-DE"], ["English(US)", "en-US"], ["日本語", "ja-JP"], ["한국의", "ko-KR"]]), "language");
    this.appendValueInput("text")
      .setCheck("String")
      .appendField(Blockly.Msg.azrue_say);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};