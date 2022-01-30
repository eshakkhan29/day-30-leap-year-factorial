// chake even and odd number 

// odd number 

function oddNumber(songkha) {
    if (songkha % 2 != 0) {
        return true;
    }
    else {
        return false;
    }
}
let oddKinaDekhao = oddNumber(37);
console.log(oddKinaDekhao);


// even number 

function evenKina(man) {
    if (man % 2 == 0) {
        return true;
    }
    else{
        return false;
    }
}
let evenKinaDekho = evenKina(28);
console.log(evenKinaDekho);


// amar boyosh even naki odd ckake 

function chakMyAgeEvenOrAdd(age) {
    if (age % 2 == 0) {
        return true;
    }
    else{
        return false;
    }
}

let myAge = 24;
let chakeKoro = chakMyAgeEvenOrAdd(myAge);
console.log("amar boyos er sal even (24):" ,chakeKoro);
let boyos = 25;
let dekho = chakMyAgeEvenOrAdd(boyos);
console.log("amar boyos er sal odd (25):" ,dekho);