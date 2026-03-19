# 💝 Sito San Valentino

Un sito romantico per chiedere: "Vuoi essere il mio San Valentino?"

## 📋 Caratteristiche

- Bottone "Sì" che cresce gradualmente
- Bottone "No" che scappa quando ci si avvicina
- Animazioni di cuori che fluttuano
- Coriandoli quando si clicca "Sì"
- Completamente responsive (funziona su mobile e desktop)

## 🚀 Come deployare su Netlify

### Metodo 1: Drag & Drop (più semplice)

1. Vai su [netlify.com](https://netlify.com)
2. Crea un account gratuito (se non ce l'hai già)
3. Nella dashboard, trascina l'intera cartella `san-valentino` nella zona "Want to deploy a new site without connecting to Git? Drag and drop your site output folder here"
4. Netlify caricherà automaticamente il sito
5. Otterrai un URL tipo: `https://nome-casuale.netlify.app`
6. Puoi personalizzare il nome del dominio nelle impostazioni

### Metodo 2: GitHub + Netlify (consigliato per aggiornamenti futuri)

1. Crea un repository su GitHub
2. Carica tutti i file del progetto
3. Vai su Netlify e clicca "New site from Git"
4. Collega il tuo repository GitHub
5. Netlify farà il deploy automaticamente

### Metodo 3: Netlify CLI

```bash
# Installa Netlify CLI
npm install -g netlify-cli

# Naviga nella cartella del progetto
cd san-valentino

# Fai il login
netlify login

# Deploy
netlify deploy --prod
```

## 📁 Struttura del Progetto

```
san-valentino/
│
├── index.html          # Pagina principale
├── css/
│   └── style.css      # Stili e animazioni
├── js/
│   └── script.js      # Logica interattiva
└── README.md          # Questo file
```

## 🎨 Personalizzazione

Puoi modificare:
- I colori nel file `css/style.css`
- Il testo della domanda in `index.html`
- Il messaggio finale quando dice "Sì"
- La velocità con cui il bottone "No" scappa

## ❤️ Buon San Valentino!
