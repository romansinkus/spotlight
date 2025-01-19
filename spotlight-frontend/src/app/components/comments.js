import React from 'react';

const Comments = () => {
    const comments = [
        { id: 1, user: 'Alice', comment: 'Great place to study! Very quiet and comfortable.' },
        { id: 2, user: 'Bob', comment: 'The library has a wide selection of books and resources.' },
        { id: 3, user: 'Charlie', comment: 'Friendly staff and clean environment.' },
        { id: 4, user: 'Diana', comment: 'I love the study rooms, they are very convenient.' },
    ];

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">User Reviews</h2>
            <div className="flex flex-col space-y-4">
                {comments.map((comment) => (
                    <div key={comment.id} className="border-b pb-4">
                        <div className="text-lg font-semibold">{comment.user}</div>
                        <div className="text-gray-700">{comment.comment}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Comments;