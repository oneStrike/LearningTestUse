let test = '绫';
setTimeout(() => {
  test = '平野';
}, 1000);
console.log(test);
setTimeout(() => {
  console.log(test)
}, 1100);
export {
  test
};