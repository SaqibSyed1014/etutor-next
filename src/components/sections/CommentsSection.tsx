'use client';

import React, { useState } from 'react';
import CommentList from '../common/CommentListing';
import {courseComments} from "@/lib/@fake-db/collections";


const CourseComments: React.FC = () => {
    const [comments, setComments] = useState(courseComments);

    const handleAddComment = (content: string) => {
        const newComment = {
            id: `comment-${Date.now()}`,
            parentId: null,
            author: {
                id: 'current-user',
                name: 'You',
                avatar: '',
            },
            content,
            createdAt: 'Just now',
            openReplyField: false,
            isParent: true,
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
                            parentId: commentId,
                            author: {
                                id: 'current-user',
                                name: 'Your Name',
                                avatar: '',
                            },
                            content,
                            createdAt: 'Just now',
                            openReplyField: false,
                            isParent: false,
                            replies: [],
                        },
                    ],
                };
            }
            return comment;
        });

        setComments(updatedComments);
    };

    const resetAllReplyFields = (comments :any) => {
        return comments.map(comment => {
            const newComment = { ...comment, openReplyField: false };
            if (comment.replies && comment.replies.length > 0) {
                newComment.replies = resetAllReplyFields(comment.replies);
            }
            return newComment;
        });
    };
    const findCommentById = (comments :any, commentId :string) => {
        for (const comment of comments) {
            if (comment.id === commentId) {
                return comment;
            }
            if (comment.replies && comment.replies.length > 0) {
                const foundInReplies = findCommentById(comment.replies, commentId);
                if (foundInReplies) {
                    return foundInReplies;
                }
            }
        }
        return undefined;
    };
    const toggleReplyField = (comments :any, commentId :string) => {
        const targetComment = findCommentById(comments, commentId);
        const willOpenNewField = targetComment ? !targetComment.openReplyField : true;

        let baseComments = comments;

        if (willOpenNewField) {
            baseComments = resetAllReplyFields(comments);
        }

        return baseComments.map(comment => {
            if (comment.id === commentId) {
                return {
                    ...comment,
                    openReplyField: !comment.openReplyField,
                };
            }

            if (comment.replies && comment.replies.length > 0) {
                const updatedReplies = toggleReplyField(comment.replies, commentId);
                if (updatedReplies !== comment.replies) {
                    return {
                        ...comment,
                        replies: updatedReplies,
                    };
                }
            }
            return comment;
        });
    };

    function handleReplyButtonClick(commentId :string) {
        const updatedComments = toggleReplyField(comments, commentId);
        setComments(updatedComments);
    }


    return (
        <div>
            <h4>Comments <span className="font-normal">({comments.length})</span></h4>
            <CommentList
                comments={comments}
                onAddComment={handleAddComment}
                onAddReply={handleAddReply}
                toggleReplyBtn={handleReplyButtonClick}
            />
        </div>
    );
};

export default CourseComments;
