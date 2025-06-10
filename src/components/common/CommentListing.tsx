'use client';

import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import {ChatCircle} from "@/assets/icons/common-icons";

interface CommentAuthor {
    id: string;
    name: string;
    avatar: string;
    isAdmin?: boolean;
}

interface Comment {
    id: string;
    parentId: string | null
    author: CommentAuthor;
    content: string;
    createdAt: string;
    openReplyField: boolean;
    isParent: boolean;
    replies: Comment[];
}

interface CommentListProps {
    comments: Comment[];
    onAddComment?: (content: string) => void;
    onAddReply?: (commentId: string, content: string, parentId: string | null) => void;
    toggleReplyBtn: (commentId: string) => void
}

const CommentList: React.FC<CommentListProps> = ({
                                                     comments,
                                                     onAddComment,
                                                     onAddReply,
                                                     toggleReplyBtn,
                                                 }) => {
    const [newComment, setNewComment] = useState<string>('');
    const [replyingTo, setReplyingTo] = useState<string | null>(null);
    const [replyContent, setReplyContent] = useState<string>('');
    const [showCommentField, setField] = useState<boolean>(false);

    const handleAddComment = () => {
        if (replyContent.trim()) {
            if (onAddComment) {
                onAddComment(replyContent);
            }
            setNewComment('');
            toast({
                title: "Comment added",
                description: "Your comment has been posted successfully.",
            });
        }
    };

    const handleAddReply = (commentId: string, parentId: string | null) => {
        if (replyContent.trim()) {
            onAddReply?.(commentId, replyContent, parentId);
            setReplyingTo(null);
            setReplyContent('');
            toast({
                title: "Reply added",
                description: "Your reply has been posted successfully.",
            });
        }
    };

    // Function to format date to "X weeks ago" format
    const formatTimeAgo = (dateString: string) => {
        // For simplicity, we're returning the date string as is
        // In a real app, you would calculate the time difference
        return dateString;
    };


    const renderComment = (comment: Comment, isReply: boolean = false, isLastReply = false) => (
        <div key={comment.id} className={`flex gap-3 relative ${isReply ? 'mt-2' : 'mt-5'}`}>
            {!isReply && !!comment.replies.length && <div className="w-5 bg-white h-[100%] border-r border-gray-100 absolute top-0 left-0 bottom-0 z-10"></div>}

            { !comment.openReplyField && isLastReply && replyingTo !== comment.parentId && <div className="h-[calc(100%_-_20px)] bg-white w-7 absolute -left-[40px] bottom-0 z-10"></div>}

            <div className={`relative ${isReply && 'h-fit'}`}>
                <div className={`relative ${isReply && 'h-fit'}`}>
                    {isReply &&
                        <div className="w-6 h-px bg-gray-100 absolute left-[-100%] top-1/2 -translate-y-1/2"></div>}

                    <Avatar className="h-10 w-10 relative z-20">
                        <AvatarImage src={comment.author.avatar} alt={comment.author.name}/>
                        <AvatarFallback>{comment.author.name[0]}</AvatarFallback>
                    </Avatar>
                </div>
            </div>

            <div className="flex-1 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <span className="font-medium text-sm text-gray-900">{comment.author.name}</span>

                    {comment.author.isAdmin && (
                        <span className="bg-secondary-500 text-white text-[10px] px-1.5 py-0.5">ADMIN</span>
                    )}
                    <span className="text-gray-600 text-xs">• {formatTimeAgo(comment.createdAt)}</span>
                </div>

                <p>{comment.content}</p>

                <button
                    className={`flex items-center gap-2 text-gray-500 hover:text-primary-500 ${isReply ? 'opacity-50' : ''}`}
                    onClick={() => {
                        if (isReply) return;
                        toggleReplyBtn(comment.id)
                        setField(!showCommentField);
                        setReplyingTo(replyingTo === comment.id ? null : comment.id)
                    }}
                >
                    <ChatCircle  />
                    <span className="text-sm">REPLY</span>
                </button>

                {comment.replies?.map((reply, index) => renderComment(reply, true, index === comment.replies.length - 1))}

                {comment.openReplyField && (
                    <div className="mt-3 relative">
                        <div className="flex gap-2">
                            <div className="relative flex-1">
                                <input
                                    placeholder="Write your reply..."
                                    className="w-full pl-11 py-3"
                                    value={replyContent}
                                    onChange={(e) => setReplyContent(e.target.value)}
                                />
                                <div className="text-gray-900 absolute left-3 top-1/2 -translate-y-1/2 [&>svg]:size-6">
                                    <ChatCircle/>
                                </div>
                            </div>
                            <Button onClick={() => {
                                handleAddReply(comment.id, comment.parentId)
                            }}>
                                Post Reply
                            </Button>
                        </div>

                        <div className="w-6 h-0.5 bg-gray-100 absolute -left-[40px] top-1/2 -translate-y-1/2"></div>

                        <div className="h-[50%] bg-white w-10 absolute -left-[40px] bottom-0 z-10"></div>
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <div className="w-full">
            {comments.map((comment) => renderComment(comment))}
        </div>
    );
};

export default CommentList;
