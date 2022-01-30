

// leap year chake 
// প্রতি ৪ বছর পর পর যে ফেব্রুয়ারি বাসে ২৯ তারিখ হয় তাকে লেপ ইয়ার বলে।

// এটা সহজে বের করতে সাল কে ৪ দিয়ে ভাগ করলে যদি ভাগ শেষ ০ হয় তাহলে  সেটাকে লেপ ইয়ার বলে ।

function leapYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    else{
        return false;
    }
}
let myYear = 2200;
let chakeLepY = leapYear(myYear);
console.log(chakeLepY);



//  true rools 

// function leapYear(year) {
//     if (((year % 400 === 0) || (year % 100 !== 0)) && ((year % 4) == 0)) {
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// let myYear = 2200;
// let chakeLepY = leapYear(myYear);
// console.log(chakeLepY);
 