"use client";

import Edit from "./edit";
import { Client } from "@prisma/client";
import { TableBody, TableCell, TableRow } from "./ui/table";
import { dateFormatter, priceFormatter } from "@/functions/format";
import { maskCpf } from "@/functions/cpf";

interface ClientsItemProps {
  client: Client;
}

export default function InfoClient({ client }: ClientsItemProps) {
  const date = dateFormatter(client.createdAt);

  const cpfFormatted = maskCpf(client.cpf);

  const priceFormatted = priceFormatter(client.price);

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
