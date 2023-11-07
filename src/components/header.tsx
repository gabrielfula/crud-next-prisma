import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { BellRing, PlusCircle, Search } from "lucide-react";

export default function Header() {
  return (
    <nav className="flex w-full px-5 p-2 items-center gap-5 shadow py-5 text-sm">
      <div className="text-sm">
        <p className="font-bold">John Doe</p>
        <p className="text-blue-800">(Admin)</p>
      </div>
      <div className="flex items-center gap-5">
        <Avatar>
          <AvatarImage src="https://github.com/gabrielfula.png" />
        </Avatar>
        <BellRing size={20} color="blue" />
      </div>
      <div className="flex gap-8">
        <Button className="uppercase gap-2 font-bold">
          <PlusCircle size={15} />
          create user
        </Button>
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
      </div>
    </nav>
  );
}
