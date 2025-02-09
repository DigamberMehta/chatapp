import { useState } from 'react';
import { PhoneCall, MessageSquare, Users, Settings, MessageCircle } from 'lucide-react';
import ChatBot from '../ChatBot/chatBot';
import profile from '../../assets/image.png';

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
        icon={
          <svg
            stroke="none"
            fill="black"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            aria-hidden="true"
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
            />
          </svg>
        }
        tooltip="ChatBot"
        onClick={toggleChat}
        isSelected={isChatOpen}
      />

      </nav>

      {/* User avatar */}
      <div className="mt-auto pb-4">
        <img
          src={profile}
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