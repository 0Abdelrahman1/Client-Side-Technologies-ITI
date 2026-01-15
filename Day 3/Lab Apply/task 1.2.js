var sum = 0

for (var i = 0; sum <= 100; i++)
{
    let input
    while (isNaN(input))
        input = parseInt(prompt("enter number #" + i));
    if (!input)
        break;
    sum += input;
}

console.log("sum = " + sum);