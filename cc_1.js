 console.log(calcTip(100)); // 15
let bills = [275, 40, 430, 125, 555, 44];
let tips = bills.map(bill => calcTip(bill));
let total = bills.map((bill, i) => bill + tips[i]);
for (let i = 0; i < bills.length; i++) {
    console.log(`The bill was \$${bills[i]}, the tip was \$${tips[i]}, and the total value \$${total[i]}`);
