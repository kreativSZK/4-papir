function testPapirJSIfStatements() {
    // Ellenőrizze, hogy a megfelelő elemek léteznek az oldalon
    const szelessegInput = document.getElementById('szelesseg');
    const magassagInput = document.getElementById('magassag');
    const papirtipusSelect = document.getElementById('papirtipus');

    if (!szelessegInput || !magassagInput || !papirtipusSelect) {
        console.error('Hiba: Az űrlap elemek nem találhatók.');
        return;
    }

    const testCases = [
        { szelesseg: 330, magassag: 420, papirtipus: '32', terulet: '14', koltseg: '448', koltsegColor: 'green' },
        { szelesseg: 297, magassag: 420, papirtipus: '65', terulet: '12', koltseg: '780', koltsegColor: 'red' },
        { szelesseg: 400, magassag: 420, papirtipus: '38', terulet: '17', koltseg: '646', koltsegColor: 'red' },
    ];

    for (const testCase of testCases) {
        szelessegInput.value = testCase.szelesseg;
        magassagInput.value = testCase.magassag;
        papirtipusSelect.value = testCase.papirtipus;

        // Hívjuk meg a getCalc függvényt
        getCalc();

        // Ellenőrizzük a terület és költség kimenetet
        const teruletOutput = document.getElementById('terulet').textContent;
        const koltsegOutput = document.getElementById('koltseg').textContent;
        const koltsegColor = document.getElementById('koltseg').style.color;

        if (teruletOutput === testCase.terulet && koltsegOutput === testCase.koltseg && koltsegColor === testCase.koltsegColor) {
            console.log('Az if részek jól működnek a teszt esetén.');
        } else {
            console.error('Hiba: Az if részek nem megfelelően működnek a teszt esetén.');
        }
        // Visszaállítjuk az űrlap alpértelmezett értékeit és kimeneti értékeit üresre
        szelessegInput.value = '297';
        magassagInput.value = '420';
        papirtipusSelect.value = '32';
        document.getElementById('terulet').textContent = "";
        document.getElementById('koltseg').textContent = "";
        document.getElementById('koltseg').textContent = "?";
        document.getElementById('koltseg').style.color="white"
        document.getElementById("koltseg").style.backgroundColor="";
        document.getElementById("koltseg").style.fontWeight="normal"
    }
}

window.addEventListener('load', testPapirJSIfStatements);
