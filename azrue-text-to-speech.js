
+(function (factory) {
    if (typeof exports === 'undefined') {
        factory(webduino || {});
    } else {
        module.exports = factory;
    }
}(function (scope) {
    'use strict';

    function createURL(url, param) {
        var urlLink = '';
        $.each(param, function (item, key) {
            var link = '&' + item + "=" + key;
            urlLink += link;
        })
        urlLink = url + "?" + urlLink.substr(1);
        return urlLink.replace(' ', '');
    }
    
    scope.module.AzrueTextToSpeech = function (language, text) {
        // console.log(language, text);

        var url = createURL('https://club.istemedu.com/wxapi/tts', {
            'text': text, 
            'lang': language
        });
        
        // console.log(url);

        var audio = window.audioJS({
            file: url
        });
        
        audio.play();
    }

}));

function unit_test() {
    webduino.module.AzrueTextToSpeech('zh-CN', '1234');
        
}

// unit_test();