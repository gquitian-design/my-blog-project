import { useState } from 'react';
import axios from 'axios';

const CommentForm = ({ postId, onCommentAdded }) => {
  const [name, setName] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !body) return alert("Please fill in all fields");

    try {
      const response = await axios.post(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
        name,
        body,
        postId: parseInt(postId)
      });
      
      onCommentAdded(response.data);
      setName('');
      setBody('');
      alert("Comment posted!");
    } catch (err) {
      console.error("Post failed", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 p-6 bg-white border rounded-lg shadow-sm">
      <h4 className="text-xl font-bold mb-4">Leave a Comment</h4>
      <input 
        className="w-full border p-2 mb-4 rounded" 
        placeholder="Your Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <textarea 
        className="w-full border p-2 mb-4 rounded" 
        placeholder="Your Comment" 
        rows="4" 
        value={body} 
        onChange={(e) => setBody(e.target.value)}
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Submit Comment
      </button>
    </form>
  );
};

export default CommentForm;