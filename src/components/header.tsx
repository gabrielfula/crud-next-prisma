"use client";

import { useSession } from "next-auth/react";
import Login from "./login";
import { Avatar, AvatarImage } from "./ui/avatar";
import { BellRing, Search } from "lucide-react";

export default function Navbar() {
  const { status, data } = useSession();

  return (
    <>
      <div className="flex w-full px-5 p-2 items-center gap-5 shadow py-5 text-sm">
        {status === "authenticated" && (
          <>
            <div className="text-sm">
              <p className="font-bold">{data.user?.name && data?.user.name}</p>
              <p className="text-blue-800">(Admin)</p>
            </div>
            <div className="flex items-center gap-5">
              <Avatar>
                {data.user?.image && <AvatarImage src={data.user.image} />}
              </Avatar>
              <BellRing size={20} color="blue" />
            </div>
          </>
        )}

        <div className="flex gap-24 items-center">
          <div className="bg-zinc-100 flex items-center rounded px-5 py-1">
            <input
              type="text"
              className="outline-none bg-none bg-zinc-100"
              placeholder="Search some client..."
            />
            <button className="pl-3">
              <Search color="blue" size={20} />
            </button>
          </div>
          <Login />
        </div>
      </div>
    </>
  );
}
