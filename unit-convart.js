// km to metter 
function kmToMeter(km) {
    let meter = km * 1000;
    return meter;
}

let dekhmu = 10;
var kmtometerdekhao = kmToMeter(dekhmu);
console.log(kmtometerdekhao);

// meeter to km 

function mTokm(meter) {
    let km = meter / 1000;
    return km;
}
let kmdekhao = mTokm(57465);
console.log(kmdekhao);


// inc to feet 

function incToFeet(inc) {
    let feet = inc / 12;
    return feet;
}

let feetDekhao = incToFeet(46566);
console.log("feet :", feetDekhao);

// feet to inc

function feetToInc(feet) {
    let inc = feet * 12;
    return inc;
}
let incDekhao = feetToInc(1);
console.log("inc :", incDekhao);

// ghonta to munite 

function hourToMinute(hour) {
    let minute = hour * 60;
    return minute;
}
let hour = 2;
let minuteDekhao = hourToMinute(hour);
console.log("somoy min =" ,minuteDekhao);