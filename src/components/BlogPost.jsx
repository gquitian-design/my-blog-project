import { useState } from 'react';

const BlogPost = ({ post }) => {
  const [likes, setLikes] = useState(0);

  return (
    <article className="blog-post">
      <h2 className='text-xl font-bold'>{post.title}</h2>
      <p>By {post.author} on {post.date}</p>
      <p>{post.content}</p>
      <button onClick={() => setLikes(likes + 1)}>
        ❤️ {likes} Likes
      </button>
    </article>
  );
};

export default BlogPost;