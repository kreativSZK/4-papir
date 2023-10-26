function checkGetCalcFunction() {
    if (typeof getCalc === 'function') {
        console.log('A getCalc függvény elérhető az oldalon.');
    } else {
        console.error('Hiba: A getCalc függvény nem található az oldalon.');
    }
}

window.addEventListener('load', checkGetCalcFunction);
