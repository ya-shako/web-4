document.getElementById('submit-btn').addEventListener('click', function() {
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const greetingMessage = document.getElementById('greeting-message');
  
    if (firstName && lastName) {
      greetingMessage.textContent = `Здравствуйте, ${firstName} ${lastName}!`;
    } else {
      greetingMessage.textContent = 'Пожалуйста, введите имя и фамилию.';
    }
  });
  