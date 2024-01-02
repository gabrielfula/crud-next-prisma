"use client";

import { ClientesProps } from "@/types/types";
import Edit from "./edit";
import { TableBody, TableCell, TableRow } from "./ui/table";

export default function InfoClient({
  name,
  id,
  status,
  place,
  cpf,
}: // createdAt,
ClientesProps) {
  return (
    <>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">
            <Edit id={id} />
          </TableCell>
          <TableCell>{name}</TableCell>
          <TableCell>
            {status === false ? <p>Pendente</p> : <p>Concluído</p>}
          </TableCell>
          <TableCell>{place}</TableCell>
          <TableCell>{cpf}</TableCell>
          <TableCell className="text-right">01/01/2034</TableCell>
        </TableRow>
      </TableBody>
    </>
  );
}
