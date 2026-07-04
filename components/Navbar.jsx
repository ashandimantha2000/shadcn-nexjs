import React from "react";
import { Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

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
          
            <div className="flex items-center gap-5">
              <Button className="rounded-sm px-6">+ Post</Button>
              {/* auth */}
              <Show when="signed-out">
                <SignInButton />
                <SignUpButton>
                  <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                    Sign Up
                  </button>
                </SignUpButton>
              </Show>
              <Show when="signed-in">
                <UserButton />
              </Show>
            </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
