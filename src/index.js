console.log('%c HI', 'color: firebrick')

let dogCollection; //only used to display the results of dogFetch for debugging
let dogBreeds; // no longer needed for debugging 

document.addEventListener("DOMContentLoaded", function(){
    
    
    let imageFetch = fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(response => response.json())
    // .then(data => dogCollection = data.message)
    .then(data => data.message)
    .then(dogs => dogs.forEach(dog => renderDogImages(dog)));
    
    //fetch all the dog breeds using url 
    let breedFetch = fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    // .then((data) => {dogBreeds = data.message})
    .then(data => data.message)
    .then(dogs  => {
        // let breedList = breedArray(dogBreeds);
        // breedList.forEach(breed => renderBreeds(breed))
        Object.keys(dogs).forEach(breed => {
            let newBreed = renderBreeds(breed);  
            
        })
    });
    
    //add the breeds to the page in a <ul> tag 
});

function renderBreeds(breed){
    let breedUL = getBreedsUL();
    let breedLi = document.createElement('li');    
    breedLi.innerText = breed;
    breedUL.appendChild(breedLi);
    
    // breedLi.addEventListener('click', alert(`You clicked on ${breed}`));
return breedLi;
}
    
function breedArray(dogHash){
    
    let breedArray =  Object.keys(dogHash);
    console.log(breedArray);
    return breedArray;
}
    


function renderDogImages(dogImageURL){

    let imageContainer = getImageContainer();
    let newImage = document.createElement('img');
    newImage.src = dogImageURL;
    newImage.className = "dog-image";
    imageContainer.appendChild(newImage);
    
}

function getImageContainer(){

    return document.querySelector('#dog-image-container');
}

function getBreedsUL(){
    return document.querySelector('#dog-breeds');
}