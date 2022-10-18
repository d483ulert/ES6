setTimeout(function(){
    console.log("settimeout");
},1000)


setTimeout( ()=>{
    console.log("Arrow");
},1000)


let newArr = [1,2,3,4,5].map( (v) =>v *2
);

console.log(newArr);


const myObj = {
    runTimeout(){
        setTimeout(()=>{
            console.log(this === window);
            this.printData();
        },2000);
    },
    printData(){
        console.log("hi codesquad");
    }
}
myObj.runTimeout;



function sum(value,size={value:1}){
    return value*size.value;
}
console.log(sum(3,{value:3}));


//rest parameter

function checkNum(){
    const argArray = Array.prototype.slice.call(arguments);
    console.log(argArray);

    let result = argArray.every((v) => typeof v ==="number")
    console.log(result);
}

const result = checkNum(10,2,3,4,5,"55");