var rows = parseInt(prompt("enter number of rows"))

for (var i = 1; i <= rows; i++)
{
    var s = ""
    for (var j = 0; j < i; j++)
        s += '*';
    console.log(s);
}