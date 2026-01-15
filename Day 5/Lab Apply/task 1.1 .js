let n;
while(!(n = Number(prompt("enter number of elements"))));

let arr = [], x
for (let i = 1; i <= n; i++)
{
    while(!(x = Number(prompt("enter element #" + i))));
    arr.push(x);
}

console.log("ascending : " + arr.sort())
console.log("decending : " + arr.sort((a, b) => b - a))




