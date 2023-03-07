url = "https://teachablemachine.withgoogle.com/models/syOBGuSv5/model.json"
function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier(url,modelready);
}
function modelready(){
    console.log("model complete")
}