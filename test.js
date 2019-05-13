
var soundContext = undefined;
try {
  var AudioContext = window.AudioContext // our preferred impl
    || window.webkitAudioContext       // fallback, mostly when on Safari
    || false;                          // could not find.

  if (AudioContext) {
    soundContext = new AudioContext();
  } else {
    alert("Audio context not supported");
  }
}
catch (e) {
  window.console.log("no sound context found, no audio output. " + e);
}

function start(buffer) {
  var sound;
  var audioContext;
  
  if (!audioContext) {
    window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext || window.oAudioContext;
    sound = new window.AudioContext();
    sound.src = sound.createBufferSource();
    if (sound.createGain) {
      sound._gain = sound.createGain();
    } else {
      sound._gain = sound.createGainNode();
    }
    //设置音量
    sound._gain.gain.value = 0.8;
    sound._gain.connect(sound.destination);
  }
  //buffer就是用ajax get方式获取的音乐文件资源
  sound.src = buffer;
  sound.src.connect(sound._gain);
  //播放
  if (sound.src.start) {
    sound.src.start(0, 0, buffer.duration - 0 - 1.192e-7);
  } else {
    sound.src.noteGrainOn(0, 0, buffer.duration - 0 - 1.192e-7);
  }
  //是否循环
  sound.src.loop = true;
  console.log(sound);
}

var xhr = $.ajax({
  url: "https://club.istemedu.com/wxapi/tts",
  type: "get", //send it through get method
  data: {
    text: 123,
    lang: 'zh-HK'
  },
  success: function (response) {
    console.log(typeof response);
    var blob = new Blob([response], {
      type: 'audio/wav'
    });
    console.log(blob);
    soundContext.src = window.URL.createObjectURL(blob);
    console.log(soundContext);

    source = soundContext.createBufferSource();
    source.buffer = blob;
    source.loop = true;
    source.connect(context.destination);
    source.start(0);
  },
  error: function (xhr) {
    console.log(xhr);
  }
});
