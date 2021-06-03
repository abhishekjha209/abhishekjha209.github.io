const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const galleryImages = document.querySelectorAll('.gallery-img');
currentlySelected = 0;

prevBtn.addEventListener('click', function(){
    galleryImages[currentlySelected].classList.remove("active");
    currentlySelected--;
    galleryImages[currentlySelected].classList.add("active");
    nextBtn.disabled = false;
    if(currentlySelected===0){
        prevBtn.disabled = true;
    }
})

nextBtn.addEventListener('click', function(){
    galleryImages[currentlySelected].classList.remove("active");
    currentlySelected++;
    galleryImages[currentlySelected].classList.add("active");
    prevBtn.disabled = false;
    if(galleryImages.length===currentlySelected + 1){
        nextBtn.disabled = true;
    }
})