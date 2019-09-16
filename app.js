/* let tip= [140, 45, 270];
let bill= calculateTip(bill); // put outiside of function 
let fullBill = ()
 */


function tipPaid(bill){
    let percentage; 
    if (bill < 50 ){
        percentage =.2;
    } else if (bill tip >=50 && tip < 200){
        percentage = .15;
    } else {
        percentage = .1;
    }
return percentage * bill;
}

const bills = [140,45,270];

const tips= [tipPaid(bill[0]),
]















/* if (tip < 50) {
    return(.20 * tip)
} else if (tip >50 && tip < 200){
    return(.15 * tip)
} else if (tip > 200) {
    return(.1 * tip);
} else {
    return('full bill');
}
}
console.log(tipPaid(0); , tipPaid(1), tipPaid(2)); */