
// describe("calculate monthly payment", ()=>{
//   beforeEach(()=>{
//     const values = {
//       amount: 20000,
//     rate: 4.5,
//     year: 4
//     }
//     calculateMonthlyPayment()
// })

it('should calculate the monthly rate correctly', ()=>{
  const values = {
  amount: 20000,
  rate: 4.5,
  year: 4
  }
  //calculateMonthlyPayment()
  expect(calculateMonthlyPayment(values)).toBe('456.07')
})

it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 20043,
    rate: 5.8,
    year: 8
  };
  //calculateMonthlyPayment()
  expect(calculateMonthlyPayment(values)).toEqual('261.45')
});

