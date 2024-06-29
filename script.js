
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

//start off the carousel
showImage(currentIndex);
