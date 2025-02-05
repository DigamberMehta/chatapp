import { Send, MoreVertical } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Chatbot from "@/components/ChatBot/chatBot";

const ChatArea = () => {
  return (
    <div className="flex flex-1 flex-col h-screen bg-white shadow-md">
      {/* Header */}
      <div className="p-4 border-b flex justify-between items-center bg-gray-100">
        <h2 className="text-lg font-semibold text-gray-800">Community Chat</h2>
        <MoreVertical className="text-gray-600 cursor-pointer" />
      </div>

      {/* Messages Area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        <MessageBubble text="Hey! How are you?" user={{ id: "john", name: "John Doe", avatar: "https://via.placeholder.com/40" }} />
        <MessageBubble text="I'm good, how about you?" user={{ id: "me", name: "You", avatar: "https://via.placeholder.com/40" }} />
        <MessageBubble text="Doing great!" user={{ id: "john", name: "John Doe", avatar: "https://via.placeholder.com/40" }} />
      </div>

      {/* Message Input */}
      <div className="p-4 border-t bg-gray-100 flex items-center gap-2">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 p-2 border rounded-full outline-none text-gray-700 bg-white shadow-sm"
        />
        <button className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
          <Send size={20} />
        </button>
      </div>
      
    </div>
  );
};

const MessageBubble = ({ text, user }) => {
  const isSender = user.id === "me";

  return (
    <div className={`flex items-end ${isSender ? 'justify-end' : 'justify-start'}`}>
      {!isSender && (
        <Avatar className="mr-2 w-10 h-10">
          <AvatarImage src={user.avatar || ""} alt={user.name} />
          <AvatarFallback>{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
      )}
      <div className={`p-2 text-sm max-w-xs rounded-2xl shadow ${isSender ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-800'}`}>
        {text}
      </div>
      {isSender && (
        <Avatar className="ml-2 w-8 h-8">
          <AvatarImage src={user.avatar || ""} alt="You" />
          <AvatarFallback>Me</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
};

export default ChatArea;
