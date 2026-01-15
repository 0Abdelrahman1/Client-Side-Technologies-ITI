function largest(s)
{
    let ss = s.split(" ")

    let mx = 0, ms = ""
    for (let i = 0; i < ss.length; i++)
        if (ss[i].length > mx)
            mx = ss[i].length, ms = ss[i];
    return ms;
}


console.log(largest(prompt("enter ur text")));