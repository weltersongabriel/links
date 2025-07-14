function createEmoji() {
  const emojiList = ['💻',];
  const emoji = document.createElement('div');
  emoji.classList.add('falling-emoji');
  emoji.innerText = emojiList[Math.floor(Math.random() * emojiList.length)];

  // Posição aleatória na largura da tela
  emoji.style.left = Math.random() * 100 + 'vw';

  // Tempo aleatório de queda
  const duration = Math.random() * 3 + 3; // 3 a 6 segundos
  emoji.style.animationDuration = duration + 's';

  // Adiciona no container de fundo
  const background = document.getElementById('emoji-background');
  background.appendChild(emoji);

  // Remove após a animação
  setTimeout(() => {
    emoji.remove();
  }, duration * 1000);
}

// Cria emojis a cada intervalo
setInterval(createEmoji, 300);
