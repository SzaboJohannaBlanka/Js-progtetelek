const x=[-13,0,12,-2,14,15,-15]; 
let max=0;

const maximum_kivalasztas=(x, max) =>{
    max=x[0];
    index=null;
    for (let i=1; i < x.length; i++) {
        if (x[i]>max){
            max=x[i]; 
            index=i;
        }
    }
    console.log("A legnagyobb szam: "+max+" ami a tomb "+index+". eleme.");
}

maximum_kivalasztas(x, max);