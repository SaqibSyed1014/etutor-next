'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import ChatList from '@/components/common/chat/ChatList';
import ChatWindow from '@/components/common/chat/ChatWindow';
import ComposeMessageDialog from '@/components/common/chat/ComposeMessageDialog';
import SearchInput from "@/components/common/SearchInput";
import {Instructor} from "@/lib/@fake-db/instructors";

// Mock data for chats
const initialChats = [
    {
        id: 1,
        name: 'Jane Cooper',
        lastMessage: 'Yeah sure, tell me zafor',
        time: 'just now',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b371?w=40&h=40&fit=crop&crop=face',
        isActive: true,
        messages: [
            {
                id: 1,
                text: 'Hello and thanks for signing up to the course. If you have any questions about the course or Adobe XD, feel free to get in touch and I\'ll be happy to help 😊',
                sender: 'Jane Cooper',
                time: 'Today',
                isOwn: false
            },
            {
                id: 2,
                text: 'I only have a small doubt about your lecture, can you give me some time for chat?',
                sender: 'You',
                time: 'Time',
                isOwn: true
            },
            {
                id: 3,
                text: 'Yeah sure, tell me zafor',
                sender: 'Jane Cooper',
                time: 'Time',
                isOwn: false
            }
        ]
    },
    {
        id: 2,
        name: 'Jenny Wilson',
        lastMessage: 'Thank you so much, sir',
        time: '2 d',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
        isActive: false,
        messages: [
            {
                id: 1,
                text: 'Thank you so much, sir',
                sender: 'Jenny Wilson',
                time: '2 days ago',
                isOwn: false
            }
        ]
    },
    {
        id: 3,
        name: 'Marvin McKinney',
        lastMessage: 'You\'re welcome',
        time: '1 m',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
        isActive: false,
        messages: [
            {
                id: 1,
                text: 'You\'re welcome',
                sender: 'Marvin McKinney',
                time: '1 minute ago',
                isOwn: false
            }
        ]
    }
];

const Page = () => {
    const [chats, setChats] = useState(initialChats);
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
        <div className="mt-10">
            <div className="h-screen flex gap-6 bg-white">
                {/* Left Sidebar - Chat List */}
                <div className="w-[424px] border border-gray-200 flex flex-col">
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
                <div className="flex-1 flex flex-col border border-gray-100">
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
