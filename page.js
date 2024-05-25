document.addEventListener('DOMContentLoaded', function() {
    const messages = [
        "We don't say Malak, we say Loklok",
        "We don't say Rabeb, we say Samara",
        "We don't say Sami, we say ميلي مع الرياح",
        "We don't say Achraf, we say Cartel",
        "We don't say Trimech, we say Shhht",
        "We don't say Nour, we say ولا عندي التوحد خاتر ما لقيت منافسة",
        "We don't say Asma, we say akhdheee",
        "We don't say Azza, we say farmoula",
        "We don't say Ouni, we say الاستاذ",
        "We don't say Yosr, we say Bio"
    ];

    let currentMessageIndex = 0;
    const messageContainer = document.getElementById('message-container');

    function showNextMessage() {
        messageContainer.textContent = messages[currentMessageIndex];
        currentMessageIndex = (currentMessageIndex + 1) % messages.length;
    }

    showNextMessage();
    setInterval(showNextMessage, 3000);

    const celebrateBtn = document.getElementById('celebrate-btn');
    celebrateBtn.addEventListener('click', () => {
        createConfetti();
    });

    function createConfetti() {
        const numConfetti = 200; 
        for (let i = 0; i < numConfetti; i++) {
            const confetti = document.createElement('img');
            confetti.src = 'assets/logo.png'; 
            confetti.classList.add('confetti');
            confetti.style.left = `${Math.random() * 100}vw`; 
            confetti.style.top = `${Math.random() * 100}vh`;
            confetti.style.width = `${Math.random() * 50 + 20}px`; 
            confetti.style.height = 'auto'; 
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`; 
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 3000); // Remove confetti after 3 seconds
        }
    }
});
