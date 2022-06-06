window.onload = choosePic;

var imageCount = 3;
var folder = "images/";

function choosePic() {
    var randomNum = Math.floor(Math.random() * imageCount);
    document.getElementById('myPicture').src = folder + randomNum.toString() + ".jpg";
}
