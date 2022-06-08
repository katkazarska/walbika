window.onload = choosePic;

var imageCount = 31;
var folder = "images/";

function choosePic() {
    var randomNum = Math.floor(Math.random() * imageCount);
    document.getElementById('myPicture').src = folder + randomNum.toString() + ".jpg";
    document.getElementById('myPicture').alt = folder + randomNum.toString() + ".jpg";
}
