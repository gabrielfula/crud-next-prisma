"use client";

import { PlusCircle } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Dialog,
  DialogClose,
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

// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

type CreateClientSchema = z.infer<typeof createClientSchema>;

export default function CreateUser() {
  const { register, handleSubmit, reset, formState } =
    useForm<CreateClientSchema>({
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
          status: client.status,
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
    setVisible(!visible);
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
              <Label htmlFor="address" className="text-left">
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
              <Label htmlFor="cpf" className="text-left">
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
              <Label htmlFor="price" className="text-left">
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
              <Label htmlFor="status" className="text-left">
                Status do pagamento
              </Label>
              {/* 
              <Select {...register("select")}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Pagamento" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Pagamento</SelectLabel>
                    <SelectItem value="concluded">Concluído</SelectItem>
                    <SelectItem value="pending">Pendente</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select> */}

              <select
                className="max-w-[180px] rounded border px-3 py-2 text-zinc-600"
                {...register("status")}
              >
                <option disabled selected>
                  Pagamento
                </option>
                <option value="true">Concluído</option>
                <option value="false">Pendente</option>
              </select>
              {errors.status && (
                <span className="text-red-500 text-sm font-bold">
                  {errors.status.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="complement" className="text-left">
                Serviço prestado
              </Label>
              <Textarea
                {...register("complement")}
                placeholder="Descreva qual serviço foi executado."
              />
            </div>
            <div className="flex gap-10">
              <Button type="submit" disabled={isSubmitting}>
                Salvar Cliente
              </Button>
              <DialogClose asChild>
                <Button type="button" disabled={isSubmitting}>
                  Cancelar
                </Button>
              </DialogClose>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
