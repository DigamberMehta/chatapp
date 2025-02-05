import { useState } from 'react';
import { PhoneCall, MessageSquare, Users, Settings, MessageCircle } from 'lucide-react';
import ChatBot from '../ChatBot/chatBot';

const SidebarLeft = ({ onSelect, selectedComponent }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="w-20 h-screen bg-gray-100 text-gray-900 flex flex-col items-center py-6 space-y-6 shadow-lg">
      <nav className="flex flex-col space-y-4">
        {/* Other icons */}
        <SidebarIcon
          icon={<MessageSquare size={20} />}
          tooltip="Chats"
          onClick={() => onSelect('chats')}
          isSelected={selectedComponent === 'chats'}
        />
        <SidebarIcon
          icon={<PhoneCall size={20} />}
          tooltip="Call"
          onClick={() => onSelect('calls')}
          isSelected={selectedComponent === 'calls'}
        />
        <SidebarIcon icon={<Users size={20} />} tooltip="Friends" />
        <SidebarIcon icon={<Settings size={20} />} tooltip="Settings" />

        {/* Chatbot toggle button */}
        <SidebarIcon
          icon={<MessageCircle size={20} />}
          tooltip="ChatBot"
          onClick={toggleChat}
          isSelected={isChatOpen}
        />
      </nav>

      {/* User avatar */}
      <div className="mt-auto pb-4">
        <img
          src="https://via.placeholder.com/40"
          alt="User Avatar"
          className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-gray-500 cursor-pointer"
        />
      </div>

      {/* Chatbot component */}
      <ChatBot isOpen={isChatOpen} onClose={toggleChat} />
    </div>
  );
};

// SidebarIcon component
const SidebarIcon = ({ icon, tooltip, onClick, isSelected }) => {
  return (
    <div
      className={`group relative flex items-center justify-center w-10 h-10 rounded-[50%] cursor-pointer transition-all ${
        isSelected ? 'bg-green-500 text-white' : 'hover:bg-gray-300'
      }`}
      onClick={onClick}
    >
      {icon}
      <span className="absolute left-14 bg-gray-200 text-gray-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-50 shadow-lg">
        {tooltip}
      </span>
    </div>
  );
};

export default SidebarLeft;