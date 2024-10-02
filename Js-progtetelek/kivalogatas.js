const x=[-13,0,49,12,-2,14,15,-15,44,75];
let y=[];
let tulajdonsag=49;
let szamol=0;

const kivalogatas=(x, tulajdonsag, y) =>{ 
    for(let i=0; i <=x.length; i++) {
        if(x[i]==tulajdonsag) {
            y[szamol]=x[i];
            szamol+=1;
        }
    }
    console.log("a tomb elemei: "); 
    for(let i=0; i<y.length; i++) { 
        console.log("Y elem: "+y[i]);
    }
}
kivalogatas(x, tulajdonsag, y);