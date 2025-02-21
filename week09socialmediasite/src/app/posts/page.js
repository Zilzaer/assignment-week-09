'use client';

import { useState, useEffect } from 'react';
import { useUser, RedirectToSignIn } from '@clerk/clerk-react';
import { supabase } from '../libs/supabaseClient';

export default function Comments() {
  const { isLoaded, user } = useUser();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');
  const [posts, setPosts] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setMessage('User not found.');
      return;
    }
    
    const username = user?.username || user?.primaryEmailAddress?.emailAddress || 'Anonymous';

    // Inserting the post
    const { data, error } = await supabase
      .from('post')
      .insert([{ title, content, username, user_id: user.id }]);

    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage('Post submitted successfully!');
      setTitle('');
      setContent('');
      fetchPosts(); // Refresh the posts after a successful submission
    }
  };

  const fetchPosts = async () => {
    // Fetching posts
    const { data, error } = await supabase
      .from('post')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      setMessage(`Error fetching posts: ${error.message}`);
    } else {
      setPosts(data);
    }
  };

  useEffect(() => {
    if (isLoaded) {
      fetchPosts();
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <RedirectToSignIn />;
  }

  return (
    <div>
      <h1>Make a Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <small>{new Date(post.created_at).toLocaleString()}</small>
            <p>Posted by: {post.username}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
