const x = [-13, 0, 12, -2, 14, 15, -15, 44, 75];
let darab = 0;

const megszamlalas = (x, darab) => {
    for (let i = 0; i < x.length; i++) darab += 1;

    console.log("A tomb szamianak darabszama: " +darab);
}
megszamlalas(x, darab);