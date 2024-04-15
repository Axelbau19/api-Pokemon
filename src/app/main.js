const API = 'https://pokeapi.co/api/v2/';
//get a number random
const numberRandom =(max) => {
    return Math.floor(Math.random()*max);
}
const getAnumber = numberRandom(100);

const pintCard = (pokemon) => {
    console.log(pokemon)
    const flexBox = document.querySelector('.flex');
    const template = document.querySelector('#template-card').content;
    //clone template
    const cloneTemplate = template.cloneNode(true);
    const frangm = document.createDocumentFragment();
    //setName
    cloneTemplate.querySelector('.card-body-img').setAttribute('src',pokemon.img);
    cloneTemplate.querySelector('.card-body-title').innerHTML = `${pokemon.name}<span>26</span>`;
    frangm.appendChild(cloneTemplate);
    flexBox.appendChild(frangm);
} 

const fecthData = async(urlApi) =>{
    try{
        const response = await fetch(urlApi);
        const data = await response.json();
        const pokemon = {
            img: data.sprites.other.dream_world.front_default,
            name: data.name
        }
        pintCard(pokemon);
    }catch(error){
        console.log(error);
    }
}

document.addEventListener('DOMContentLoaded', () =>{
    fecthData(`${API}/pokemon/${getAnumber}`);
});



