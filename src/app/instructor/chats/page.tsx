'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import ChatList from '@/components/common/chat/ChatList';
import ChatWindow from '@/components/common/chat/ChatWindow';
import ComposeMessageDialog from '@/components/common/chat/ComposeMessageDialog';
import SearchInput from "@/components/common/SearchInput";
import {Instructor} from "@/lib/@fake-db/instructors";
import {instructorChats} from "@/lib/@fake-db/chats";

const Page = () => {
    const [chats, setChats] = useState(instructorChats);
    const [selectedChatId, setSelectedChatId] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [isComposeOpen, setIsComposeOpen] = useState(false);

    const selectedChat = chats.find(chat => chat.id === selectedChatId);

    const filteredChats = chats.filter(chat =>
        chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        chat.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSendMessage = (message: string) => {
        if (!selectedChat || !message.trim()) return;

        const newMessage = {
            id: Date.now(),
            text: message,
            sender: 'You',
            time: 'now',
            isOwn: true
        };

        setChats(prevChats =>
            prevChats.map(chat =>
                chat.id === selectedChatId
                    ? {
                        ...chat,
                        messages: [...chat.messages, newMessage],
                        lastMessage: message,
                        time: 'now'
                    }
                    : chat
            )
        );
    };

    const handleComposeMessage = (teacher: Instructor, message: string) => {
        const newChat = {
            id: Date.now(),
            name: teacher.name,
            lastMessage: message,
            time: 'now',
            avatar: teacher.avatar,
            isActive: false,
            messages: [
                {
                    id: 1,
                    text: message,
                    sender: 'You',
                    time: 'now',
                    isOwn: true
                }
            ]
        };

        setChats(prevChats => [newChat, ...prevChats]);
        setSelectedChatId(newChat.id);
        setIsComposeOpen(false);
    };

    return (
        <div className="mt-4">
            <div className="h-screen flex gap-6">
                {/* Left Sidebar - Chat List */}
                <div className="w-[424px] flex flex-col bg-white">
                    {/* Header */}
                    <div className="p-6 pb-4 space-y-4 border-b border-gray-100">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl">Message</h2>
                            <Button
                                onClick={() => setIsComposeOpen(true)}
                                size="sm"
                                className="bg-secondary-100 text-secondary-500 hover:bg-secondary-500 hover:text-secondary-100"
                            >
                                <Plus className="h-4 w-4"/>
                                Compose
                            </Button>
                        </div>

                        {/* Search */}
                        <div className="relative">
                            <SearchInput
                                placeholder="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="!w-auto !min-w-full"
                            />
                        </div>
                    </div>

                    {/* Chat List */}
                    <div className="flex-1 overflow-y-auto">
                        <ChatList
                            chats={filteredChats}
                            selectedChatId={selectedChatId}
                            onSelectChat={setSelectedChatId}
                        />
                    </div>
                </div>

                {/* Right Side - Chat Window */}
                <div className="flex-1 flex flex-col bg-white">
                    {selectedChat ? (
                        <ChatWindow
                            chat={selectedChat}
                            onSendMessage={handleSendMessage}
                        />
                    ) : (
                        <div className="flex-1 flex items-center justify-center text-gray-500">
                            Select a chat to start messaging
                        </div>
                    )}
                </div>

                {/* Compose Message Dialog */}
                <ComposeMessageDialog
                    open={isComposeOpen}
                    onOpenChange={setIsComposeOpen}
                    onSendMessage={handleComposeMessage}
                />
            </div>
        </div>
    );
};

export default Page;
