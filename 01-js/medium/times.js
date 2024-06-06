/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let sum=0;
    let date = new Date();
    let time1=date.getTime();
    console.log(time1);
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    let date2=new Date();
    let time2=date2.getTime();
    console.log(time2);
    return (time2-time1)/1000;

}
console.log(calculateTime(10000000000));