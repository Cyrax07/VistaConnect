const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('click', () => {
        toastBootstrap.show()
    })
}

// Predefined responses from the bot
const botResponses = {
    "hi": "Hello! How can I help you today?",
    "how are you": "I'm just a bot, but I'm doing well. How about you?",
    "bye": "Goodbye! Have a nice day!",
    "default": "Sorry, I didn't understand that. Could you ask something else?"
};

// Function to toggle chatbot visibility
function toggleChatbot() {
    const chatbotContainer = document.getElementById('chatbox-container');
    chatbotContainer.style.display = (chatbotContainer.style.display === 'none' || chatbotContainer.style.display === '') ? 'block' : 'none';
}

// Function to send a message
function sendMessage() {
    const userMessage = document.getElementById('userInput').value;
    if (userMessage.trim() === "") return;

    // Display user message
    displayMessage(userMessage, 'user');

    // Clear input field
    document.getElementById('userInput').value = "";

    // Get bot's response based on the user input
    const botMessage = botResponses[userMessage.toLowerCase()] || botResponses["default"];

    // Delay bot response for 1 second
    setTimeout(() => displayMessage(botMessage, 'bot'), 1000);
}

// Function to display messages in the chat window
function displayMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message');
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.innerText = message;
    document.getElementById('chatbox').appendChild(messageElement);

    // Scroll chatbox to the bottom
    document.getElementById('chatbox').scrollTop = document.getElementById('chatbox').scrollHeight;
}

// Detect scroll position and show the chat icon after a certain scroll distance
window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const chatIcon = document.getElementById('chat-icon');

    // Show chat icon after scrolling 200px
    if (scrollPosition > 200) {
        chatIcon.style.display = 'block'; // Show chat icon
    } else {
        chatIcon.style.display = 'none'; // Hide chat icon
    }
});

