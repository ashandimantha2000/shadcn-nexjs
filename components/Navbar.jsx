import React from "react";
import { Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

function Navbar() {
  return (
    <div>
      <nav className="p-4 sticky">
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
          <div className="flex items-center gap-3">
            <Button variant="outline" className="rounded-sm px-6">
              Log In
            </Button>
            <Button className="rounded-sm px-6">Sign Up</Button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
