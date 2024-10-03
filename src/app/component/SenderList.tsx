"use client";
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { shortenString } from "@/utils";
import axios from "axios";
import useSenderConversationStore from "../store/senderConversationStore";
import { SenderConversation } from "../store/senderConversationStore";
type Sender = {
  avatarUrl: string;
  email: string;
  id: string;
  username: string;
};

type SenderItemProps = {
  sender: Sender;
  handleOnClick: (senderConversation: SenderConversation) => void;
  isFocused?: boolean;
};

const SenderItem = ({ sender, handleOnClick, isFocused }: SenderItemProps) => {
  return (
    <div
      className={
        `flex items-center p-4 hover:bg-gray-100 hover:cursor-pointer` +
        (isFocused ? " bg-gray-100" : "")
      }
      onClick={() => {
        handleOnClick({ sender_Id: sender.id });
      }}
    >
      <img
        src={sender.avatarUrl}
        alt={sender.username}
        className="h-12 w-12 rounded-full mr-4"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{sender.username}</h3>
        <p className="text-gray-600">{shortenString(sender.email, 20)}</p>
      </div>
    </div>
  );
};

const SenderList = () => {
  const [SenderList, setSenderList] = useState<Sender[]>([]);
  const setSenderConversation = useSenderConversationStore(
    (state) => state.setSenderConversation
  );
  const senderConversation = useSenderConversationStore(
    (state) => state.senderConversation
  );
  console.log(senderConversation);
  useEffect(() => {
    const getSenderList = async () => {
      await axios
        .get("http://localhost:3001/v1/api/message/conversations")
        .then((res) => {
          console.log(res.data);
          setSenderList(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getSenderList();
  }, []);
  return (
    <div className="w-80 border-r border-gray-200 bg-white overflow-y-auto">
      <div className="p-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search messages"
            className="w-full pl-10 pr-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
          />
          <div className="absolute top-3 left-3">
            <FiSearch className="text-gray-500" />
          </div>
        </div>
      </div>
      {SenderList.map((sender) => {
        return (
          <SenderItem
            key={sender.id}
            sender={sender}
            handleOnClick={setSenderConversation}
            isFocused={sender.id === senderConversation?.sender_Id}
          />
        );
      })}
    </div>
  );
};

export default SenderList;
