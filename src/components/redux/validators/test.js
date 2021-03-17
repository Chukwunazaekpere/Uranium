
let p = NaN
const phone = "858393rr9"
for(let i=0; i < phone.length; i++){
    let p = String(Number(phone[i])) === String(NaN) 
    console.log(p);
    if(p){
        console.log("Input in phone field is not a valid phone - number.");
    }
}



// let k = NaN;
// console.log();
// console.log("9" == String(k) );