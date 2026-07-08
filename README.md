# Tobia Sacchetto — Portfolio

Sito portfolio personale, sviluppato in HTML, CSS e JavaScript puri (nessun framework, nessuna build).

🔗 **Live:** `https://tob1a.github.io` 

---

## Contenuto del sito

- **Home / Hero** — presentazione rapida con una griglia animata che simula la classificazione pixel-per-pixel di un'immagine satellitare (il tema centrale della tesi)
- **Chi sono** — breve bio e stack tecnico
- **Tesi di laurea** — *Random Forest su immagini satellitari per il riconoscimento e il conteggio di piante* (Università degli Studi di Ferrara, 2025–2026), con confronto tra i due modelli sviluppati (NIR+SWIR vs solo NIR) e riferimenti bibliografici
- **Contatti** — email, GitHub, LinkedIn

## Struttura della repository

```
.
├── index.html          # pagina principale
├── css/
│   └── style.css       # stili e design tokens (colori, font, layout)
└── js/
    └── main.js          # animazione della griglia di classificazione
```

## Stack tecnico

| Tecnologia | Utilizzo |
|---|---|
| HTML5 | Struttura della pagina |
| CSS3 | Layout, tema visivo, animazioni, responsive |
| JavaScript (vanilla) | Animazione interattiva della griglia di classificazione |
| Google Fonts | Space Grotesk, Inter, JetBrains Mono |

Nessuna dipendenza da installare, nessun bundler: è un sito statico puro.

## Come vederlo in locale

Basta un server statico qualsiasi, ad esempio:

```bash
python3 -m http.server 8000
```

poi apri `http://localhost:8000` nel browser. (Aprire direttamente `index.html` con doppio click funziona quasi tutto, tranne eventuali fetch — qui non ce ne sono, quindi va bene anche così.)

## Deploy su GitHub Pages

1. Vai su **Settings → Pages** nel repository
2. In *Build and deployment → Source*, seleziona **"Deploy from a branch"**
3. Scegli il branch (es. `main`) e la cartella `/ (root)`
4. Salva: dopo qualche minuto il sito sarà live all'URL mostrato in quella pagina

## Personalizzazione

- **Colori e font**: variabili CSS in cima a `css/style.css` (`:root { ... }`)
- **Testi e sezioni**: direttamente in `index.html`
- **Nuovo progetto**: duplica la sezione `<section class="section" id="project">` in `index.html` con id diverso e collegala alla nav

## Contatti

- Email: tobia.sacchetto@edu.unife.it
- GitHub: [github.com/Tob1a](https://github.com/Tob1a)
- LinkedIn: [linkedin.com/in/tobiasacchetto](https://www.linkedin.com/in/tobiasacchetto)
