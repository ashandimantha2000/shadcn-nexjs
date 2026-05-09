import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Heart, MessageCircle, Bookmark, CalendarDays } from "lucide-react";

function Post() {
  return (
    <div>
      <Card>
        {/* post */}
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <CardAction>Card Action</CardAction>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            A reusable custom hook that syncs React state with localStorage.
            Handles serialization and SSR automatically.
          </p>
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
      </Card>
    </div>
  );
}

export default Post;
