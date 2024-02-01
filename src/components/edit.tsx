"use client";

import { Pen, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type EditProps = {
  id: string;
};

export default function Edit({ id }: EditProps) {
  const router = useRouter();

  const removeUser = async () => {
    await fetch("/api/clients/", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });

    toast.error("Usuário deletado com sucesso!");

    router.refresh();
  };

  return (
    <div className="flex gap-2 mr-4">
      <Pen
        size={20}
        color="#6b9cff"
        strokeWidth={1}
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
