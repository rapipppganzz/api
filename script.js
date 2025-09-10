// Ripple effect
function createRipple(e, el) {
  const rect = el.getBoundingClientRect();
  const d = Math.max(rect.width, rect.height);
  const x = e.clientX - rect.left - d/2;
  const y = e.clientY - rect.top - d/2;
  const span = document.createElement('span');
  span.className = 'ripple';
  span.style.left = x + 'px';
  span.style.top = y + 'px';
  span.style.width = span.style.height = d + 'px';
  el.appendChild(span);
  setTimeout(()=> span.remove(), 650);
}

// Fake recent messages
const recent = [
  "hah kocak banget, asli",
  "kapan kita nongkrong lagi?",
  "beneran ganteng sih",
  "ngapain nih malem-malem",
  "jawab dong jujur 😏",
];

const recentArea = document.getElementById('recentArea');
function showRecent() {
  recentArea.innerHTML = '';
  recent.forEach((text, i) => {
    setTimeout(() => {
      const wrap = document.createElement('div');
      wrap.className = 'flex items-center gap-3';
      const avatar = document.createElement('div');
      avatar.className = 'w-9 h-9 rounded-full bg-white flex items-center justify-center';
      avatar.innerHTML = '<img src="https://picsum.photos/seed/'+(i+5)+'/48" class="w-8 h-8 rounded-full object-cover"/>';
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      bubble.style.animationDelay = (i * 120) + 'ms';
      bubble.textContent = text;
      wrap.appendChild(avatar);
      wrap.appendChild(bubble);
      recentArea.prepend(wrap);
      setTimeout(()=> {
        wrap.style.opacity = '0';
        wrap.style.transform = 'translateX(18px)';
        setTimeout(()=> wrap.remove(), 600);
      }, 4200 + (i*300));
    }, i * 700);
  });
}
setTimeout(()=> showRecent(), 900);

// Dice random fill
const dice = document.getElementById('dice');
dice.addEventListener('click', ()=> {
  const ta = document.getElementById('msg');
  const choices = [
    "Kamu siapa sebenarnya?",
    "Kenapa kamu ga balas chat aku?",
    "Yg paling bikin malu waktu kecil apa?",
    "Beneran suka dia atau masih galau?",
    "Ceritain moment paling awkwardmu"
  ];
  ta.value = choices[Math.floor(Math.random()*choices.length)];
  ta.focus();
});

// Send button behaviour
const sendBtn = document.getElementById('sendBtn');
sendBtn.addEventListener('click', (e)=> {
  createRipple(e, sendBtn);
  sendBtn.disabled = true;
  const old = sendBtn.innerHTML;
  sendBtn.innerHTML = 'Sending...';
  sendBtn.style.opacity = '0.92';
  setTimeout(()=> {
    sendBtn.innerHTML = 'Sent ✔';
    setTimeout(()=> {
      sendBtn.innerHTML = old;
      sendBtn.style.transform = '';
      sendBtn.disabled = false;
    }, 900);
    const wrap = document.createElement('div');
    wrap.className = 'flex items-center gap-3';
    const avatar = document.createElement('div');
    avatar.className = 'w-9 h-9 rounded-full bg-white flex items-center justify-center';
    avatar.innerHTML = '<img src="https://picsum.photos/seed/sent/48" class="w-8 h-8 rounded-full object-cover"/>';
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.textContent = 'Pesan terkirim — terima kasih ❤️';
    wrap.appendChild(avatar);
    wrap.appendChild(bubble);
    recentArea.prepend(wrap);
  }, 900);
});

// Fake link
document.getElementById('createLink').addEventListener('click', ()=> {
  alert('Demo: https://ngl.link/yourname');
});
document.getElementById('makeLink').addEventListener('click', ()=> {
  alert('Demo: https://ngl.link/bibd51254');
});
