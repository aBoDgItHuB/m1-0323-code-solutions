/* exported oddOrEven */
function oddOrEven(numbers) {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      result.push('even');
    } else {
      result.push('odd');
    }
  }

  return result;
}

console.log(oddOrEven([100, 121, 7]));
