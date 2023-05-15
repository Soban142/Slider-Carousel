let  carousels = document.querySelectorAll('.carousel')
let  prevBtn= document.querySelector('.prevBtn')
let  nextBtn= document.querySelector('.nextBtn')

carousels.forEach(function (carousel, counter) {
  carousel.style.left = `${counter * 100}%`
  console.log(carousel)
});

let counter = 0;

nextBtn.addEventListener('click', function () {
  counter++;
  slider();
})

prevBtn.addEventListener('click', function () {
  counter--;
  slider();
})

function slider(){
  if(counter < 0){
    counter = 0;
  }

  if(counter > carousels.length - 1){
    nextBtn.classList.remove('hidden')
  }
  else{
    nextBtn.classList.add('hidden')
  }

  if(counter > 0){
    prevBtn.classList.remove('hidden')
  }
  else{
    prevBtn.classList.add('hidden')
  }

  carousels.forEach(function (carousel) {
    carousel.style.transform = `translateX(-${counter * 100}%)`;
  })
}


prevBtn.classList.add('hidden')