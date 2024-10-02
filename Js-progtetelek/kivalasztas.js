const x=[-13,0,12,-2,14,15,84,-15,44,75];

let tulajdonsag=84;
let sorszam=null;

const kivalasztas=(x, tulajdonsag, sorszam) =>{
    let i=0;
    while (x[i] !=tulajdonsag){
        i+=1;
    }
    sorszam=i;

    console.log("A keresett elem a "+x[sorszam]+"mely a tomb "+sorszam+". eleme")
}

kivalasztas(x, tulajdonsag, sorszam);