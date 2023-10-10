const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");


let photosArray = [];

const count= 10;
const apiKey =`rvGYVE4GspQFvE_i4W5o5cV-eOcH1WTttCSrxpBz3ds`;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;



// helper function to set attributes on DOM
function setAttribute(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

function displayPhotos (){
    
    photosArray.forEach((photo) => {
        const item = document.createElement(`a`);
        
        setAttribute(item, {
            href:photo.links.html,
            target: `_blank`,
        });
        const img =document.createElement(`img`);
    
        setAttribute(img, {
            src:photo.urls.regular,
            alt:photo.alt_description,
            title:photo.alt_description,
        });

        console.log(getPhotos);

        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

async function getPhotos () {
    try {
        const response = await fetch (apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        // catech error here
    }
}

// check to see if scrolling near bottom of page, load more photos
window.addEventListener(`scroll`, () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
        getPhotos();

    }
});

getPhotos();