var currentGallery;
var currentImageNr = 1;
var numberOfImages = 0;

let prevNavigator;
let nextNavigator;

const descriptions = [
    "",
    "S.M. König Fu’ad II von Ägypten, I.K.H. Prinzessin Léa von Belgien, S.E. Wael Elsayed Gad, Botschafter von Ägypten in der Schweiz, Gastgeber Claudio Righetti",
    "Begrüssung der Gäste",
    "Giovanni S. Rondanini, Vize-Präsident Le Club des Leaders, Gastgeber Claudio Righetti, Tracey Amon, Jean-Sébastien Robine, Präsident Le Club des Leaders",
    "S.M. König Fu’ad II von Ägypten und I.K.H. Prinzessin Léa von Belgien – beim anschliessenden Diner im Cercle de la Grande Société de Berne",
    "S.M. König Fu’ad II von Ägypten, Martin Schlup (Grossratspräsident Kanton Bern) mit Partnerin Monika Flükiger",
    "Diner Cercle de la Grande Société de Berne "
]


function initializeGallery(galleryName, numberOfImages) {
    currentGallery = galleryName;
    currentImageNr = 1;
    this.numberOfImages = numberOfImages;

    let currentImage = document.getElementById('current-image');
    currentImage.src = "/img/talks/" + currentGallery + "/" + currentImageNr + ".jpg";

    let description = document.getElementById('gallery-image-description');
    description.innerText = descriptions[currentImageNr]


    nextNavigator = document.getElementById('next-image');
    nextNavigator.addEventListener('mousedown', nextImage);
    prevNavigator = document.getElementById('previous-image');
    prevNavigator.addEventListener('mousedown', previousImage);
    checkNavigationVisiblity()
}

function previousImage() {
    let currentImage = document.getElementById('current-image');
    currentImageNr--;
    currentImage.src = "/img/talks/" + currentGallery + "/" + currentImageNr + ".jpg";

    let description = document.getElementById('gallery-image-description');
    description.innerText = descriptions[currentImageNr]
    checkNavigationVisiblity();
}

function nextImage() {
    console.log("moin")
    let currentImage = document.getElementById('current-image');
    currentImageNr++;
    currentImage.src = "/img/talks/" + currentGallery + "/" + currentImageNr + ".jpg";

    let description = document.getElementById('gallery-image-description');
    description.innerText = descriptions[currentImageNr];
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