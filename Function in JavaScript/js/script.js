//برنامه یی نوشتیم که اولیه بودن یا مرکب بودن یک عدد را تشخیص می‌دهد
function isPrime(number) {
  for (var i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(20));
console.log(isPrime(11));
