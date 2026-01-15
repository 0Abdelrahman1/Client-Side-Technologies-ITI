let s = prompt("enter ur string")
let c = confirm("do u want case sense")

if (!c)
    s = s.toLowerCase();

let rs = ""

for (let i = s.length - 1; ~i; --i)
    rs += s[i];

if (rs == s)
    console.log("YES");
else
    console.log("NO");