const pokemonContainer = document.querySelector('.pokemon-container')
let pokemonName = undefined
// const revealName = document.querySelector('.reveal-name')

// Fetch a Pokemon by id
function fetchPokemon(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then( data=> data.json())
    .then( pokemon=>{
        createPokemon(pokemon)
        pokemonName = pokemon.name
        // revealName.textContent = pokemonName
        })
}

// Init Fetchpokemon with a random number
fetchPokemon(Math.floor(Math.random() * 899))

// Create Pkemon Image
function createPokemon(pokemon){
    const card = document.createElement('div')
    card.classList.add('pokemon-card')

    const spriteContainer = document.createElement('div')
    spriteContainer.classList.add('img-container')

    const sprite = document.createElement('img')
    sprite.src = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.id}.png`
    sprite.setAttribute('draggable', 'false')
    spriteContainer.appendChild(sprite)

    card.appendChild(spriteContainer)

    pokemonContainer.appendChild(card)
}   


// Form validate
const input = document.querySelector('.input')
const submit = document.querySelector('.submit')
const res = input.value

submit.addEventListener('click', ()=>{
switch (input.value){
    case '':
        alert('Please, insert a Pokemon')
        break

    // Correct
    case pokemonName:
        document.querySelector('.img-container').classList.add('reveal')
        // refresh()
        break

    // Wrong
    default:
        if(res != pokemonName){
            // ..
        }
        break;
}
})

// Refresh
function refresh(){
    document.querySelector('.pokemon-card').remove()
    fetchPokemon(Math.floor(Math.random() * 899))
}
