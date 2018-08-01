// YOUR TASK: Add more pictures!
var pictures = ['./imgs/dog.jpg','./imgs/rome.jpeg','./imgs/car.jpeg','./imgs/pic1.jpeg', './imgs/pic2.jpeg','./imgs/beach.jpeg'];
var currentIndex = 0;

function showNextPicture() {
  currentIndex++; // increment current picture
  // if currentIndex is too large, start from the beginning again
  if (currentIndex >= pictures.length) {
    currentIndex = 0;
  }
  document.getElementsByTagName("img")[0].src=pictures[currentIndex];
  
}

document.getElementsByTagName("img")[0].addEventListener("click", function (event) {
	showNextPicture();
});
