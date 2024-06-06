function findSum(n){
    let ans=0;
    for(let i=0;i<n;i++){
        ans+=i;
    }
    console.log(ans);
    return ans;

}

function findsumtill100(){
    return findSum(100);
}


setTimeout(findsumtill100, 1000);
console.log("hello World");