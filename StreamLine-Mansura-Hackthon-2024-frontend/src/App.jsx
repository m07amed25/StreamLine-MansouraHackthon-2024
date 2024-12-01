import { useState } from 'react'
import api from '../src/api/api'

import './App.css'
import Nav from './components/Nav'
import SearchBar from './components/SearchBar'
import Slider from './components/Slider'
import Chat from './components/Chat'
import { GoDependabot } from "react-icons/go";


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: inputValue },
    ]);

    try {
      setIsLoading(true);

      const response = await api.post(
        `https://localhost:7294/api/AI/generate?prompt=${encodeURIComponent(
          inputValue
        )}`
      );

      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "chatbot", text: response.data },
      ]);
    } catch (error) {
      console.error("Error communicating with chatbot:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: "chatbot",
          text: "Sorry, something went wrong. Please try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }

    setInputValue("");
  };


  
  return (
    <>
      <div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-6 py-6 rounded-full fixed z-50 bottom-10 right-10"
        >
          <GoDependabot className="text-3xl" />
        </button>
        <Chat isVisible={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2 className="text-xl font-bold mb-4 text-center">
            Chat with Chatbot
          </h2>
          <div className="flex flex-col h-80">
            <div className="flex-1 overflow-y-auto border border-gray-300 rounded p-4 mb-4">
              {messages.length === 0 ? (
                <p className="text-gray-500 text-center">No messages yet...</p>
              ) : (
                messages.map((message, index) => (
                  <div
                    key={index}
                    className={`mb-2 flex ${
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <span
                      className={`px-4 py-2 rounded-lg ${
                        message.sender === "user"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-800"
                      }`}
                    >
                      {message.text}
                    </span>
                  </div>
                ))
              )}
              {isLoading && (
                <div className="text-gray-500 text-center mt-2">
                  Chatbot is typing...
                </div>
              )}
            </div>

            <form
              onSubmit={handleSendMessage}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                className="flex-1 border border-gray-300 rounded px-4 py-2"
                placeholder="Type a message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button
                type="submit"
                className="bg-orange-500 text-white px-4 py-2 rounded"
                disabled={isLoading}
              >
                Send
              </button>
            </form>
          </div>
        </Chat>
        <Nav />
        <SearchBar />
        <Slider />
      </div>
    </>
  );
}

export default App
