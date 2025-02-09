import { useEffect, useState, useContext } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import axios from "axios";
import AuthContext from "@/context/AuthContext";

const SidebarChats = ({ onSelectChat }) => {
  const { user } = useContext(AuthContext);
  const [availableUsers, setAvailableUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchAvailableUsers = async () => {
      try {
        const token = localStorage.getItem("jwt_token");

        if (!token) {
          console.error("No token found");
          return;
        }

        const response = await axios.get("http://localhost:3000/api/users/available-users", {
          headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
          withCredentials: true,
        });

        setAvailableUsers(response.data);
      } catch (error) {
        console.error("Error fetching available users:", error.response?.data || error.message);
      }
    };

    fetchAvailableUsers();
  }, []);

  const filteredUsers = availableUsers.filter((u) =>
    u.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-full text-gray-700 text-sm font-medium placeholder-gray-400 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto p-2 space-y-2">
        {filteredUsers.map((u) => (
          <ChatItem key={u.id} user={u} onSelectChat={onSelectChat} />
        ))}
      </div>
    </div>
  );
};

const ChatItem = ({ user, onSelectChat }) => {
  return (
    <div
      className="p-3 flex items-center border-b border-gray-200 hover:bg-gray-100 cursor-pointer rounded-lg transition relative"
      onClick={() => onSelectChat(user)}
    >
      <Avatar>
        <AvatarImage src={user.avatar || "https://via.placeholder.com/40"} alt={user.name} />
        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="ml-3 flex-1">
        <div className="text-[#111b21] font-normal text-sm">{user.name}</div>
        <div className="text-[13px] text-[#667781] truncate w-48">@{user.username}</div>
      </div>
    </div>
  );
};

export default SidebarChats;
