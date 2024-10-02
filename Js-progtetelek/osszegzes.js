const x=[-15,-73,49,94,52,44,84,11]; 
let osszeg=0;

const osszegzes=(x, osszeg) =>{
    for(let i=0;i<x.length;i++) osszeg+=x[i];

    console.log("A számok összege: "+osszeg);
}

osszegzes (x, osszeg);