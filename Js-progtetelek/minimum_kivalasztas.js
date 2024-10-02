const x=[-13,0,12,-2,14,15,-15,44,75];
let min=0;

const minimum_kivalasztasa=(x, min) =>{ 
    min=[0]; 
    index=null;
    for(let i=0; i<x.length; i++) {
        if(x[i]<min){
            min=x[i];
            index=i;
        }
    }
    console.log("A legkisebb szam: "+min+" ami a tomb "+index+". eleme.")
}

minimum_kivalasztasa(x, min);