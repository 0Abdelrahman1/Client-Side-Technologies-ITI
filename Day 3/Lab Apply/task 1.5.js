var s = parseInt(prompt("start: "))
var e = parseInt(prompt("end: "))
var sum = 0, m = 3
console.log("\nNumber multiple of 3: ")
for (var i = ~~((s + m - 1) / m) * m; i <= e; i += m)
{
    console.log(i + ",");
    sum += i;
}
console.log("\nNumber multiple of 5: ")
m = 5
for (var i = ~~((s + m - 1) / m) * m; i <= e; i += m)
{
    console.log(i + ",");
    sum += i;
}
console.log("\ntotal sum is " + sum);
