(function(){
    'use-strict';
    // Task 1: Create a variable to hold currentImage, images
    let currentImage = 0;
    let myImages = ["slides/1.jpg", "slides/2.jpg", "slides/3.jpg", "slides/4.jpg"];

    // Task 2: get the container, prvBtn and nextBtn using the dom id
    let container = document.getElementById("content");
    let prevBtn = document.getElementById("previous");
    let nextBtn = document.getElementById("next");
    // Task 3: Use Event Listener to get the event for next image
    nextBtn.addEventListener("click", function(event) {
        event.preventDefault()

        currentImage++;
        if(currentImage > myImages.length -1){currentImage = 0}

        let newSlide = document.createElement("img");
        newSlide.src = myImages[currentImage];
        newSlide.className = 'fadeinimage';
        container.appendChild(newSlide);

        if(container.children.length > 2){container.removeChild(container.children[0])}
    })
    // Task 3: Use Event Listener to get the event for previous image
    prevBtn.addEventListener("click", function(event) {
        event.preventDefault();

        currentImage--;
        if(currentImage < 0) {currentImage = myImages.length - 1}

        let newSlide = document.createElement("img");
        newSlide.src = myImages[currentImage];
        newSlide.className = 'fadeinimage';
        container.appendChild(newSlide);

        if(container.children.lenght > 2) {container.removeChild(container.children[0])}
    })
})()