"use client";
import { useState } from "react";

import Post from "@/Components/Post/Post"

import styles from './styles.module.css'

export default function PostClientComponent(array) {
  const [isAscending, setAscending] = useState(true);

  const posts = (isAscending) ? array.data : array.data.reverse();

  return (
    <main className={`${styles.posts}`}>
      <button>Sort</button>
      {posts.map((post) => (
        <Post key={post.id} id={post.id} title={post.title} author={post.author} content={post.content} timestamp={post.timestamp} />
      ))}
    </main>
  );
}