const x=[-13,0,12,-2,14,15,-15,44,75];

let tulajdonsag=75; 
let sorszam=null;

const kereses=(x, tulajdonsag, sorszam) => {
    let i=0;

    while (i<=x.length && x[i]!=tulajdonsag) {
        i+=1;
    }
    if(i<=x.length) sorszam=i;
    else sorszam=-1;

    console.log("A keresett elem a "+x[sorszam]+" mely a tomb "+sorszam+". eleme");
}
kereses (x, tulajdonsag, sorszam)