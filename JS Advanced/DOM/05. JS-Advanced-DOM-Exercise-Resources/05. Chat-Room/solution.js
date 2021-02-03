function solve() {
   const button = document.getElementById("send");
   const messageArea = document.getElementById('chat_messages');
   button.addEventListener('click', () => {
      const input = document.getElementById('chat_input');
      const newMessage = document.createElement('div');
      newMessage.classList.add('message', 'my-message');
      newMessage.innerHTML = input.value;
      messageArea.appendChild(newMessage);

      input.value = null;
   });

}


