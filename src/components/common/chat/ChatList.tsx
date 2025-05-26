'use client';

import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

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

interface ChatListProps {
    chats: Chat[];
    selectedChatId: number | null;
    onSelectChat: (chatId: number) => void;
}

const ChatList = ({ chats, selectedChatId, onSelectChat }: ChatListProps) => {
    return (
        <div className="">
            {chats.map((chat) => (
                <div
                    key={chat.id}
                    onClick={() => onSelectChat(chat.id)}
                    className={cn(
                        "py-3 px-6 cursor-pointer hover:bg-gray-50",
                        selectedChatId === chat.id && "bg-primary-200"
                    )}
                >
                    <div className="flex items-start space-x-4">
                        <div className="relative">
                            <Avatar className="size-12">
                                <AvatarImage src={chat.avatar} alt={chat.name} />
                                <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            {chat.isActive && (
                                <div className="absolute bottom-0 right-1 size-2.5 bg-success-500 rounded-full border-2 border-primary-200" />
                            )}
                        </div>

                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                                <h3 className="text-sm font-medium truncate">
                                    {chat.name}
                                </h3>
                                <span className="text-sm text-gray-700">{chat.time}</span>
                            </div>
                            <p className="text-gray-700 truncate mt-1">
                                {chat.lastMessage}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ChatList;
