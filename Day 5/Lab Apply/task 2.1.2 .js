var ch = open("child1.html", "", "width=250,height=250");

var mid = setInterval(function () 
    {
        ch.scrollBy(0, 20);
    }, 10)

ch.addEventListener('scroll', () => 
{
    // console.log(Math.ceil(ch.window.scrollY))
    // console.log(ch.document.documentElement.scrollHeight)
    // console.log(ch.window.innerHeight)
        // scrolled amount                 the full scrollable height        the visible area height
    if (Math.ceil(ch.window.scrollY) >= ch.document.documentElement.scrollHeight - ch.window.innerHeight)
        console.log("reached bottom"), clearInterval(mid), ch.close();

});

// https://www.youtube.com/watch?v=V9CY0F4Wc7M