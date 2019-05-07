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

    function AzrueSpeech(Language = 'zh-CN') {
        Module.call(this);

        var audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
        var speechConfig = SpeechSDK.SpeechConfig.fromSubscription('33ce2cd2893c4328afdee24cfeba051b', 'eastasia');

        speechConfig.speechRecognitionLanguage = Language;

        reco = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig);

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

    }

    AzrueSpeech.prototype = proto = Object.create(Module.prototype, {
        constructor: {
            value: AzrueSpeech
        }
    });

    proto.start = function () {
        lastRecognized = "";
        reco.startContinuousRecognitionAsync();
    }

    proto.stop = function () {
        if (lastRecognized == "")
        {
            lastRecognized = tempRecognizing;
        }
        reco.stopContinuousRecognitionAsync(
            function () {
                reco.close();
                reco = undefined;
            },
            function (err) {
                reco.close();
                reco = undefined;
            });
    }

    proto.clear = function () {
        lastRecognized = "";
    }

    proto.result = function () {
        return lastRecognized;
    }

    scope.module.AzrueSpeech = AzrueSpeech;

}));

function unit_test() {
    var azure;

    azure = (new webduino.module.AzrueSpeech('zh-CN'));

    azure.start();

    setTimeout(function () {
        azure.stop();
    }, 20000);
  
    setInterval(function () {
        console.log(azure.result());
    }, 1000);
}

// unit_test();
