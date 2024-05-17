let tips = bills.map(bill => calcTip(bill));
for (let i = 0; i < bills.length; i++) {
    console.log(`The bill was \$${bills[i]}, the tip was \$${tips[i]}, and the total value \$${total[i]}`);
function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
