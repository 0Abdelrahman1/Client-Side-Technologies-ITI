var ch = window, mid, dir = 1;
function start()
{
    ch.focus();
    if (mid) return; 
    ch = open("child1.html", "", "width=250,height=250");
    ch.moveTo(screen.width / 2 - 125, 0)
    mid = setInterval(function () 
    {
        if (ch.screenY + 250  == screen.availHeight)
            dir = -1;
        if (!ch.screenY)
            dir = 1;
        ch.resizeTo(250, 250);
        ch.moveBy(0, dir);
    }, 5)
}

function stop()
{
    ch.focus();
    clearInterval(mid);
}

function Close()
{
    ch.focus();
    clearInterval(mid);
    ch.close();
    mid = undefined
}