import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {  CalendarDays } from "lucide-react";

function UserProfile() {
  return (
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
  );
}

export default UserProfile;
