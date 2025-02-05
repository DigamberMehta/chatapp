import SidebarLeft from "../components/home/SidebarLeft";
import SidebarChats from "../components/home/SidebarChats";
import ChatArea from "../components/home/ChatArea";

const HomePage = () => {
  return (
    <div className="home-page flex">
      <SidebarLeft />
      <SidebarChats />
      <ChatArea />
    </div>
  );
};

export default HomePage;
