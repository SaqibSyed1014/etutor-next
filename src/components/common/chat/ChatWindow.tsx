'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Flag, Ban } from 'lucide-react';
import { cn } from "@/lib/utils";
import {DotsThree, PaperPlaneRightSolid, PencilLine} from "@/assets/icons/common-icons";

interface Message {
  id: number;
  text: string;
  sender: string;
  time: string;
  isOwn: boolean;
}

interface Chat {
  id: number;
  name: string;
  lastMessage: string;
  time: string;
  avatar: string;
  isActive: boolean;
  messages: Message[];
}

interface ChatWindowProps {
  chat: Chat;
  onSendMessage: (message: string) => void;
}

const ChatWindow = ({ chat, onSendMessage }: ChatWindowProps) => {
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Chat Header */}
      <div className="py-5 px-6 border-b border-gray-100 bg-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Avatar className="size-16">
                <AvatarImage src={chat.avatar} alt={chat.name} />
                <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
              </Avatar>
              {chat.isActive && (
                <div className="absolute bottom-1 right-1 size-3 bg-success-500 rounded-full border-2 border-white" />
              )}
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-lg">{chat.name}</h3>
              <p className="text-gray-700">
                {chat.isActive ? 'Active Now' : 'Offline'}
              </p>
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="gray" size="sm" className="size-12">
                <DotsThree />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white">
              <DropdownMenuItem className="text-red-600">
                <Flag className="h-4 w-4 mr-2" />
                Report
              </DropdownMenuItem>
              <DropdownMenuItem className="text-red-600">
                <Ban className="h-4 w-4 mr-2" />
                Block
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 flex items-end px-6 py-12 overflow-auto max-h-screen h-full">
        <div className="flex flex-col justify-end w-full gap-4 mt-auto">
          {chat.messages.map((message) => (
            <div
                key={message.id}
                className={cn(
                    "flex",
                    message.isOwn ? "justify-end" : "justify-start"
                )}
            >
              <div>
                <div
                    className={cn(
                        "text-xs text-gray-600 flex gap-1.5 items-center mb-2",
                        message.isOwn
                            ? "text-end justify-end"
                            : "text-start"
                    )}
                >
                  {!message.isOwn && <Avatar className="size-6">
                    <AvatarImage src={chat.avatar} alt={chat.name}/>
                    <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
                  </Avatar>}
                  {message.time}
                </div>
                <div
                    className={cn(
                        "max-w-xs lg:max-w-md px-4 py-2 rounded-lg",
                        message.isOwn
                            ? "bg-primary-500 text-white"
                            : "bg-primary-100 text-gray-900"
                    )}
                >
                  <div className="text-sm">{message.text}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Message Input */}
      <div className="p-6 border-t border-gray-100 bg-white">
        <div className="flex items-center space-x-5">
          <div className="relative flex-1">
            <Input
              placeholder="Type your message"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full pl-12"
            />
            <div className="text-primary-500 absolute left-3 top-1/2 transform -translate-y-1/2">
              <PencilLine/>
            </div>
          </div>
          <Button onClick={handleSend}>
            Send
            <PaperPlaneRightSolid />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
