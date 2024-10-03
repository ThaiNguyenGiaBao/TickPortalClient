"use client";
import React, { useEffect, useState } from "react";
import { FiMessageSquare, FiPaperclip, FiMic } from "react-icons/fi";
import axios from "axios";
import useSenderConversationStore from "../store/senderConversationStore";

type MessageProps = {
  avatarUrl: string;
  text: string;
  start: boolean;
};

type Message = {
  id: number;
  text: string;
  avatarUrl: string;
};

const Message = ({ avatarUrl, text, start = true }: MessageProps) => {
  return (
    <div className={start ? `chat chat-start` : `chat chat-end`}>
      <div className="chat-image avatar ">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={avatarUrl} />
        </div>
      </div>
      <div
        className={
          start
            ? `chat-bubble text-white bg-gray-500 font-semibold max-w-64 md:max-w-80`
            : `chat-bubble text-white bg-blue-600 font-semibold max-w-64 md:max-w-80`
        }
      >
        {text}
      </div>
    </div>
  );
};

const ChatWindow = () => {
  const [messageList, setMessageList] = useState<Message[]>([]);
  const senderConversation = useSenderConversationStore(
    (state) => state.senderConversation
  );

  const conversation = [
    {
      id: 1,
      text: "Hi there!",
      avatarUrl: "https://avatar.iran.liara.run/username?username=john",
    },
    {
      id: 2,
      text: "Hi!",
      avatarUrl: "https://avatar.iran.liara.run/username?username=john",
    },
    {
      id: 3,
      text: "I am John Doe",
      avatarUrl: "https://avatar.iran.liara.run/username?username=john",
    },
  ];
  //http://localhost:3001/v1/api/message/123
  useEffect(() => {
    axios
      .get("http://localhost:3001/v1/api/message/123")
      .then((res) => {
        //console.log(res.data);
        const messageList: Message[] = res.data.data.messages.map(
          (message: any) => {
            return {
              id: message.id,
              text: message.text,
              avatarUrl: message.sender.avatarUrl,
            };
          }
        );
        console.log(messageList);
        setMessageList(messageList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messageList.map((message) => (
          <Message
            key={message.id}
            avatarUrl={message.avatarUrl}
            text={message.text}
            start={true}
          />
        ))}
      </div>
      <div className="bg-white border-t border-gray-200 px-4 py-3">
        <div className="flex items-center">
          <button className="p-2 rounded-full text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <FiPaperclip className="h-5 w-5" />
          </button>
          <input
            type="text"
            placeholder="Type a message"
            className="flex-1 mx-4 py-2 border rounded-full px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="p-2 rounded-full text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <FiMessageSquare className="h-5 w-5" />
          </button>
          <button className="ml-2 p-2 rounded-full text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <FiMic className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
