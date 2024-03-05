//برنامه یی نوشتیم که اولیه بودن یا مرکب بودن یک عدد را تشخیص می‌دهد
var counter = 0;
var num = 7;

for (var i = 1; i <= num; i++) {
  if (num % i == 0) {
    counter++;
  }
}
if (counter == 2) {
  console.log("عدد اولیه است");
} else {
  console.log("عدد مرکب است");
}
