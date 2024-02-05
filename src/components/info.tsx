"use client";

import Edit from "./edit";
import { Client } from "@prisma/client";
import { TableBody, TableCell, TableRow } from "./ui/table";
import { dateFormatter, priceFormatter } from "@/functions/format";
import { maskCpf } from "@/functions/cpf";
import { Button } from "./ui/button";
import { ChevronRight, CornerDownRight, QrCode, ScanLine } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import Pix from "./pix";
import { useState } from "react";
import Boleto from "./boleto";

interface ClientsItemProps {
  client: Client;
}

export default function InfoClient({ client }: ClientsItemProps) {
  const [PixIsVisible, setPixIsVisible] = useState(false);
  const [BoletoIsVisible, setBoletoIsVisible] = useState(false);

  const date = dateFormatter(client.createdAt);

  const cpfFormatted = maskCpf(client.cpf);

  const priceFormatted = priceFormatter(client.price);

  const changeDialogPix = () => {
    setPixIsVisible(!PixIsVisible);
  };

  const changeDialogBoleto = () => {
    setBoletoIsVisible(!BoletoIsVisible);
  };

  return (
    <>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">
            <Edit id={client.id} />
          </TableCell>
          <TableCell className="max-w-[200px] whitespace-nowrap overflow-hidden text-ellipsis">
            {client.name}
          </TableCell>
          <TableCell>
            {client.status === false ? (
              <div className="flex gap-3 text-center items-center">
                <div className="bg-gray-400 h-2 w-2 rounded-full" /> Pendente
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="secondary"
                      className="space-x-2 hover:bg-zinc-200 transition-all p-2"
                    >
                      <CornerDownRight size={17} strokeWidth={1.25} />
                      <p className="text-sm">Pagar</p>
                    </Button>
                  </DialogTrigger>

                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Escolha a forma de pagamento</DialogTitle>
                      <DialogDescription>
                        Assinale a opção de pagamento abaixo.
                      </DialogDescription>
                    </DialogHeader>

                    <div className="flex flex-col gap-10">
                      <Dialog
                        onOpenChange={changeDialogBoleto}
                        open={BoletoIsVisible}
                      >
                        <DialogTrigger asChild>
                          <div className="flex justify-between border items-center p-4 py-5 border-zinc-300 cursor-pointer">
                            <div className="flex gap-2 items-center">
                              <ScanLine size={20} strokeWidth={1.25} />
                              <p>Boleto Bancário</p>
                              <DialogContent>
                                <Boleto />
                              </DialogContent>
                            </div>
                            <ChevronRight size={20} strokeWidth={1.25} />
                          </div>
                        </DialogTrigger>
                      </Dialog>

                      <Dialog
                        onOpenChange={changeDialogPix}
                        open={PixIsVisible}
                      >
                        <DialogTrigger asChild>
                          <div className="flex justify-between border items-center p-4 py-5 border-zinc-300 cursor-pointer">
                            <div className="flex gap-2 items-center">
                              <QrCode size={20} strokeWidth={1.25} />
                              <p>Pix</p>
                              <DialogContent>
                                <Pix />
                              </DialogContent>
                            </div>
                            <ChevronRight size={20} strokeWidth={1.25} />
                          </div>
                        </DialogTrigger>
                      </Dialog>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            ) : (
              <div className="flex gap-3 text-center items-center">
                <div className="bg-green-400 h-2 w-2 rounded-full" />
                Concluído
              </div>
            )}
          </TableCell>
          <TableCell>R${priceFormatted}</TableCell>
          <TableCell className="max-w-[200px] whitespace-nowrap overflow-hidden text-ellipsis">
            {client.address}
          </TableCell>
          <TableCell className="w-[250px]">{cpfFormatted}</TableCell>
          <TableCell className="text-right">{date}</TableCell>
        </TableRow>
      </TableBody>
    </>
  );
}
