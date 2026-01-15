function sleep_for(wait=5000)
{
    let st = Date.now();
    while (Date.now() < st + wait);
}

function test_sleep_for()
{
    console.log("before")
    sleep_for();
    console.log("after")
}