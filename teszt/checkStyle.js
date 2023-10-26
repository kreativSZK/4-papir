// papirTest.js

function testPapirJSResultStyling() {
    const szelessegInput = document.getElementById('szelesseg');
    const magassagInput = document.getElementById('magassag');
    const papirtipusSelect = document.getElementById('papirtipus');
    const koltsegOutput = document.getElementById('koltseg');

    if (!szelessegInput || !magassagInput || !papirtipusSelect || !koltsegOutput) {
        console.error('Hiba: Az űrlap vagy eredmény elemek nem találhatók.');
        return;
    }

    // Beállítjuk az űrlap értékeit
    szelessegInput.value = 210;
    magassagInput.value = 420;
    papirtipusSelect.value = '32';

    // Hívjuk meg a getCalc függvényt
    getCalc();

    // Ellenőrizzük, hogy a koltsegOutput félkövér és fehér háttérrel van-e formázva
    const computedStyle = getComputedStyle(koltsegOutput);
    const fontWeight = computedStyle.getPropertyValue('font-weight');
    const backgroundColor = computedStyle.getPropertyValue('background-color');

    if (fontWeight === '700' && backgroundColor === 'rgb(255, 255, 255)') {
        console.log('Az eredmény félkövér és fehér háttérrel jelenik meg.');
    } else {
        console.error('Hiba: Az eredmény nem megfelelően van formázva.');
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

window.addEventListener('load', testPapirJSResultStyling);
