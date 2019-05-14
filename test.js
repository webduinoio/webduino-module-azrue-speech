
function createURL(url, param) {
  var urlLink = '';
  $.each(param, function (item, key) {
    var link = '&' + item + "=" + key;
    urlLink += link;
  })
  urlLink = url + "?" + urlLink.substr(1);
  return urlLink.replace(' ', '');
}

var url = createURL('https://club.istemedu.com/wxapi/tts', {
  'text': 'ts', 
  'lang': 'zh-HK'
});

console.log(url);

var audio = window.audioJS({
  file: url
});

audio.play();

window.setTimeout(function () {
  audio.stop();
}, 4000);
