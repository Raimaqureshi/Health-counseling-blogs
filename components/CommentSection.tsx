"use client";

import { useState } from "react";

interface Comment {
  id: string;
  content: string;
  timestamp: Date;
}

interface CommentSectionProps {
  postId?: number;
}

export default function CommentSection({ postId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const newCommentObj: Comment = {
        id: Math.random().toString(36).substr(2, 9),
        content: newComment,
        timestamp: new Date(),
      };
      setComments([...comments, newCommentObj]);
      setNewComment("");
    }
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Comments</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="w-full p-2 border rounded mb-2"
          rows={3}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="p-4 bg-white rounded-lg shadow-sm">
            <p className="text-gray-700">{comment.content}</p>
            <span className="text-sm text-gray-500">
              {formatDate(comment.timestamp)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
