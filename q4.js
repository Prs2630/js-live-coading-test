// Q4Find the second Highest element from the array  
const arr = [12, 35, 1, 10, 34, 1]


arr.sort(function(a,b){
    return b-a;
});

console.log(arr[1]);