const x=[-13,0,12,-2,14,15,-15,44,75];

let tulajdonsag=52;
let van=false;

const eldontes=(x, tulajdonsag, van)=>{
    let i=0;

    while(i<= x.length && x[i] != tulajdonsag) i+=1;

    if(i<=x.length) van=true;


    console.log("van ilyen tulajdonsagu elem: "+van);
}

eldontes(x, tulajdonsag, van);
