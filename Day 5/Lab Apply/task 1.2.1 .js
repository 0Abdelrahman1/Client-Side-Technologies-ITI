function showAddr(addr)
{
    return "" + addr.bn + " " + addr.street + ", " + addr.city + " city registered in " + addr.date;
}

addrObj = {
    street: "abc st.",
    bn : 15,
    city: "xyz",
    date: new Date().toLocaleDateString()
}

console.log(showAddr(addrObj))
