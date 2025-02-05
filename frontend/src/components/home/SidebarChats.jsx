import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const SidebarChats = () => {
  return (
    <div className="w-96 h-screen bg-white text-gray-900 shadow-lg flex flex-col">
        {/* Header */}
        <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800">Chats</h2>
        </div>


      {/* Search Bar */}
      <div className="p-4 bg-white">
        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <Input
            type="text"
            placeholder="Search chats..."
            className="pl-10 w-full text-gray-700 text-sm font-medium placeholder-gray-400 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
      </div>
      
      {/* Chat List */}
      <div className="flex-1 overflow-y-auto p-2 space-y-2">
        <ChatItem name="John Doe" message="Hey, how's it going?" time="10:30 AM" />
        <ChatItem name="Jane Smith" message="Let's catch up later!" time="Yesterday" />
        <ChatItem name="Alex Brown" message="Did you see the update?" time="2:45 PM" />
      </div>
    </div>
  );
};

const ChatItem = ({ name, message, time }) => {
  return (
    <div className="p-3 flex items-center border-b border-gray-200 hover:bg-gray-100 cursor-pointer rounded-lg transition relative">
      <Avatar>
        <AvatarImage src="https://via.placeholder.com/40" alt={name} />
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="ml-3 flex-1">
        <div className="text-[#111b21] font-normal text-sm">{name}</div>
        <div className="text-[13px] text-[#667781] truncate w-48">{message}</div>
      </div>
      <div className="text-xs text-gray-500 absolute right-4 top-1/2 transform -translate-y-1/2 transition-all duration-200 ease-in-out group-hover:scale-110 group-hover:text-gray-700">
        {time}
      </div>
    </div>
  );
};

export default SidebarChats;
