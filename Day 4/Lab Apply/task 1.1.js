var s = prompt("enter ur str");
var c;
while ((c = prompt("enter ur char to count")).length != 1);
var cs = confirm("do you want it case sense?");

if (!cs)
    s = s.toLowerCase(), c.toLowerCase();

var ans = 0;
for (let i = 0; i < s.length; i++)
    if (s[i] == c)
            ans++;

console.log(ans)