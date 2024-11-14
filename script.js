let pokemonList = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];

// Answers

// Question 1 Use JavaScript to update your name in the corresponding blue box Each person will work on their name and box (host, participant 1, etc) No event listener needed for this step

document.getElementById("host-name").textContent = "Alan";
document.getElementById("collaborator-name").textContent = "Gagna";


// Question 2
// You can also create their own CSS classes in style.css file and use that. 




// Question 3
// Try change event first
// There is another event which fires for every character. This is what we want to use.

let firstNameInput = document.getElementById("first_name");
let lastNameInput = document.getElementById("last_name");
firstNameInput.addEventListener('input', function () {
    if (firstNameInput.value.toLowerCase() === "john") {
        lastNameInput.value = "Doe";
    }
});

// Question 4
// Try change event first
// There is another event which fires for every character. This is what we want to use.

document.getElementById("first_name").addEventListener("input", (e) => {
    if (e.target.value.toLowerCase() === "john") {
        document.getElementById("last_name").value = "Doe";
    }
    else{
        lastNameInput.value = " ";
    }
});

// Question 5
// Try change event first
// There is another event which fires for every character. This is what we want to use.




//Question 6





//Question 7 





//Question 8

let colorPicker = document.getElementById('color-picker');
colorPicker.addEventListener('input', function (event) {
    let selectedColor = event.target.value;
    document.body.style.backgroundColor = selectedColor;
});

//Question 9 

