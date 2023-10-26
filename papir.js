function getCalc() {
    let papirtipus = document.getElementById('papirtipus').value;
    let szelesseg = document.getElementById('szelesseg').value;
    let magassag = document.getElementById('magassag').value;

    let terulet = Math.round((szelesseg*magassag)/10000);
    let koltseg = terulet * papirtipus;

    // if (magassag < 50 || szelesseg < 50) {
    //     alert("Ellenőrizze az adatokat!");
    // }
    terulet = document.getElementById('terulet').innerText;
    koltseg = document.getElementById('koltseg').innerText;
}