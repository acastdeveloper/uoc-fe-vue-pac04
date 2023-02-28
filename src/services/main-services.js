// import { detectLocalPokes } from "@/services/db.js"

// import { randM } from "@/services/random.js"

// import { totalSpecs, getFetch } from "@/services/fetching"


export const total = totalSpecs();

// console.log(detectLocalPokes());

// console.log(totalSpecs());

// console.log(randM(total));


// import "./theme.js";
import { getFetch, totalSpecs } from "@/services/fetching.js";
import { randM } from "@/services/random.js";
import { setLocalPokes, getLocalPokes, detectLocalPokes, clearPokes } from "@/services/db.js";
// import { render, deletRender } from "./render.js";
// import { } from "./filter.js";

//reset
const reset = () => {
    console.clear();
    clearPokes();
    console.log("Des de reset");
    deletRender();
    main();
};

// Generació de cache local de Pokemons a l'atzar
export const getPokes = async () => {
    // Matriu que obtenim de l'api de pokemons a l'atzar
    let pokesM = await getFetch(randM(totalSpecs()));

    // Cas que encara no s'hagi guardat a la local storage del navegador ...
    while (!detectLocalPokes()) {
        // ...establim la caché de pokemons
        setLocalPokes(pokesM);
    }
    //retornem la caché de pokemons
    return getLocalPokes();
};

export const getLocalPokeById = (a) => {
    const M = getLocalPokes();

    console.log(M.filter(element => element.id == a)[0]);

    return M.filter(element => element.id == a)[0];

}
