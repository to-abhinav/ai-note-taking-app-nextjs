import { useState,useEffect } from "react";
import { X, MessageCircle, Bot } from "lucide-react"; // Use any icon library or SVG
import AIChatBox from "./AIChatBox";



export default function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMessageIcon, setShowMessageIcon] = useState(true);

  useEffect(() => {
    // Toggle icons every 1 second (1000ms)
    const interval = setInterval(() => {
      setShowMessageIcon((prev) => !prev);
    }, 5000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      {isOpen ? (
        <div className="relative">
          {/* Close button for chat */}
         
          <button
          onClick={toggleChat}
          className="p-4 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition transform hover:scale-110 rotate-90"
          title="Chat with us"
        >
          <X size={24} />
        </button>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className="p-4 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition transform hover:scale-110 rotate-0"
          title="Chat with us"
        >
          {/* Conditionally render each icon with animation */}
      {showMessageIcon ? (
        <MessageCircle size={24} className="animate-fadeIn" />
      ) : (
        <Bot size={24} className="animate-fadeIn" />
      )}
        </button>
      )}
    </div>
    <AIChatBox open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
