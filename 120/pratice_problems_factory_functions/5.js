function createInvoice(obj = {}) {
  return {
    phone: obj.phone || 3000,
    internet: obj.internet || 5500,
    payments: [],

    total: function () {
      return this.phone + this.internet;
    },
    addPayment: function (obj) {
      this.payments.push(obj);
    },
    addPayments(obj) {
      for (let i of obj) {
        this.payments.push(i);
      }
    },
    paymentTotal: function () {
      return this.payments.reduce((sum, payment) => sum + payment.total(), 0);
    },
    amountDue: function () {
      return this.total() - this.paymentTotal();
    },
  };
}

function createPayment(services = {}) {
  return {
    internet: services.internet || 0,
    phone: services.phone || 0,
    amount: services.amount || 0,
    total: function () {
      return this.amount || this.internet + this.phone;
    },
  };
}

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({ amount: 2000 });
let payment2 = createPayment({
  phone: 1000,
  internet: 1200,
});

let payment3 = createPayment({ phone: 1000 });

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue()); // this should return 0
