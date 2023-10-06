
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 500000,
    years: 30,
    rate: 5.2
  };
  expect(calculateMonthlyPayment(values)).toEqual('2745.55')
});

it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 100000,
    years: 15,
    rate: 6.25
  };
  expect(calculateMonthlyPayment(values)).toEqual('857.42')
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 500000,
    years: 30,
    rate: 5.258
  };
  expect(calculateMonthlyPayment(values)).toEqual('2763.50')
});

it('should calculate low rates', function () {
  const values = {
    amount: 500000,
    years: 30,
    rate: 1.12
  };
  expect(calculateMonthlyPayment(values)).toEqual('1635.91')
});

it('should calculate high rates', function () {
  const values = {
    amount: 500000,
    years: 30,
    rate: 20.89
  };
  expect(calculateMonthlyPayment(values)).toEqual('8721.64')
});

