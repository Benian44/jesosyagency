// Configuration du chatbot
const chatbotConfig = {
    title: 'Assistant Virtuel',
    subtitle: 'Comment puis-je vous aider ?',
    welcomeMessage: '👋 Bonjour ! Je suis votre assistant virtuel. Posez-moi vos questions sur nos services ou commandes !',
    position: 'right', // 'left' ou 'right'
    primaryColor: '#7C3AED',
    accentColor: '#6D28D9',
    textColor: '#1F2937',
    bubbleColor: '#F3F4F6',
    botAvatar: '🤖',
    userAvatar: '👤',
    typingSpeed: 20, // ms entre chaque caractère
    autoOpen: true, // Ouvrir automatiquement après le chargement
    autoOpenDelay: 3000, // Délai avant ouverture automatique (ms)
    suggestions: [
        'Quels sont vos tarifs ?',
        'Comment passer commande ?',
        'Avez-vous une démo ?',
        'Quelles sont les fonctionnalités ?'
    ]
};

// Messages prédéfinis
const botResponses = {
    'salut': 'Bonjour ! Comment puis-je vous aider aujourd\'hui ?',
    'bonjour': 'Bonjour ! En quoi puis-je vous être utile ?',
    'prix': 'Notre forfait de base est à 75 000 FCFA. Vous pouvez personnaliser votre commande avec des options supplémentaires sur notre page d\'achat !',
    'commande': 'Pour passer commande, rendez-vous sur notre page d\'achat et sélectionnez les options qui vous intéressent. Notre équipe vous contactera ensuite par WhatsApp pour finaliser votre commande !',
    'démo': 'Oui, nous proposons une démo complète de notre plateforme. Vous pouvez accéder à la démo utilisateur et administrateur depuis notre page d\'accueil, section "Démo".',
    'fonctionnalités': 'Notre plateforme inclut :\n- Inscription et connexion des utilisateurs\n- Profils personnalisables\n- Système de matching avancé\n- Messagerie instantanée\n- Tableau de bord administrateur complet\n- Et bien plus encore !',
    'contact': 'Vous pouvez nous contacter par email à contact@jesosy.com ou par téléphone au +225 07 67 51 24 49. Notre équipe est disponible du lundi au vendredi de 9h à 18h.',
    'default': 'Je ne suis pas sûr de comprendre votre demande. Pouvez-vous reformuler ou choisir parmi les suggestions ci-dessous ?',
    'merci': 'Je vous en prie ! Avez-vous d\'autres questions ?',
    'au revoir': 'Au revoir ! N\'hésitez pas à revenir si vous avez d\'autres questions. Bonne journée !',
    'aide': 'Je peux vous aider avec :\n- Les tarifs et commandes\n- Les fonctionnalités\n- L\'accès à la démo\n- Le support technique\nN\'hésitez pas à me poser vos questions !'
};

