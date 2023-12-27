"use client";

import { PlusCircle } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

type FormType = {
  name: string;
  cpf: string;
  place: string;
};

const createClientSchema = z.object({
  name: z.string().nonempty("Nome é obrigatório"),
  place: z.string().nonempty("Endereço é obrigatório"),
  cpf: z
    .string()
    .nonempty("CPF é obrigatório")
    .min(11, "O CPF precisa de 11 digítos")
    .max(11, "Limite de digítos excedido"),
});

export default function CreateUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createClientSchema),
  });

  const router = useRouter();

  async function newClient(data: FormType) {
    const client = data;

    await fetch("/api/client/", {
      method: "POST",
      body: JSON.stringify({
        name: client.name,
        cpf: client.cpf,
        place: client.place,
      }),
    });

    router.refresh();
  }

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <button>
            <p className="flex gap-2 text-xs items-center text-blue-500 uppercase font-bold">
              New Client <PlusCircle size={20} />
            </p>
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[[425px]">
          <DialogHeader>
            <DialogTitle>Create Client</DialogTitle>
            <DialogDescription>
              Make sure you fill in the information in the fields below.
            </DialogDescription>
          </DialogHeader>
          <form action={handleSubmit(newClient)} className="space-y-7">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name" className="text-left">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Name's Client"
                className="col-span-3"
                {...register("name")}
              />
              {errors.name && (
                <span className="text-red-500 text-sm font-bold">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-4">
              <Label htmlFor="username" className="text-left">
                Address
              </Label>
              <div className="space-y-2">
                <Input
                  id="place"
                  placeholder="Address of Client"
                  className="col-span-3"
                  {...register("place")}
                />

                {errors.place && (
                  <span className="flex text-red-500 text-sm font-bold">
                    {errors.place.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="username" className="text-left">
                CPF
              </Label>
              <div className="space-y-2">
                <Input
                  id="username"
                  placeholder="Client CPF"
                  className="col-span-3"
                  maxLength={11}
                  minLength={11}
                  {...register("cpf")}
                />
                {errors.cpf && (
                  <span className="text-red-500 text-sm font-bold">
                    {errors.cpf.message}
                  </span>
                )}
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="submit">Save Client</Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
