async function t() {
  try {
    let [result, result2] = await Promise.all([
      Promise.resolve(1),
      Promise.resolve(2),
    ]);
    return [result, result2];
  } catch (err) {
    //=>捕获错误
  }
}
t().then((value) => console.log(value));
