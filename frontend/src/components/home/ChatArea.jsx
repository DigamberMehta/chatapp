import { useState, useEffect, useContext, useRef } from "react";
import { SendHorizontal, MoreVertical } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Plus } from "lucide-react";
import { io } from "socket.io-client";
import AuthContext from "@/context/AuthContext"; // ✅ Import AuthContext

const socket = io("http://localhost:3000");

const ChatArea = ({ selectedChat }) => {
  const { user } = useContext(AuthContext); // ✅ Get logged-in user details
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const inputRef = useRef(null); // ✅ Use ref to handle focus

  useEffect(() => {
    if (selectedChat) {
      setMessages([]); // Reset chat when a new user is selected
      inputRef.current?.focus(); // ✅ Auto-focus input when chat opens
    }

    socket.on("receive_message", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, [selectedChat]);

  const sendMessage = () => {
    if (message.trim() === "" || !selectedChat || !user) return;

    const newMessage = {
      sender: user.username, // ✅ Fix: Include sender username
      text: message,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, newMessage]);

    socket.emit("send_message", {
      sender: user.username, // ✅ Fix: Send sender username
      receiver: selectedChat.id,
      text: message,
    });

    setMessage("");
    inputRef.current?.focus(); // ✅ Keep focus on input after sending
  };

  // ✅ Handle Enter key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent newline in input
      sendMessage();
    }
  };

  if (!selectedChat) {
    return (
      <div className="flex flex-1 items-center justify-center bg-white text-gray-500">
        Select a user to start chatting
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col h-screen bg-white shadow-md">
      {/* Header */}
      <div className="p-4 border-b flex justify-between items-center bg-gray-100">
        <div className="flex items-center gap-2">
          <Avatar className="w-10 h-10">
            <AvatarImage src={selectedChat.avatar || "https://via.placeholder.com/40"} alt={selectedChat.name} />
          </Avatar>
          <h2 className="text-lg font-semibold text-gray-800">{selectedChat.name}</h2>
        </div>
        <MoreVertical className="text-gray-600 cursor-pointer" />
      </div>

      {/* Messages Area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((msg, index) => (
          <MessageBubble key={index} text={msg.text} sender={msg.sender} currentUser={user} />
        ))}
      </div>

      {/* Message Input */}
      <div className="p-4 bg-gray-50 flex items-center gap-2">
        <Plus size={26} className="text-gray-600 cursor-pointer" />
        <input
          ref={inputRef} // ✅ Autofocus on chat select
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown} // ✅ Handle Enter key
          className="flex-1 p-2 border rounded-full outline-none text-gray-700 bg-white shadow-sm text-sm"
        />
        <button onClick={sendMessage} className="p-2 bg-green-500 text-white rounded-full">
          <SendHorizontal size={20} />
        </button>
      </div>
    </div>
  );
};

// ✅ **Fixed: Updated `MessageBubble` to Show Messages Correctly**
const MessageBubble = ({ text, sender, currentUser }) => {
  const isSender = sender === currentUser.username; // ✅ Fix: Compare sender username

  return (
    <div className={`flex items-end ${isSender ? "justify-end" : "justify-start"}`}>
      <div className={`p-2 text-sm max-w-xs rounded-2xl shadow ${isSender ? "bg-green-500 text-white" : "bg-gray-100 text-gray-800"}`}>
        {text}
      </div>
    </div>
  );
};

export default ChatArea;
