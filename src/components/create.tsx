"use client";

import { PlusCircle } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { asyncTimeout } from "@/functions/timeout";
import { createClientSchema } from "@/functions/format";

type CreateClientSchema = z.infer<typeof createClientSchema>;

export default function CreateUser() {
  const { register, handleSubmit, reset, formState } =
    useForm<CreateClientSchema>({
      defaultValues: {
        name: "",
        address: "",
        cpf: "",
        complement: "",
      },
      resolver: zodResolver(createClientSchema),
    });

  let { errors, isSubmitting, isSubmitted } = formState;

  const [visible, setVisible] = useState(isSubmitted);

  const router = useRouter();

  async function newClient(client: CreateClientSchema) {
    await asyncTimeout();

    try {
      await fetch("/api/clients/", {
        method: "POST",
        body: JSON.stringify({
          name: client.name,
          cpf: client.cpf,
          address: client.address,
          price: client.price,
          complement: client.complement,
        }),
      });
      setVisible(false);
      toast.success("Cliente criado com sucesso.");
    } catch (erro) {
      toast.error("Cliente não foi criado.");
    }

    reset();
    router.refresh();
  }

  const validation = () => {
    setVisible(true);
  };

  return (
    <>
      <Dialog onOpenChange={validation} open={visible}>
        <DialogTrigger asChild>
          <button>
            <p className="flex gap-2 text-xs items-center text-blue-500 uppercase font-bold">
              Novo cliente <PlusCircle size={20} />
            </p>
          </button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[[425px]">
          <DialogHeader>
            <DialogTitle>Criar cliente</DialogTitle>
            <DialogDescription>
              Certifique-se de que as informações do cliente estejam corretas.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(newClient)} className="space-y-7">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name" className="text-left">
                Nome
              </Label>
              <Input
                placeholder="Nome do cliente"
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
                Endereço
              </Label>
              <div className="space-y-2">
                <Input
                  placeholder="Endereço do cliente"
                  className="col-span-3"
                  {...register("address")}
                />

                {errors.address && (
                  <span className="flex text-red-500 text-sm font-bold">
                    {errors.address.message}
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
                  placeholder="999.999.999-99"
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

            <div className="flex flex-col gap-2">
              <Label htmlFor="username" className="text-left">
                Preço
              </Label>
              <div className="space-y-2">
                <Input
                  placeholder="R$00,00"
                  className="col-span-3"
                  {...register("price")}
                />
                {errors.price && (
                  <span className="text-red-500 text-sm font-bold">
                    {errors.price.message}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="username" className="text-left">
                Serviço prestado
              </Label>
              <Textarea
                {...register("complement")}
                placeholder="Descreva qual serviço foi executado."
              />
            </div>

            <Button type="submit" disabled={isSubmitting}>
              Salvar Cliente
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
