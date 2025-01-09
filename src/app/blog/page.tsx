"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

type BlogPost = {
  id: string; 
  title: string;
  content: string;
  image_url: string | null;
  created_at: string;
};

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase.from("blog").select("*");
      if (error) {
        console.error("Error fetching posts:", error);
        setError("Error fetching posts");
      } else {
        console.log("Fetched posts:", data);
        setPosts(data || []); 
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="blog-section">
      <h1 className="text-3xl font-bold mb-6">Blogs</h1>

      {error && (
        <div className="text-red-500 mb-4">
          <strong>{error}</strong>
        </div>
      )}

      
      {posts.map((post) => (
        <div
          key={post.id}
          className="mb-4 p-4 bg-white shadow rounded"
          style={{
            boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.1)",
            backgroundColor: "var(--bg-color)", 
          }}
        >
          <h3 className="text-xl font-semibold">{post.title}</h3>
          <p className=" text-lg text-gray-700 mt-2">{post.content}</p>
          {post.image_url && (
            <img
              src={post.image_url}
              alt="Post thumbnail"
              className="w-full mt-4 rounded-md"
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
          )}
          <p className="text-sm text-gray-500 mt-4">
            {new Date(post.created_at).toLocaleDateString()}
          </p>
        </div>
      ))}

      <a href="https://supabase.com/dashboard/project/wncaefznhsbbbrjdruvo/editor/29443?schema=public" target="_blank" rel="noopener noreferrer">
        <button className="text-2xl"
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit a Blog Post
        </button>
      </a>
    </div>
  );
};

export default Blog;

