import React, { useState, useEffect, useRef } from 'react';
import { Input } from './Input'; // Assuming Input is in the same directory

const Chat = () => {
  const [messages, setMessages] = useState<string[]>([]); // Chat messages
  const [newMessage, setNewMessage] = useState(''); // Current input
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Function to handle sending a message
  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setNewMessage(''); // Clear input field
    }
  };

  // Scroll to the bottom of the chat when a new message is added
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-full max-h-screen bg-white rounded-md shadow-md">
      {/* Chat Window */}
      <div className="flex-grow overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className="p-2 bg-gray-200 rounded-lg">
            {message}
          </div>
        ))}
        {/* Ref to keep chat scrolled to bottom */}
        <div ref={chatEndRef} />
      </div>

      {/* Input Field */}
      <form onSubmit={sendMessage} className="p-4 border-t border-gray-300">
        <Input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Chat;
