// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(newName){
    return cats.push(newName); 
}

function destructivelyPrependCat(newName){
    return cats.unshift(newName);
}

function destructivelyRemoveLastCat(newName){
    return cats.pop(newName);
}

function destructivelyRemoveFirstCat(newName){
    return cats.shift(newName);
}

function appendCat(newName){
    let newCats = [...cats, newName];
    return newCats;
}

function prependCat(newName){
    let newCats = [ newName, ...cats];
    return newCats;
}

function removeLastCat(name){
    return cats.slice(0, cats.length - 1);
}

function removeFirstCat(name){
    return cats.slice(1);
}