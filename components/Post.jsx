import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Heart, MessageCircle, CalendarDays } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import UseCodeViewer from "./UseCodeViewer";

function Post() {
  return (
    <div>
      <Card className="mx-16">
        {/* profile */}
        <div className="flex pl-4 gap-3">
          <Avatar className="h-12 w-12 border rounded-2xl">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="@shadcn"
              className="grayscale"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <h3>Alexa Rivera</h3>
            <div className="flex items-center flex-row gap-2 text-sm text-muted-foreground">
              <CalendarDays className="h-3" />
              <span>08 May 2026</span>
            </div>
          </div>
        </div>
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
          <br />
          {/* code snippet */}
          <UseCodeViewer />
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
