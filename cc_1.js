let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was \$${bill}, the tip was \$${tip}, and the total value \$${bill + tip}`);
function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  console.log(calcTip(100)); // should print 15
