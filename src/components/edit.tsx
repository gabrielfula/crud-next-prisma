"use client";

import { ClientesProps } from "@/types/types";
import { Eye, Pen, Trash } from "lucide-react";
import { useRouter } from "next/navigation";

type EditProps = {
  id: string,
};

export default function Edit({ id }: EditProps) {
  const router = useRouter();

  const removeUser = async () => {
    await fetch("/api/client/", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });

    router.refresh();
  };

  return (
    <div className="flex gap-2 mr-4">
      <Eye strokeWidth={1} color="#6b9cff" className="cursor-pointer" />
      <Pen
        size={20}
        color="#6b9cff"
        strokeWidth={1}
        // onClick={getId}
        className="cursor-pointer"
      />
      <Trash
        size={20}
        color="#6b9cff"
        strokeWidth={1}
        onClick={removeUser}
        className="cursor-pointer"
      />
    </div>
  );
}
