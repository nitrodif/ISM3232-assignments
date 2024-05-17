let tips = bills.map(bill => calcTip(bill));
for (let i = 0; i < bills.length; i++) {
    console.log(`The bill was \$${[i]}, the tip was \$${[i]}, and the total value \$${[i]}`);
