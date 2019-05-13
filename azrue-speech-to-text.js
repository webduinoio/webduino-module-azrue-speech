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
    var lastRecognized = "", tempRecognizing = "";
    var reco;

    function AzrueSpeechToText(Language = 'zh-CN', region = 'eastasia') {
        Module.call(this);

        this.audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
        this.speechConfig = SpeechSDK.SpeechConfig.fromSubscription('33ce2cd2893c4328afdee24cfeba051b', region);
        this.speechConfig.speechRecognitionLanguage = Language;

    }

    AzrueSpeechToText.prototype = proto = Object.create(Module.prototype, {
        constructor: {
            value: AzrueSpeechToText
        }
    });

    proto.start = function () {
        
        if (lastRecognized == "")
        {
            lastRecognized = tempRecognizing;
        }

        if (reco != undefined)
        {
            reco.stopContinuousRecognitionAsync(
                function () {
                  ;
                },
                function (err) {
                  ;
                });
        }

        reco = new SpeechSDK.SpeechRecognizer(this.speechConfig, this.audioConfig);

        reco.recognizing = function (s, e) {
            // console.log(e);
            console.log("(recognizing) Reason: " + SpeechSDK.ResultReason[e.result.reason] + " Text: " + e.result.text + "\r\n");
            // console.log(lastRecognized + e.result.text);
            tempRecognizing = e.result.text;
        };
 
        reco.recognized = function (s, e) {
            // console.log(e);

            // Indicates that recognizable speech was not detected, and that recognition is done.
            if (e.result.reason === SpeechSDK.ResultReason.NoMatch) {
                var noMatchDetail = SpeechSDK.NoMatchDetails.fromResult(e.result);
                console.log("(recognized)  Reason: " + SpeechSDK.ResultReason[e.result.reason] + " NoMatchReason: " + SpeechSDK.NoMatchReason[noMatchDetail.reason] + "\r\n");
            } else {
                console.log("(recognized)  Reason: " + SpeechSDK.ResultReason[e.result.reason] + " Text: " + e.result.text + "\r\n");
            }

            if (e.result.text != undefined) {
                lastRecognized += e.result.text;
            }

            // console.log(lastRecognized);
        };

        reco.canceled = function (s, e) {
            // console.log(e);

            console.log("(cancel) Reason: " + SpeechSDK.CancellationReason[e.reason]);
            if (e.reason === SpeechSDK.CancellationReason.Error) {
                console.log(": " + e.errorDetails);
            }
        };

        // Signals that a new session has started with the speech service
        reco.sessionStarted = function (s, e) {
            // console.log(e);

            console.log("(sessionStarted) SessionId: " + e.sessionId + "\r\n");
        };

        // Signals the end of a session with the speech service.
        reco.sessionStopped = function (s, e) {
            // console.log(e);

            console.log("(sessionStopped) SessionId: " + e.sessionId + "\r\n");
        };

        // Signals that the speech service has started to detect speech.
        reco.speechStartDetected = function (s, e) {
            // console.log(e);

            console.log("(speechStartDetected) SessionId: " + e.sessionId + "\r\n");
        };

        // Signals that the speech service has detected that speech has stopped.
        reco.speechEndDetected = function (s, e) {
            // console.log(e);

            console.log("(speechEndDetected) SessionId: " + e.sessionId + "\r\n");
        };

        reco.startContinuousRecognitionAsync();
        tempRecognizing = lastRecognized = "";
    }

    proto.stop = function () {
        reco.close();
        reco = undefined;
    }

    proto.clear = function () {
        lastRecognized = "";
    }

    proto.result = function () {
        if (lastRecognized == "") return tempRecognizing;
        return lastRecognized;
    }

    scope.module.AzrueSpeechToText = AzrueSpeechToText;

}));

function unit_test() {
  azure = (new webduino.module.AzrueSpeechToText('zh-CN'));
  azure.start();
  setTimeout(function () {
    azure.stop();
    console.log(azure.result());
    azure.start();
    setTimeout(function () {
      azure.stop();
      console.log(azure.result());
    }, 5 * 1000);
  }, 5 * 1000);
}

// unit_test();