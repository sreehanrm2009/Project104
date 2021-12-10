Webcam.set({
      width: 350,
      height: 300,
      image_format: 'png',
      png_quality: 90
});

camera = document.getElementById("webcam");
Webcam.attach('#webcam');

function capture() {
      Webcam.snap(function (data_uri) {
            document.getElementById("image").innerHTML = '<img id="captured_image src="' + data_uri + '"/>';
            console.log("Image Captured!");
      });
}

console.log('ML5 Version: ', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ycKhaD55F/', modelLoaded);

function modelLoaded() {
      console.log("Model Loaded!");
}