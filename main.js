Webcam.set({
    width:350,
    height:300,
    image_format:"jpeg",
    jpeg_quality:90
})
camera=document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML="<img id='captured_image' src=' "+data_uri+"'>";
})}

console.log(ml5.version,"Is the ml5.version");

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/vnFe6HaMF/model.json",ModelLoaded);
function ModelLoaded(){
    console.log("Model Loaded");
}
function check() {
    img = document.getElementById("captured_image");
    classifier.classify(img, got_results);
}
function got_results(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML = results[0].label;
        Prediction_1 = results[0].label;
    };
};