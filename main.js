const rickElement = document.querySelector('.rick-div');


fetch('https://rickandmortyapi.com/api/character')
    .then(function(response) {
        return response.json()
    }).then(function(responseJSON) {
        shoowRick(responseJSON)
    })
    .catch((e) => {
        console.log(e);
    });

    const mortyElement = function (tegName, className) {
        const element = document.createElement(tegName);
        element.classList.add(className);
        return element;
    };

function shoowRick (JSONObj) {
    const rickmorty = JSONObj.results;

    console.log(rickmorty);  


    for(let i = 0; i <= rickmorty.length; i++ ) {
        const article = mortyElement ('article', 'card');
        const characterImg = mortyElement('img', 'character__img');
        const title = mortyElement('h2', 'card__title');
        const characterStatus = mortyElement('span','character__status');
        const characterSpecies = mortyElement('span','character__species');
        const characterGender = mortyElement('a','character__gender')
 
        characterImg.src = rickmorty[i].image;
        title.textContent = rickmorty[i].name;
        characterStatus.textContent = rickmorty[i].status;
        characterSpecies.textContent = rickmorty[i].species;
        characterGender.textContent = rickmorty[i].gender;


        article.appendChild(characterImg);
        article.appendChild(title);
        article.appendChild(characterStatus);
        article.appendChild(characterSpecies);
        article.appendChild(characterGender);
    
        rickElement.appendChild(article);
    
    }  
}
