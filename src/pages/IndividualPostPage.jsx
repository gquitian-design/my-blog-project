import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CommentForm from '../components/CommentForm';

function IndividualPostPage() {
  const { postId } = useParams(); 
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!postId) return;

    const fetchAllData = async () => {
      try {
        setLoading(true);
        
        const postRes = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        setPost(postRes.data);

        const userRes = await axios.get(`https://jsonplaceholder.typicode.com/users/${postRes.data.userId}`);
        setUser(userRes.data);

        const commRes = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        setComments(commRes.data);
        
      } catch (error) {
        console.error("API Error:", error.response?.status, error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, [postId]);

  if (loading) return <div className="p-10 text-center">Loading post details...</div>;
  if (!post) return <div className="p-10 text-center text-red-500">Post not found.</div>;

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow max-w-4xl mx-auto p-6'>
        <article className="mb-12">
          <h1 className="text-4xl font-extrabold mb-4 text-gray-900">{post.title}</h1>
          {user && (
            <div className="bg-blue-50 p-3 rounded-md mb-6">
              <p className="text-blue-800 font-medium">Author: {user.name}</p>
              <p className="text-blue-600 text-sm">{user.email}</p>
            </div>
          )}
          <div className="text-gray-800 leading-relaxed text-lg whitespace-pre-line">
            {post.body}
          </div>
        </article>

        <hr className="my-8" />

        <section>
          <h3 className="text-2xl font-bold mb-6">Comments</h3>
          <div className="space-y-4">
            {comments.length > 0 ? (
              comments.map(c => (
                <div key={c.id} className="p-4 border-l-4 border-blue-500 bg-gray-50 rounded shadow-sm">
                  <p className="font-bold text-gray-900">{c.name}</p>
                  <p className="text-gray-700 mt-1">{c.body}</p>
                </div>
              ))
            ) : (
              <p className="italic text-gray-500">No comments yet. Be the first to comment!</p>
            )}
          </div>
        </section>

        {/* Passing the logic to update comments list after posting */}
        <CommentForm postId={postId} onCommentAdded={(newC) => setComments([newC, ...comments])} />
      </main>
      <Footer />
    </div>
  );
}

export default IndividualPostPage;