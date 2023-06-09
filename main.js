Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality :90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    })
}
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Ia4QJypAP/model.json',modelLoaded);
function modelLoaded() {
    console.log("Model Loaded!")
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    speak_data_2 = "And the second prediction is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
  }
  
  
    function check()
    {
      img = document.getElementById('captured_image');
      classifier.classify(img, gotResult);
    }

    
    
function gotResult(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      document.getElementById("result_emotion_name1").innerHTML = results[0].label;
      prediction_1 = results[0].label;
      speak();
      if(results[0].label == "stop")
      {
          document.getElementById("update_emoji1").innerHTML = "&#9995;";
      }
      if(results[0].label == "thumbs-up")
      {
          document.getElementById("update_emoji1").innerHTML = "&#128077;";
      }
  
      if(results[0].label == "pointing")
      {
          document.getElementById("update_emoji1").innerHTML = "&#128073;";
      }
      if(results[0].label == "yo")
      {
          document.getElementById("update_emoji1").innerHTML = "&#129304";
      }
      if(results[0].label == "cheese")
      {
          document.getElementById("update_emoji1").innerHTML = "&#9996";
      }
      if(results[0].label == "fist")
      {
          document.getElementById("update_emoji1").innerHTML = "&#9994";
      }
      if(results[0].label == "thumbs-down")
      {
          document.getElementById("update_emoji1").innerHTML = "&#128079";
      }
    }
  }
  
  