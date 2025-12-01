// ===== Terminal Typing Effect =====
const terminalText = document.querySelector('.typing-effect');
if (terminalText) {
    const text = terminalText.textContent;
    terminalText.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            terminalText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50); // Random typing speed could be added here
        } else {
            terminalText.style.borderRight = 'none'; // Stop blinking cursor after typing
        }
    }

    // Start typing after a small delay
    setTimeout(typeWriter, 1000);
}

// ===== Glitch Text Randomizer =====
const glitchTexts = document.querySelectorAll('.glitch');
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';

function randomGlitch(element) {
    const originalText = element.getAttribute('data-text');
    let iterations = 0;

    const interval = setInterval(() => {
        element.textContent = originalText
            .split('')
            .map((letter, index) => {
                if (index < iterations) {
                    return originalText[index];
                }
                return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('');

        if (iterations >= originalText.length) {
            clearInterval(interval);
        }

        iterations += 1 / 3;
    }, 30);
}

// Trigger glitch on hover for nav logo
const navLogo = document.querySelector('.nav-logo');
if (navLogo) {
    navLogo.addEventListener('mouseover', () => randomGlitch(navLogo));
}

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ===== Form Handler (Terminal Style) =====
const signalForm = document.getElementById('signal-form');
if (signalForm) {
    signalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = signalForm.querySelector('.btn-execute');
        const originalText = btn.textContent;

        btn.textContent = 'ENCRYPTING...';
        btn.style.background = '#ffff00'; // Yellow

        setTimeout(() => {
            btn.textContent = 'PACKET_SENT';
            btn.style.background = '#00ff00'; // Green

            setTimeout(() => {
                signalForm.reset();
                btn.textContent = originalText;
                btn.style.background = '';
            }, 2000);
        }, 1500);
    });
}

// ===== Console Message =====
console.log(
    "%c SYSTEM_READY %c ACCESS_GRANTED ",
    "background: #000; color: #0f0; font-weight: bold; padding: 5px;",
    "background: #0f0; color: #000; font-weight: bold; padding: 5px;"
);
