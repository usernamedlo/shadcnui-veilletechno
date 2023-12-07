"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { LoginModal } from "@/src/feature/auth/LoginModal";
import { RegisterModal } from "@/src/feature/auth/RegisterModal";

import { signOut } from "next-auth/react";

import { useRouter } from "next/navigation";

import { User2 } from "lucide-react";

const ProfileButton = ({ userSession }) => {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={userSession?.image} />
          <AvatarFallback>
            <img src="/img/placeholder.jpg"></img>
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {userSession ? (
          <>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => router.push("/profil")}
            >
              <User2 className="mr-2 h-4 w-4" />
              Account
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                signOut();
              }}
              className="cursor-pointer"
            >
              Log out
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <Dialog>
              <DialogTrigger asChild>
                <DropdownMenuItem
                  onSelect={(e) => e.preventDefault()}
                  className="cursor-pointer"
                >
                  Sign In
                </DropdownMenuItem>
              </DialogTrigger>
              <DialogContent>
                <RegisterModal />
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <DropdownMenuItem
                  onSelect={(e) => e.preventDefault()}
                  className="cursor-pointer"
                >
                  Login
                </DropdownMenuItem>
              </DialogTrigger>
              <DialogContent>
                <LoginModal />
              </DialogContent>
            </Dialog>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileButton;
