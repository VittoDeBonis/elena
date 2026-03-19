// Elementi DOM
const btnYes = document.getElementById('btnYes');
const btnNo = document.getElementById('btnNo');
const questionContent = document.getElementById('questionContent');
const successContent = document.getElementById('successContent');

// Variabili per il movimento del bottone NO
let noButtonClickCount = 0;
const maxClicks = 5; // Dopo 5 tentativi diventa impossibile

// Funzione per muovere il bottone NO
function moveNoButton() {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const btnRect = btnNo.getBoundingClientRect();
    
    // Calcola nuove posizioni casuali
    const maxX = containerRect.width - btnRect.width - 40;
    const maxY = containerRect.height - btnRect.height - 40;
    
    let newX = Math.random() * maxX;
    let newY = Math.random() * maxY;
    
    // Assicurati che il bottone non vada troppo vicino al bottone SI
    const btnYesRect = btnYes.getBoundingClientRect();
    const minDistance = 150;
    
    const distance = Math.sqrt(
        Math.pow(newX - btnYesRect.left, 2) + 
        Math.pow(newY - btnYesRect.top, 2)
    );
    
    if (distance < minDistance) {
        // Se troppo vicino, inverti la posizione
        newX = maxX - newX;
        newY = maxY - newY;
    }
    
    btnNo.style.position = 'absolute';
    btnNo.style.left = newX + 'px';
    btnNo.style.top = newY + 'px';
    btnNo.style.transition = 'all 0.3s ease';
}

// Funzione per rendere il bottone NO ancora più difficile da cliccare
function makeNoButtonHarder() {
    noButtonClickCount++;
    
    if (noButtonClickCount >= maxClicks) {
        // Dopo maxClicks tentativi, il bottone diventa piccolissimo e velocissimo
        btnNo.style.fontSize = '8px';
        btnNo.style.padding = '5px 10px';
    }
}

// Event listener per quando il mouse si avvicina al bottone NO
btnNo.addEventListener('mouseenter', () => {
    moveNoButton();
    makeNoButtonHarder();
});

// Event listener per dispositivi touch (mobile)
btnNo.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveNoButton();
    makeNoButtonHarder();
});

// Tentativo di click sul bottone NO
btnNo.addEventListener('click', (e) => {
    e.preventDefault();
    moveNoButton();
    makeNoButtonHarder();
});

// Click sul bottone SI
btnYes.addEventListener('click', () => {
    // Nascondi la domanda
    questionContent.classList.add('hidden');
    
    // Mostra il messaggio di successo
    successContent.classList.remove('hidden');
    
    // Crea i coriandoli
    createConfetti();
    
    // Cambia il colore di sfondo in modo graduale
    document.body.style.background = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
});

// Funzione per creare i coriandoli
function createConfetti() {
    const confettiContainer = document.querySelector('.confetti');
    const colors = ['#f093fb', '#f5576c', '#4facfe', '#00f2fe', '#43e97b', '#38f9d7'];
    
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'absolute';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.opacity = '1';
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            confetti.style.transition = 'all 3s ease-out';
            
            confettiContainer.appendChild(confetti);
            
            // Anima i coriandoli
            setTimeout(() => {
                confetti.style.top = '100%';
                confetti.style.opacity = '0';
                confetti.style.transform = `rotate(${Math.random() * 720}deg)`;
            }, 50);
            
            // Rimuovi i coriandoli dopo l'animazione
            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }, i * 30);
    }
}

// Aumenta la dimensione del bottone SI gradualmente
let yesButtonSize = 1;
setInterval(() => {
    if (questionContent.classList.contains('hidden')) return;
    
    yesButtonSize += 0.002;
    btnYes.style.transform = `scale(${yesButtonSize})`;
}, 100);
