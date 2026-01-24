function getCookie(cookieName)
{
    if (arguments.length != 1) throw new Error("Incorrect Number of Arguments");
    if (typeof cookieName != 'string') throw new Error("cookieName Must be String");
    var cks = document.cookie.split("; ")
    for (let i = 0; i < cks.length; i++)
        if (cks[i].split('=')[0] == cookieName)
        {
            let v = cks[i].split('=')[1];
            return v.at(-1) == ';' ? v.substring(0, v.length - 1) : v;
        }
    return "";
}

function setCookie(cookieName, cookieValue, expiryDate)
{
    if (![2,3].includes(arguments.length)) throw new Error("Incorrect Number of Arguments");
    if (typeof cookieName != 'string') throw new Error("cookieName Must be String")
    if (arguments.length == 3) if (!(expiryDate instanceof Date) || !expiryDate.getTime()) throw new Error("expiryDate is invalid date or not from Date Object");
    if (expiryDate)
        document.cookie = `${cookieName}=${cookieValue};expires=${expiryDate}`;
    else
        document.cookie = `${cookieName}=${cookieValue};`;
}

function deleteCookie(cookieName)
{
    if (arguments.length != 1) throw new Error("Incorrect Number of Arguments");
    if (typeof cookieName != 'string') throw new Error("cookieName Must be String");
    
    if (hasCookie(cookieName))
    {
        document.cookie = cookieName + "=";
        return true;
    }
    return false;
}

function allCookieList()
{
    if (arguments.length) throw new Error("Incorrect Number of Arguments");
    return document.cookie;
}

function hasCookie(cookieName)
{
    if (arguments.length != 1) throw new Error("Incorrect Number of Arguments");
    if (typeof cookieName != 'string') throw new Error("cookieName Must be String");
    return !!getCookie(cookieName);
}