
let currentIndex = 0;

function showImage(index) {
  const images = document.querySelectorAll(".carousel-item");
  const totalImages = images.length;

    //calculate overflow
  if (index >= totalImages) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalImages - 1;
  } else {
    currentIndex = index;
  }

//make the image move horizontal
  const newTransformValue = -currentIndex * (100/3) + '%';
  document.querySelector('.carousel-inner').style.transform = `translateX(${newTransformValue})`;

  // Update active class
  images.forEach((image, i) => {
      image.classList.toggle('active', i === currentIndex);
  });


}

function nextImage() {
  showImage(currentIndex + 1);
}

function prevImage() {
  showImage(currentIndex - 1);
}

const btnNext = document.querySelector(".next");
btnNext.addEventListener("click", nextImage);

const btnPrev = document.querySelector(".previous");
btnPrev.addEventListener("click", prevImage);


//bottom navigation circle function
const circleButtons = document.querySelectorAll('.circles button');
circleButtons.forEach(button => {
  button.addEventListener('click', () => {
    const index = parseInt(button.getAttribute('class'));
    showImage(index);
  });
});




//start off the carousel
showImage(currentIndex);


//every 5 second go next image
setInterval(nextImage,5000);