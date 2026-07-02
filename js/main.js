// Griglia di "classificazione pixel" ispirata al cuore della tesi:
// ogni cella parte in scala di grigi (banda grezza) e viene rivelata
// nel suo falso colore (pianta / suolo / acqua) come farebbe il
// modello Random Forest passando sull'immagine.

(function () {
  const field = document.getElementById('classField');
  if (!field) return;

  const ROWS = 10, COLS = 10;
  const classes = ['on-veg', 'on-soil', 'on-water'];
  const weights = [0.42, 0.4, 0.18]; // più piante e suolo, meno acqua

  function pickClass() {
    const r = Math.random();
    let acc = 0;
    for (let i = 0; i < weights.length; i++) {
      acc += weights[i];
      if (r <= acc) return classes[i];
    }
    return classes[0];
  }

  const cells = [];
  for (let i = 0; i < ROWS * COLS; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell ' + pickClass();
    field.appendChild(cell);
    cells.push(cell);
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function revealSweep() {
    cells.forEach((cell, i) => {
      const col = i % COLS;
      const row = Math.floor(i / COLS);
      const delay = reduceMotion ? 0 : (col + row) * 22;
      setTimeout(() => cell.classList.add('revealed'), delay);
    });
  }

  function resetSweep() {
    cells.forEach((cell) => {
      cell.classList.remove('revealed');
      cell.className = 'cell ' + pickClass();
    });
  }

  // prima rivelazione quando la sezione entra in viewport
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        revealSweep();
        io.disconnect();
      }
    });
  }, { threshold: 0.4 });
  io.observe(field);

  // ambient re-classification: ogni tanto rigioca il pattern
  if (!reduceMotion) {
    setInterval(() => {
      resetSweep();
      revealSweep();
    }, 9000);
  }
})();
