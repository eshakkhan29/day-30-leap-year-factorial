

// ফেক্টোরিয়ার হচ্ছে  =  
//  ২ = ১*২
//  ৫ = ১*২*৩*৪*৫

/*
factorial এর ক্ষেত্রে ইনিশিয়াল মান ১ ধরে নিতে হবে, নাহয় গুন করার সময় বার বার ০ হয়ে যাবে ।
কারন ০ এর সাথে যাই গুন করা হয় না কেনো সব ০ হয়ে যায়।
*/
// facrotial loop
// rools without *
/* 
let man = 1;
for (let i = 1; i < 5; i++) {
        man = man * i;
        console.log(man);
}
*/

// factorial in funtion for loop
let fectValue = 1;
function factorial(fectMan) {
    for (let i = 1; i < fectMan; i++) {
        fectValue = fectValue * i;
    }
    return fectValue;
}
const amarFacto = 7;
const fact = factorial(amarFacto);
console.log(fact);

// factorial in funtion while loop


function factfunc(wfactvalue) {
    let initValue = 1;
    let i = 1;
    while (i < wfactvalue) {
        initValue = initValue * i;
        i++;
    }
    return initValue;
}
const amarFact = 8;
const chake = factfunc(amarFact);
console.log(chake);