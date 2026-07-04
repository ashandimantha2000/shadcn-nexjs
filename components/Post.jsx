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
          <div key={key}>
            {/* profile */}
            <UserProfile />
            {/* post */}
            <CardHeader>
              <CardTitle className="text-2xl font-bold">{post.title}</CardTitle>
              <CardDescription>descrion goes here</CardDescription>
              <CardAction>Card Action</CardAction>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                A reusable custom hook that syncs React state with localStorage.
                Handles serialization and SSR automatically.
              </p>
              <br />
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
