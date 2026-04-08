import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import BlogPost from '../components/BlogPost';
import Footer from '../components/Footer';
import axios from 'axios';
import { Link } from 'react-router-dom'; 

function BlogPostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Latest Posts</h1>
        
        {loading ? (
          <p>Loading posts...</p>
        ) : (
          <div className="grid gap-6">
            {posts.map(post => (
              <div key={post.id} className="border p-4 rounded shadow-sm">
                <BlogPost post={{
                  title: post.title,
                  content: post.body.substring(0, 100) + "...", 
                  author: `User ${post.userId}`, 
                  date: "March 18, 2026"
                }} />
                <Link 
                  to={`/post/${post.id}`} 
                  className="text-blue-500 hover:underline"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default BlogPostsPage;