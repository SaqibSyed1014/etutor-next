'use client';

import React, { useState } from 'react';
import CommentList from '../common/CommentListing';
import {courseComments} from "@/lib/@fake-db/collections";


const CourseComments: React.FC = () => {
    const [comments, setComments] = useState(courseComments);

    const handleAddComment = (content: string) => {
        const newComment = {
            id: `comment-${Date.now()}`,
            author: {
                id: 'current-user',
                name: 'Your Name',
                avatar: '',
            },
            content,
            createdAt: 'Just now',
            replies: [],
        };

        setComments([...comments, newComment]);
    };

    const handleAddReply = (commentId: string, content: string) => {
        const updatedComments = comments.map(comment => {
            if (comment.id === commentId) {
                return {
                    ...comment,
                    replies: [
                        ...comment.replies,
                        {
                            id: `reply-${Date.now()}`,
                            author: {
                                id: 'current-user',
                                name: 'Your Name',
                                avatar: '',
                            },
                            content,
                            createdAt: 'Just now',
                            replies: [],
                        },
                    ],
                };
            }
            return comment;
        });

        setComments(updatedComments);
    };

    return (
        <div>
            <h4>Comments <span className="font-normal">({comments.length})</span></h4>
            <CommentList
                comments={comments}
                onAddComment={handleAddComment}
                onAddReply={handleAddReply}
            />
        </div>
    );
};

export default CourseComments;
