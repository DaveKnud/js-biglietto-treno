//General variables
let numberKm,agePassenger,normalPrice,minorsPrice,over65Price,finalPrice;
//Constant
const pricePerKm = 0.21;


//Ask Number Km
numberKm = prompt("How many km do you wanna do?");
console.log(numberKm)


// Ask Age Passenger
agePassenger = prompt("How old are you?");
console.log(agePassenger);

//Calculate Normal Price
normalPrice = numberKm * pricePerKm;
console.log(normalPrice)


//CONDITIONS

//Discount minors 20%
if (agePassenger < 18) {
    minorsPrice = normalPrice - ((20 / 100) * normalPrice);
    console.log(minorsPrice);
}

else if (agePassenger > 65) {
        over65Price = normalPrice - ((40 / 100) * normalPrice);
        console.log(over65Price)
}

else {
    finalPrice = normalPrice;
}


//Output



