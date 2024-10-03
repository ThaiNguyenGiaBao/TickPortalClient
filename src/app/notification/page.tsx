import React from "react";
import NavBar from "../component/navbar";
import SenderList from "../component/SenderList";
import {
  FiSearch,
  FiMessageSquare,
  FiStar,
  FiPaperclip,
  FiMic,
} from "react-icons/fi";
import ChatWindow from "../component/ChatWindow";

const TickPortal = () => {


  return (
    <div className="flex bg-gray-100">
      <div className="flex-1  flex flex-col">
        {/* Chat Section */}
        <div className="flex-1 flex overflow-hidden">
          <SenderList />

          <ChatWindow />
        </div>
      </div>
    </div>
  );
};

export default TickPortal;
