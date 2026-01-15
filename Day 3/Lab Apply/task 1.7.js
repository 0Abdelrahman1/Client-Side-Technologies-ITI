var x,y,z

x = parseInt(prompt("x = "))
y = parseInt(prompt("y = "))
z = prompt("z = ")

var sum = 0;
var out = "";
if (z === "odd")
    if (x < y)
        for (var i = x; i <= y; i++)
            if (i % 2 == 1)
                sum += i, out += "" + i + " ";
            else;
    else
        for (var i = x; i >= y; i--)
            if (i % 2 == 1)
                sum += i, out += "" + i + " ";
            else;
else if (z === "even")
    if (x < y)
        for (var i = x; i <= y; i++)
            if (i % 2 == 0)
                sum += i, out += "" + i + " ";
            else;
    else
        for (var i = x; i >= y; i--)
            if (i % 2 == 0)
                sum += i, out += "" + i + " ";
            else;
else if (z === "no")
    if (x < y)
        for (var i = x; i <= y; i++)
            sum += i, out += "" + i + " ";
    else
        for (var i = x; i >= y; i--)
            sum += i, out += "" + i + " ";

console.log(out);
console.log("sum : " + sum)