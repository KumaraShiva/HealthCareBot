const form = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const msg = userInput.value.trim();
  if (!msg) return;

  // Add user message
  chatBox.innerHTML += `<div class="user-msg"><strong>You:</strong> ${msg}</div>`;
  userInput.value = '';
  chatBox.scrollTop = chatBox.scrollHeight;

  // Add bot "typing" placeholder
  const botMsgId = `bot-msg-${Date.now()}`;
  chatBox.innerHTML += `<div class="bot-msg" id="${botMsgId}"><strong>MedBot:</strong> <span class="typing">...</span></div>`;
  chatBox.scrollTop = chatBox.scrollHeight;

  // Fetch real response
  const response = await fetch('/get', {
    method: 'POST',
    body: new URLSearchParams({ msg }),
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  });

  const reply = await response.text();

  // Typing effect
  const botMsgElement = document.getElementById(botMsgId);
  const textContainer = botMsgElement.querySelector('.typing');
  textContainer.innerHTML = ''; // Clear placeholder

  let i = 0;
  function typeWriter() {
    if (i < reply.length) {
      textContainer.innerHTML += reply.charAt(i);
      i++;
      setTimeout(typeWriter, 20); // speed (lower is faster)
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  }

  typeWriter();
});
