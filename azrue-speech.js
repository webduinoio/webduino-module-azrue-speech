+(function (factory) {
    if (typeof exports === 'undefined') {
        factory(webduino || {});
    } else {
        module.exports = factory;
    }
}(function (scope) {
    'use strict';

    var proto;
    var Module = scope.Module;

    function AzrueSpeech() {
        Module.call(this);
        this.result = '';
    }

    AzrueSpeech.prototype = proto = Object.create(Module.prototype, {
        constructor: {
            value: AzrueSpeech
        }
    });

    proto.start = function (event) {
        
    }

    proto.stop = function (topic, payload) {

    }

    proto.clear = function () {
        this.result = '';
    }

    proto.result = function () {
        return this.result;
    }

    scope.module.AzrueSpeech = AzrueSpeech;
}));