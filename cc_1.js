  U74589834
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was \$${bill}, the tip was \$${tip}, and the total value \$${bill + tip}`);
function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  console.log(calcTip(100)); // should print 15
let bills = [275, 40, 430, 125, 555, 44];
  let tips = bills.map(bill => calcTip(bill));
  let total = bills.map((bill, i) => bill + tips[i]);
