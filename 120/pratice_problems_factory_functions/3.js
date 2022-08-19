function createInvoice(obj={}) {
  return {
    phone: obj.phone || 3000,
    internet: obj.internet ||5500,
    total: function () {
      return this.phone + this.internet;
    }
}
}

function invoiceTotal(invoices) {
  let total = 0;

  for (let index = 0; index < invoices.length; index += 1) {
    total += invoices[index].total();
  }

  return total;
}

let invoices = [];
console.log(invoices.push(createInvoice()));
console.log(invoices.push(createInvoice({ internet: 6500 })));
console.log(invoices.push(createInvoice({ phone: 2000 })));
console.log(
  invoices.push(
    createInvoice({
      phone: 1000,
      internet: 4500,
    })
  )
);

console.log(invoiceTotal(invoices)); // 31000
