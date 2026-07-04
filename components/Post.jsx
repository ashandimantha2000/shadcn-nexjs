"use client";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Heart, MessageCircle } from "lucide-react";
import UseCodeViewer from "./UseCodeViewer";
import UserProfile from "./UserProfile";
//import api
import { getAllPosts } from "@/api/post.service";

function Post() {
  //calling getPost api
  const [posts, setPosts] = useState([]);

  async function loadPosts() {
    //if you want, can handle exception here (more spesific)
    const response = await getAllPosts();

    if (response.success) {
      setPosts(response.data);
    }
    
  }

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div>
      <Card className="mx-16">
        {posts.map((post, key) => (
          <div key={key} className="py-6 border-b last:border-b-0">
            {/* profile */}
            <UserProfile user={post.user} />
            {/* post */}
            <CardHeader>
              <CardTitle className="text-2xl font-bold">{post.title}</CardTitle>
              {post.githubUrl && (
                <CardDescription>
                  <a
                    href={post.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-mono text-sm"
                  >
                    {post.githubUrl}
                  </a>
                </CardDescription>
              )}
            </CardHeader>
            <CardContent>
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag.id}
                      className="bg-secondary text-secondary-foreground text-xs px-2.5 py-0.5 rounded-full"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              )}
              {/* code snippet */}
              <UseCodeViewer code={post.description} />
            </CardContent>
            <CardFooter className="gap-3">
              <button className="flex items-center gap-2">
                <Heart />
                <span>12 Likes</span>
              </button>
              <button className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                <span>Comment</span>
              </button>
            </CardFooter>
          </div>
        ))}
      </Card>
    </div>
  );
}

export default Post;
