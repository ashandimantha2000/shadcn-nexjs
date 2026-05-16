import React from "react";
import { Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const user = "Ashan";

function Navbar() {
  return (
    <div>
      <nav className="px-16 py-8 sticky">
        <div className="flex justify-between">
          {/* icon */}
          <div className="flex items-center gap-3">
            <div className="bg-primary text-primary-foreground h-10 w-10 flex justify-center items-center rounded-xl">
              <Code2 />
            </div>
            <div>
              <h1 className="text-2xl">CodeCritic</h1>
              <p className="text-sm text-muted-foreground">
                Peer Code Reviewing Platform
              </p>
            </div>
          </div>
          {/* buttons */}
          {!user ? (
            <div>
              <div className="flex items-center gap-3">
                <Button variant="outline" className="rounded-sm px-6">
                  Log In
                </Button>
                <Button className="rounded-sm px-6">Sign Up</Button>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-5">
              <Button className="rounded-sm px-6">+ Post</Button>
              {/* profile */}
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8 border rounded-2xl">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                    className="grayscale"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <h3>Alexa Rivera</h3>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
