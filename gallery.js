var currentGallery;
var currentImageNr = 1;
var numberOfImages = 0;

let prevNavigator;
let nextNavigator;

let descriptions = [];


async function initializeGallery(galleryName, numberOfImages) {
    await fetch(`/resources/galleryDescriptions/${galleryName}.json`).then(response => response.json()).then(result => {
        descriptions = result.descriptions;
    }).catch(e => console.log("something went wrong."))

    currentGallery = galleryName;
    currentImageNr = 1;
    this.numberOfImages = numberOfImages;

    let currentImage = document.getElementById('current-image');
    currentImage.src = "https://media.mtts.ch/righetti/images/gallery/" + currentGallery + "/img (" + currentImageNr + ").webp";

    let description = document.getElementById('gallery-image-description');
    description.innerText = descriptions[currentImageNr - 1]


    nextNavigator = document.getElementById('next-image');
    nextNavigator.addEventListener('mousedown', nextImage);
    prevNavigator = document.getElementById('previous-image');
    prevNavigator.addEventListener('mousedown', previousImage);
    checkNavigationVisiblity()
}

function previousImage() {
    let currentImage = document.getElementById('current-image');
    currentImageNr--;
    currentImage.src = "https://media.mtts.ch/righetti/images/gallery/" + currentGallery + "/img (" + currentImageNr + ").webp";

    let description = document.getElementById('gallery-image-description');
    description.innerText = descriptions[currentImageNr - 1]
    checkNavigationVisiblity();
}

function nextImage() {
    console.log("moin")
    let currentImage = document.getElementById('current-image');
    currentImageNr++;
    currentImage.src = "https://media.mtts.ch/righetti/images/gallery/" + currentGallery + "/img (" + currentImageNr + ").webp";

    let description = document.getElementById('gallery-image-description');
    description.innerText = descriptions[currentImageNr - 1];
    checkNavigationVisiblity();
}

function checkNavigationVisiblity() {
    if (currentImageNr === 1) {
        prevNavigator.style.visibility = "hidden"
    } else {
        prevNavigator.style.visibility = ""
    }

    if (currentImageNr === numberOfImages) {
        nextNavigator.style.visibility = "hidden";
    } else {
        nextNavigator.style.visibility = ""
    }
}