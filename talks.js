const publicationsAnchor = document.getElementById('talks-overview');


window.onload = async () => {
    fetch('/resources/talks.json').then(response => response.json()).then(
        async result => {
            await preloadImages(result.talks)
            for (let publication of result.talks) {
                createTalkDOMElement(publication)
            }
        }
    )
};

function createTalkDOMElement(publication) {
    /*
    <a class="cmt-block" href="gallery/fu-ad.html">
        <div class="img-wrap">
            <img src="img/chaletrighetti_edited.jpg"/>
            <div class="img-hover-description">Alt-Bundesrätin Micheline Calmy-Rey und Alt-Bundesrat Dr. Christoph Blocher</div>
        </div>
        <div class="cmt-block-date">30/08/2022</div>
        <div class="cmt-block-subtitle">Neutralität und Zukunft: die Schweiz am Scheideweg</div>
    </a>
     */
    let wrapper = document.createElement('a');
    let imageWrapper = document.createElement('div');
    let image = document.createElement('img');
    let description = document.createElement('div')
    let title = document.createElement('div');
    let date = document.createElement('div')

    wrapper.classList.add('cmt-block');
    wrapper.href = `gallery/${publication.id}.html`;

    imageWrapper.classList.add("img-wrap")
    image.src = `https://media.mtts.ch/righetti/images/gallery/thumbnails/${publication.id}/img (1).webp`
    image.loading = "lazy";
    description.classList.add("img-hover-description");

    date.classList.add("cmt-block-date");
    title.classList.add("cmt-block-subtitle");

    description.innerText = publication.description;
    date.innerText = publication.date;
    title.innerText = publication.title;

    imageWrapper.append(image, description);
    wrapper.append(imageWrapper, date, title)

    publicationsAnchor.append(wrapper);
}

async function preloadImages(talks) {
    return new Promise((resolve) => {
        for (let talk of talks) {
            let img = new Image();
            img.src = `https://media.mtts.ch/righetti/images/gallery/thumbnails/${talk.id}/img (1).webp`
        }
        resolve();
    })
}