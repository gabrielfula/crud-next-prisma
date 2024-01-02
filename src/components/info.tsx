"use client";

import { ClientesProps } from "@/types/types";
import Edit from "./edit";
import { TableBody, TableCell, TableRow } from "./ui/table";
import { dateFormatter } from "@/utils/format";

export default function InfoClient({
  name,
  id,
  status,
  place,
  cpf,
  createdAt,
}: // createdAt,
ClientesProps) {
  const date = dateFormatter(createdAt);

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
          <TableCell className="text-right">{date}</TableCell>
        </TableRow>
      </TableBody>
    </>
  );
}
