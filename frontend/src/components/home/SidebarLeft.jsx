import { PhoneCall, MessageSquare, Users, Settings } from "lucide-react";

const SidebarLeft = () => {
  return (
    <div className="w-20 h-screen bg-gray-100 text-gray-900 flex flex-col items-center py-6 space-y-6 shadow-lg">
      {/* Logo */}
   
      
      {/* Navigation Icons */}
      <nav className="flex flex-col space-y-4">
        <SidebarIcon icon={<MessageSquare size={20} />} tooltip="Chats" />
        <SidebarIcon icon={<PhoneCall size={20} />} tooltip="Call" />
        <SidebarIcon icon={<Users size={20} />} tooltip="Friends" />
        <SidebarIcon icon={<Settings size={20} />} tooltip="Settings" />
      </nav>
      
      {/* User Profile */}
      <div className="mt-auto pb-4">
        <img
          src="https://via.placeholder.com/40"
          alt="User Avatar"
          className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-gray-500 cursor-pointer"
        />
      </div>
    </div>
  );
};

const SidebarIcon = ({ icon, tooltip }) => {
    return (
      <div className="group relative flex items-center justify-center w-12 h-12 rounded-lg hover:bg-gray-300 cursor-pointer">
        {icon}
        <span className="absolute left-14 bg-gray-200 text-gray-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-50 shadow-lg">
          {tooltip}
        </span>
      </div>
    );
  };

export default SidebarLeft;
