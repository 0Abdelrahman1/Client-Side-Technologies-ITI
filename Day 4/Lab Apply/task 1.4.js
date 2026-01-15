let s;
let reg;
reg = new RegExp("^[a-zA-z]+$")
do
{
    s = prompt("Enter ur Name");

}while(!reg.test(s));
let n = "name :" + s;



reg = new RegExp("^[0-9]{8}$")
do
{
    s = prompt("Enter ur Phone Number");

}while(!reg.test(s));
let pn = "Phone Number :" + s



reg = new RegExp("^01[0-2][0-9]{8}$")
do
{
    s = prompt("Enter ur Mobile Number");

}while(!reg.test(s));
let mn = "Mobile Number :" + s



reg = new RegExp("^[a-zA-z0-9]+@[a-zA-Z]+\.[a-z]+$")
do
{
    s = prompt("Enter ur email");

}while(!reg.test(s));
let em = "email :" + s



reg = new RegExp("^[RGB]$", "i")
do
{
    s = prompt("Enter ur color (R,G,B,r,g,b)");

}while(!reg.test(s));

if (s == 'R' || s == 'r')
    s = "red";
else if (s == 'G' || s == 'g')
    s = "green";
else if (s == 'B' || s == 'b')
    s = "blue";


console.log("%cWelcome message", "background: " + s + ";")
console.log("%cToday :" +  new Date(), "background: " + s + ";")
console.log("%c" + n, "background: " + s + ";")
console.log("%c" + pn, "background: " + s + ";")
console.log("%c" + mn, "background: " + s + ";")
console.log("%c" + em, "background: " + s + ";")

