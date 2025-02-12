import React, { useState } from 'react';

const Comments = () => {
    const [comments, setComments] = useState([
        { id: 1, user: 'Alice', comment: 'Great place to study! Very quiet and comfortable.' },
        { id: 2, user: 'Bob', comment: 'The library has a wide selection of books and resources.' },
        { id: 3, user: 'Charlie', comment: 'Friendly staff and clean environment.' },
        { id: 4, user: 'Diana', comment: 'I love the study rooms, they are very convenient.' },
    ]);

    const [newComment, setNewComment] = useState('');
    const [newUser, setNewUser] = useState('');

    const handleAddComment = (e) => {
        e.preventDefault();
        if (newUser.trim() && newComment.trim()) {
            const newCommentObj = {
                id: comments.length + 1,
                user: newUser,
                comment: newComment,
            };
            setComments([...comments, newCommentObj]);
            setNewUser('');
            setNewComment('');
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">User Comments</h2>
            <div className="flex flex-col space-y-4">
                {comments.map((comment) => (
                    <div key={comment.id} className="border-b pb-4">
                        <div className="text-lg font-semibold">{comment.user}</div>
                        <div className="text-gray-700">{comment.comment}</div>
                    </div>
                ))}
            </div>
            <form onSubmit={handleAddComment} className="mt-4">
                <input
                    type="text"
                    placeholder="Your name"
                    value={newUser}
                    onChange={(e) => setNewUser(e.target.value)}
                    className="w-full p-2 mb-2 border rounded"
                />
                <textarea
                    placeholder="Your comment"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full p-2 mb-2 border rounded"
                />
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                    Add Comment
                </button>
            </form>
        </div>
    );
};

export default Comments;