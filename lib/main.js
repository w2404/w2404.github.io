$(function(){
    // 创建一个SpeechRecognition对象
    var recognition = new webkitSpeechRecognition();

    // 设置语音识别语言为中文
    recognition.lang = 'zh-CN';

    // 开始录音
    recognition.start();

    // 监听语音识别结果
    recognition.onresult = function(event) {
      var result = event.results[event.resultIndex][0].transcript;
      console.log('语音识别结果：' + result);
        $('#m').append('<div>'+result+'</div>')
    }
        $('#m').append('<div>'+'ss'+'</div>')
})
