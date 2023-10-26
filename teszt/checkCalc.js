function testGetCalcFunction() {
    // A szükséges bemeneti adatok definiálása (példa)
    const szelesseg = 297; 
    const magassag = 420; 
    const papir = 32;  
    // Az adott bemenetekkel történő hívás
    getCalc();
    
    // Az eredmények ellenőrzése
    const teruletResult = Math.round((szelesseg * magassag) / 10000);
    const koltsegResult = teruletResult * papir;

    const teruletElement = document.getElementById('terulet').innerHTML;
    const koltsegElement = document.getElementById('koltseg').innerHTML;
    
    if (parseInt(teruletElement) === teruletResult && parseInt(koltsegElement) === koltsegResult) {
        console.log('A számítások helyesek.');
    } else {
        console.error('Hiba: A számítások nem megfelelőek.');
    }
}

window.addEventListener('load', testGetCalcFunction);
