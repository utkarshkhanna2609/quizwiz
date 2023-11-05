"use client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { User } from "next-auth";
import React from "react";
import Link from 'next/link';
import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";
import UserAvatar from "./UserAvatar";


type Props = {
  user: Pick<User, "name" | "image" | "email">;
};

const UserAccountNav = ({ user }: Props) => {
    if (!user) {
        console.error('UserAccountNav: No user data');
        return null;
      }
  return (
      
    <DropdownMenu>
    <DropdownMenuTrigger className="flex items-center justify-center text-center hover:text-md hover:font-extrabold transition-all duration-150 ease-in-out px-2 py-2">
      {user.name?.toUpperCase()}
      <div className="hover: transition-all duration-150 ease-in-out px-2 py-2">
        <UserAvatar user={user}/>
      </div>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
    <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {user.name && <p className="font-medium">{user.name}</p>}
            {user.email && (
              <p className="w-[200px] truncate text-sm text-zinc-700">
                {user.email}
              </p>
            )}
          </div>
        </div>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Billing</DropdownMenuItem>
      <DropdownMenuItem>Progress</DropdownMenuItem>
      <DropdownMenuItem
          onSelect={(event) => {
            event.preventDefault();
            signOut().catch(console.error);
          }}
          className="text-red-600 cursor-pointer"
        >
          Sign out
          <LogOut className="w-4 h-4 ml-2 " />
        </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  );
};

export default UserAccountNav;
