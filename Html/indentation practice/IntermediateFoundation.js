//1
var temp=0;
function sigma(num){
for (var i=1; i<=num; i++){
temp+=i
}

console.log(temp);
}
sigma();


//2
function factorial(){
    var num=1;
    var number =prompt("Enter Number");
    
    for(var i=1; i<=number; i++){
    num = num * i;
    }
    
    return num;
    }
    var z=factorial();
    console.log(z);

//3
var temp=0;
function Fibonacci(num){
arr=[4,5]
for (var i=2; i<=8; i++){
arr.push(arr[i-2]+arr[i-1]);
}

console.log(arr);
}
Fibonacci(3);


//4
function second(arr){
    for (var i =0; i<arr.length; i++){
    
    if(arr.length <= 2){
                console.log("Null");
            }
            else {
                console.log(arr[arr.length-2]);
    }
    }}
    second([3,5,7,8]);

//5
function second(arr,n){
    console.log(arr[arr.length-n]);
   }
   second([3,4,5,50,34,10,1000,6],4);

//6


function Smax(arr){
    var max1=arr[0]; 
    var max2=arr[0];
    for(var i=0; i<arr.length; i++){
    if(arr[i]>max1){
    max2=max1;
    max1= arr[i];}
    
    if (max2<arr[i] && arr[i]<max1){
    max2=arr[i]}
    
    
    }
    console.log(max1);
    console.log(max2);
    }
    Smax([2,3,4,1,6,4,8,-9,11,100,34,44,99,12,3,4,5,3,2]);

    //7
    var newa=[];
function double(arr){
for (var i=0; i<arr.length; i++){
newa.push(arr[i]);
newa.push(arr[i]);

}
console.log(newa);
}
double([1,2,3]);
    
