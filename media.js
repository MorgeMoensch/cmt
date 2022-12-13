const publicationsAnchor = document.getElementById('media-articles');


window.onload =  async () => {
    fetch('/resources/media.json').then(response => response.json()).then(
        result => {
            for(let publication of result.articles) {
                createPublicationDOMElement(publication)
            }
        }
    )
};

function createPublicationDOMElement(publication) {
    let wrapper = document.createElement('div');
    let title = document.createElement('a');
    let subtitle = document.createElement('p')

    wrapper.classList.add('media-article');
    title.classList.add('media-article-title');
    subtitle.classList.add('media-article-subtitle');

    title.innerText = publication.title;
    title.href = publication.link;

    subtitle.innerText = `${publication.publisher}, ${publication.publishingDate}`

    wrapper.append(title, subtitle);
    publicationsAnchor.append(wrapper);
}