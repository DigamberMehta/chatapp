import React, { useState } from "react";
import SidebarLeft from "../components/home/SidebarLeft";
import SidebarChats from "../components/home/SidebarChats";
import ChatArea from "../components/home/ChatArea";
import CallHistory from "@/components/home/CallHistory";

const HomePage = () => {
  const [selectedComponent, setSelectedComponent] = useState("chats");

  return (
    <div className="home-page flex">
      <SidebarLeft
        onSelect={setSelectedComponent}
        selectedComponent={selectedComponent} // Pass selectedComponent
      />

      <div>
        {selectedComponent === "chats" && <SidebarChats />}
        {selectedComponent === "calls" && <CallHistory />}
      </div>

      <ChatArea />
    </div>
  );
};

export default HomePage;