// Initialisation du chatbot
function initChatbot() {
    // Création du conteneur principal
    const chatContainer = document.createElement('div');
    chatContainer.id = 'chatbot-container';
    chatContainer.className = `fixed bottom-6 ${chatbotConfig.position}-6 z-50 w-80 bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 transform-gpu`;
    chatContainer.style.maxHeight = '80vh';
    chatContainer.style.opacity = '0';
    chatContainer.style.transform = 'translateY(20px)';
    chatContainer.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

    // Création de l'en-tête
    const header = document.createElement('div');
    header.className = 'bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4 flex justify-between items-center';
    
    const headerText = document.createElement('div');
    const title = document.createElement('h3');
    title.className = 'font-bold text-lg';
    title.textContent = chatbotConfig.title;
    
    const subtitle = document.createElement('p');
    subtitle.className = 'text-xs opacity-80';
    subtitle.textContent = chatbotConfig.subtitle;
    
    headerText.appendChild(title);
    headerText.appendChild(subtitle);
    
    const closeButton = document.createElement('button');
    closeButton.className = 'text-white hover:text-gray-200 focus:outline-none';
    closeButton.innerHTML = '<i class="fas fa-times"></i>';
    closeButton.addEventListener('click', toggleChat);
    
    header.appendChild(headerText);
    header.appendChild(closeButton);
    
    // Création de la zone de messages
    const messagesContainer = document.createElement('div');
    messagesContainer.id = 'chat-messages';
    messagesContainer.className = 'flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50';
    
    // Création de la zone de saisie
    const inputContainer = document.createElement('div');
    inputContainer.className = 'p-3 bg-white border-t border-gray-200';
    
    const suggestionsContainer = document.createElement('div');
    suggestionsContainer.id = 'suggestions';
    suggestionsContainer.className = 'flex flex-wrap gap-2 mb-2';
    
    chatbotConfig.suggestions.forEach(suggestion => {
        const suggestionBtn = document.createElement('button');
        suggestionBtn.className = 'text-xs bg-purple-100 hover:bg-purple-200 text-purple-800 px-2 py-1 rounded-full transition-colors';
        suggestionBtn.textContent = suggestion;
        suggestionBtn.addEventListener('click', () => sendMessage(suggestion));
        suggestionsContainer.appendChild(suggestionBtn);
    });
    
    const inputGroup = document.createElement('div');
    inputGroup.className = 'flex items-center';
    
    const input = document.createElement('input');
    input.id = 'chat-input';
    input.type = 'text';
    input.placeholder = 'Tapez votre message...';
    input.className = 'flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent';
    
    const sendButton = document.createElement('button');
    sendButton.className = 'bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-r-lg transition-colors';
    sendButton.innerHTML = '<i class="fas fa-paper-plane"></i>';
    sendButton.addEventListener('click', () => {
        const input = document.getElementById('chat-input');
        if (input.value.trim() !== '') {
            sendMessage(input.value);
            input.value = '';
        }
    });
    
    // Gestion de la touche Entrée
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && input.value.trim() !== '') {
            sendMessage(input.value);
            input.value = '';
        }
    });
    
    inputGroup.appendChild(input);
    inputGroup.appendChild(sendButton);
    
    inputContainer.appendChild(suggestionsContainer);
    inputContainer.appendChild(inputGroup);
    
    // Création du bouton flottant
    const chatButton = document.createElement('button');
    chatButton.id = 'chat-button';
    chatButton.className = 'fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full shadow-lg flex items-center justify-center text-2xl z-40 transform transition-transform hover:scale-110';
    chatButton.innerHTML = '<i class="fas fa-comment-dots"></i>';
    chatButton.addEventListener('click', toggleChat);
    
    // Assemblage des éléments
    chatContainer.appendChild(header);
    chatContainer.appendChild(messagesContainer);
    chatContainer.appendChild(inputContainer);
    
    // Ajout au corps du document
    document.body.appendChild(chatContainer);
    document.body.appendChild(chatButton);
    
    // Ajout du style
    addChatbotStyles();
    
    // Message de bienvenue
    if (chatbotConfig.autoOpen) {
        setTimeout(() => {
            toggleChat();
            addBotMessage(chatbotConfig.welcomeMessage);
        }, chatbotConfig.autoOpenDelay);
    } else {
        addBotMessage(chatbotConfig.welcomeMessage);
    }
}

// Ajout des styles du chatbot
function addChatbotStyles() {
    const style = document.createElement('style');
    style.textContent = `
        #chatbot-container {
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            height: 500px;
            display: flex;
            flex-direction: column;
        }
        
        #chat-messages {
            scroll-behavior: smooth;
        }
        
        .message {
            max-width: 80%;
            padding: 10px 14px;
            border-radius: 18px;
            margin-bottom: 8px;
            line-height: 1.4;
            position: relative;
            animation: fadeIn 0.3s ease;
        }
        
        .bot-message {
            background-color: ${chatbotConfig.bubbleColor};
            color: ${chatbotConfig.textColor};
            border-bottom-left-radius: 4px;
            align-self: flex-start;
        }
        
        .user-message {
            background-color: ${chatbotConfig.primaryColor};
            color: white;
            border-bottom-right-radius: 4px;
            align-self: flex-end;
        }
        
        .typing-indicator {
            display: flex;
            align-items: center;
            background-color: ${chatbotConfig.bubbleColor};
            color: ${chatbotConfig.textColor};
            padding: 10px 14px;
            border-radius: 18px;
            width: fit-content;
            margin-bottom: 8px;
            border-bottom-left-radius: 4px;
        }
        
        .typing-dot {
            width: 8px;
            height: 8px;
            background-color: ${chatbotConfig.textColor};
            border-radius: 50%;
            margin: 0 2px;
            display: inline-block;
            animation: typing 1.4s infinite ease-in-out;
        }
        
        .typing-dot:nth-child(1) { animation-delay: 0s; }
        .typing-dot:nth-child(2) { animation-delay: 0.2s; }
        .typing-dot:nth-child(3) { animation-delay: 0.4s; }
        
        @keyframes typing {
            0%, 60%, 100% { transform: translateY(0); }
            30% { transform: translateY(-5px); }
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        /* Animation d'ouverture/fermeture */
        .chat-enter {
            opacity: 0;
            transform: translateY(20px);
        }
        
        .chat-enter-active {
            opacity: 1;
            transform: translateY(0);
            transition: opacity 0.3s ease, transform 0.3s ease;
        }
        
        .chat-exit {
            opacity: 1;
            transform: translateY(0);
        }
        
        .chat-exit-active {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.3s ease, transform 0.3s ease;
        }
    `;
    document.head.appendChild(style);
}

