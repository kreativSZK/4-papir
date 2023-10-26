function checkPapirJs() {
    // Ellenőrizzük, hogy a papir.js script elem létezik az oldalon
    const papirJsScript = document.querySelector('script[src*="papir.js"]');
  
    if (papirJsScript) {
      console.log('A papir.js script elem hozzá van csatolva az oldalhoz.');
    } else {
      console.error('Hiba: A papir.js script elem nincs hozzácsatolva az oldalhoz.');
    }
  }
  
  // Az oldal betöltődésekor futtatjuk a tesztet
  window.addEventListener('load', checkPapirJs);
  