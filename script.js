const messages = [
  "lagi ngapain nanti?",
  "udah makan belom?",
  "pengen curhat boleh ga?",
  "kamu kangen siapa sekarang?",
  "kasih tau rahasia kecilmu 😏"
];

function rollMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  document.getElementById("messageText").textContent = messages[randomIndex];
}