// Fonction pour basculer l'affichage du chat
function toggleChat() {
    const container = document.getElementById('chatbot-container');
    const button = document.getElementById('chat-button');
    
    if (container.style.opacity === '0' || container.style.opacity === '') {
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
        container.style.pointerEvents = 'auto';
        button.style.transform = 'scale(0)';
        button.style.pointerEvents = 'none';
        document.getElementById('chat-input').focus();
    } else {
        container.style.opacity = '0';
        container.style.transform = 'translateY(20px)';
        container.style.pointerEvents = 'none';
        button.style.transform = 'scale(1)';
        button.style.pointerEvents = 'auto';
    }
}

// Ajout d'un message du bot
function addBotMessage(message) {
    const messagesContainer = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message bot-message';
    
    // Ajout de l'avatar
    const avatar = document.createElement('span');
    avatar.className = 'mr-2';
    avatar.textContent = chatbotConfig.botAvatar;
    messageDiv.appendChild(avatar);
    
    // Ajout du contenu du message
    const content = document.createElement('span');
    content.className = 'message-content';
    messageDiv.appendChild(content);
    
    messagesContainer.appendChild(messageDiv);
    
    // Animation de frappe
    typeMessage(content, message);
    
    // Défilement vers le bas
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Ajout d'un message de l'utilisateur
function addUserMessage(message) {
    const messagesContainer = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message user-message';
    
    // Ajout du contenu du message
    const content = document.createElement('span');
    content.className = 'message-content';
    content.textContent = message;
    messageDiv.appendChild(content);
    
    // Ajout de l'avatar
    const avatar = document.createElement('span');
    avatar.className = 'ml-2';
    avatar.textContent = chatbotConfig.userAvatar;
    messageDiv.appendChild(avatar);
    
    messagesContainer.appendChild(messageDiv);
    
    // Défilement vers le bas
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Animation de frappe
function typeMessage(element, message, index = 0) {
    if (index < message.length) {
        element.textContent += message[index];
        setTimeout(() => typeMessage(element, message, index + 1), chatbotConfig.typingSpeed);
    }
}

// Envoi d'un message
function sendMessage(message) {
    if (message.trim() === '') return;
    
    // Ajout du message de l'utilisateur
    addUserMessage(message);
    
    // Simulation de la réponse du bot
    setTimeout(() => {
        // Création de l'indicateur de frappe
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'typing-indicator';
        typingIndicator.id = 'typing-indicator';
        typingIndicator.innerHTML = `
            <span class="typing-dot"></span>
            <span class="typing-dot"></span>
            <span class="typing-dot"></span>
        `;
        document.getElementById('chat-messages').appendChild(typingIndicator);
        
        // Défilement vers le bas
        const messagesContainer = document.getElementById('chat-messages');
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        
        // Réponse du bot après un délai
        setTimeout(() => {
            // Suppression de l'indicateur de frappe
            const typingElement = document.getElementById('typing-indicator');
            if (typingElement) {
                typingElement.remove();
            }
            
            // Génération de la réponse
            const response = generateResponse(message.toLowerCase());
            addBotMessage(response);
        }, 1500);
    }, 500);
}

// Génération de la réponse du bot
function generateResponse(message) {
    // Vérification des correspondances clés
    if (message.includes('prix') || message.includes('tarif') || message.includes('combien')) {
        return botResponses['prix'];
    } else if (message.includes('commande') || message.includes('acheter') || message.includes('commander')) {
        return botResponses['commande'];
    } else if (message.includes('démo') || message.includes('essai') || message.includes('tester')) {
        return botResponses['démo'];
    } else if (message.includes('fonctionnalité') || message.includes('fonctionnalités') || message.includes('caractéristique')) {
        return botResponses['fonctionnalités'];
    } else if (message.includes('contact') || message.includes('contacter') || message.includes('email') || message.includes('téléphone')) {
        return botResponses['contact'];
    } else if (message.includes('merci') || message.includes('super') || message.includes('parfait')) {
        return botResponses['merci'];
    } else if (message.includes('au revoir') || message.includes('bye') || message.includes('à bientôt')) {
        return botResponses['au revoir'];
    } else if (message.includes('aide') || message.includes('aider') || message.includes('problème')) {
        return botResponses['aide'];
    } else if (message.includes('salut') || message.includes('bonjour') || message.includes('coucou') || message.includes('hello')) {
        return botResponses['salut'];
    }
    
    // Si aucune correspondance, retourner la réponse par défaut
    return botResponses['default'];
}

// Initialisation du chatbot lorsque le DOM est chargé
document.addEventListener('DOMContentLoaded', initChatbot);

// Fonction pour ouvrir le chat depuis d'autres éléments de la page
function openChat() {
    const container = document.getElementById('chatbot-container');
    const button = document.getElementById('chat-button');
    
    if (container && button) {
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
        container.style.pointerEvents = 'auto';
        button.style.transform = 'scale(0)';
        button.style.pointerEvents = 'none';
        document.getElementById('chat-input')?.focus();
    }
}

// Export pour utilisation globale
window.Chatbot = {
    open: openChat,
    sendMessage: sendMessage
};
