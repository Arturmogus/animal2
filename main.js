var cat = 0;
var dog = 0;

function start()
{
    navigator.mediaDevices.getUserMedia({ audio: true})
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/MeDrNRobM/model.json', modelReady)
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error)
    }
    else {
        console.log(results)
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("dog").innerHTML = 'Dog -' + dog;
        document.getElementById("cat").innerHTML = 'Cat - ' + cat;
        document.getElementById("dog").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("cat").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    }

}