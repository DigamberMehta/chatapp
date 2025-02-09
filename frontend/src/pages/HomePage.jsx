import React, { useState } from "react";
import SidebarLeft from "../components/home/SidebarLeft";
import SidebarChats from "../components/home/SidebarChats";
import ChatArea from "../components/home/ChatArea";
import CallHistory from "@/components/home/CallHistory";

const HomePage = () => {
  const [selectedComponent, setSelectedComponent] = useState("chats");
  const [selectedChat, setSelectedChat] = useState(null); // Track the selected chat

  return (
    <div className="home-page flex">
      <SidebarLeft onSelect={setSelectedComponent} selectedComponent={selectedComponent} />

      <div>
        {selectedComponent === "chats" && <SidebarChats onSelectChat={setSelectedChat} />}
        {selectedComponent === "calls" && <CallHistory />}
      </div>

      <ChatArea selectedChat={selectedChat} />
    </div>
  );
};

export default HomePage;
