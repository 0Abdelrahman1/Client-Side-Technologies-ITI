var x = parseInt(prompt("x = "))
var y = parseInt(prompt("y = "))
var z = parseInt(prompt("z = "))

if (x % y && x % z)
    alert(x + " is not divisible by both " + y + " and " + z)
else if (x % y)
    alert(x + " is divisible by " + z + " only")
else if (x % z)
    alert(x + " is divisible by " + y + " only")
else
    alert(x + " is divisible by both " + y + " and " + z)
