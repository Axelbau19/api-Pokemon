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
    cloneTemplate.querySelector('.card-body-title').innerHTML = `${pokemon.name}<span> ${pokemon.hp} HP</span>`;
    cloneTemplate.querySelector('.card-body-text').textContent = `${pokemon.exp} Exp`;
    cloneTemplate.querySelector('.card-footer-social:nth-child(1) h3').textContent = pokemon.attack;
    cloneTemplate.querySelector('.card-footer-social:nth-child(2) h3').textContent = pokemon.defense;
    cloneTemplate.querySelector('.card-footer-social:nth-child(3) h3').textContent = pokemon.specialAttack;
    frangm.appendChild(cloneTemplate);
    flexBox.appendChild(frangm);
} 

const fecthData = async(urlApi) =>{
    try{
        const response = await fetch(urlApi);
        const data = await response.json();
        console.log(data);
        const pokemon = {
            img: data.sprites.other.dream_world.front_default,
            name: data.name,
            hp: data.stats[0].base_stat,
            exp: data.base_experience,
            attack: data.stats[1].base_stat,
            defense:data.stats[2].base_stat,
            specialAttack:data.stats[3].base_stat
        }
        pintCard(pokemon);
    }catch(error){
        console.log(error);
    }
}

document.addEventListener('DOMContentLoaded', () =>{
    fecthData(`${API}/pokemon/${getAnumber}`);
});



