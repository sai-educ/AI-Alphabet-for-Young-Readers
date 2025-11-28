(function() {
  // 1. Create and inject the chat UI
  const chatWidget = document.createElement('div');
  chatWidget.id = 'ai-chat-widget';
  chatWidget.innerHTML = `
    <button id="chat-toggle-btn" aria-label="Chat with AI" aria-expanded="false">
      <span class="chat-icon">💬</span>
    </button>
    <div id="chat-window" class="chat-window hidden" role="dialog" aria-labelledby="chat-title">
      <div class="chat-header">
        <h2 id="chat-title">Chat with <span id="chat-letter-name">AI</span></h2>
        <button id="chat-close-btn" aria-label="Close chat">×</button>
      </div>
      <div id="chat-messages" class="chat-messages">
        <div class="message system">
          <p>Hi! I'm <span id="chat-intro-name">AI</span>. Ask me anything about <span id="chat-intro-topic">this topic</span>!</p>
        </div>
      </div>
      <form id="chat-form" class="chat-input-area">
        <input type="text" id="chat-input" placeholder="Type your question..." autocomplete="off" required>
        <button type="submit" aria-label="Send message">➤</button>
      </form>
    </div>
  `;
  document.body.appendChild(chatWidget);

  // 2. State & Elements
  const toggleBtn = document.getElementById('chat-toggle-btn');
  const chatWindow = document.getElementById('chat-window');
  const closeBtn = document.getElementById('chat-close-btn');
  const messagesContainer = document.getElementById('chat-messages');
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');
  
  // Dynamic content elements
  const chatLetterName = document.getElementById('chat-letter-name');
  const chatIntroName = document.getElementById('chat-intro-name');
  const chatIntroTopic = document.getElementById('chat-intro-topic');

  let currentLetter = 'A';
  let currentData = {};
  let chatHistory = [];

  // 3. Initialize based on current letter
  function initChat() {
    const params = new URLSearchParams(location.search);
    currentLetter = (params.get('letter') || 'A').toUpperCase();
    
    if (window.AI_DATA && window.AI_DATA[currentLetter]) {
      currentData = window.AI_DATA[currentLetter];
      
      // Update UI text
      const name = `${currentLetter} for ${currentData.word}`;
      chatLetterName.textContent = currentLetter;
      chatIntroName.textContent = currentLetter;
      chatIntroTopic.textContent = currentData.word;
      
      // Reset history when letter changes (simple approach)
      chatHistory = [];
    }
  }

  // Hook into the existing navigation if possible, or just init on load
  // Since the original script uses history.replaceState, we might need to listen for that or poll.
  // For now, let's just init on load and expose a global update function if needed.
  initChat();

  // Listen for our own custom event if we decide to dispatch one from alphabet.html
  window.addEventListener('letterChanged', () => {
    initChat();
    // Clear messages except the first one
    messagesContainer.innerHTML = `
      <div class="message system">
        <p>Hi! I'm <span id="chat-intro-name">${currentLetter}</span>. Ask me anything about <span id="chat-intro-topic">${currentData.word}</span>!</p>
      </div>
    `;
  });

  // Also patch history.replaceState to detect changes if the main script doesn't dispatch events
  const originalReplaceState = history.replaceState;
  history.replaceState = function(...args) {
    originalReplaceState.apply(this, args);
    initChat();
    // Ideally we should clear chat here too, but let's see if we can trigger a UI update
    // For now, we'll rely on the user reloading or the simple init. 
    // Actually, let's just clear it to be safe and consistent.
     messagesContainer.innerHTML = `
      <div class="message system">
        <p>Hi! I'm <span>${currentLetter}</span>. Ask me anything about <span>${currentData.word}</span>!</p>
      </div>
    `;
  };


  // 4. Event Listeners
  toggleBtn.addEventListener('click', () => {
    const isHidden = chatWindow.classList.contains('hidden');
    if (isHidden) {
      chatWindow.classList.remove('hidden');
      toggleBtn.setAttribute('aria-expanded', 'true');
      setTimeout(() => chatInput.focus(), 100);
    } else {
      chatWindow.classList.add('hidden');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });

  closeBtn.addEventListener('click', () => {
    chatWindow.classList.add('hidden');
    toggleBtn.setAttribute('aria-expanded', 'false');
  });

  chatForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const text = chatInput.value.trim();
    if (!text) return;

    // Add user message
    addMessage(text, 'user');
    chatInput.value = '';
    
    // Show loading state
    const loadingId = addLoadingMessage();

    try {
      // Prepare prompt
      const systemPrompt = `You are the letter "${currentLetter}" which stands for "${currentData.word}". 
      Your definition is: "${currentData.definition}".
      You are talking to a young child. Be friendly, encouraging, and simple. 
      Keep answers short (under 3 sentences). 
      If asked about other letters, gently guide them back to "${currentData.word}" or suggest they visit that letter page.`;

      const messages = [
        { role: 'system', content: systemPrompt },
        ...chatHistory,
        { role: 'user', content: text }
      ];

      // Call Puter.js
      // We use a model that is good for chat, like claude-sonnet-4-5 or gpt-4o-mini if available.
      // The user docs mentioned claude-sonnet-4-5.
      const response = await puter.ai.chat(messages, { model: 'claude-sonnet-4-5' });
      const reply = response.message.content[0].text;

      // Remove loading
      removeMessage(loadingId);

      // Add AI response
      addMessage(reply, 'assistant');

      // Update history
      chatHistory.push({ role: 'user', content: text });
      chatHistory.push({ role: 'assistant', content: reply });

    } catch (err) {
      removeMessage(loadingId);
      addMessage("Oops! I got a bit confused. Can you try asking again?", 'system');
      console.error(err);
    }
  });

  // Helper functions
  function addMessage(text, sender) {
    const div = document.createElement('div');
    div.className = `message ${sender}`;
    div.innerHTML = `<p>${escapeHtml(text)}</p>`;
    messagesContainer.appendChild(div);
    scrollToBottom();
  }

  function addLoadingMessage() {
    const id = 'msg-' + Date.now();
    const div = document.createElement('div');
    div.id = id;
    div.className = 'message assistant loading';
    div.innerHTML = `<p><span class="dot">.</span><span class="dot">.</span><span class="dot">.</span></p>`;
    messagesContainer.appendChild(div);
    scrollToBottom();
    return id;
  }

  function removeMessage(id) {
    const el = document.getElementById(id);
    if (el) el.remove();
  }

  function scrollToBottom() {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

})();
