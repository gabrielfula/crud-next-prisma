"use client";

import { ClientesProps } from "@/types/types";
import Edit from "./edit";
import { TableBody, TableCell, TableRow } from "./ui/table";
import { dateFormatter } from "@/functions/format";
import { maskCpf } from "@/functions/cpf";

export default function InfoClient({
  name,
  id,
  status,
  place,
  cpf,
  createdAt,
}: ClientesProps) {
  const date = dateFormatter(createdAt);

  const cpfFormatted = maskCpf(cpf)
  return (
    <>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">
            <Edit id={id} />
          </TableCell>
          <TableCell>{name}</TableCell>
          <TableCell>
            {status === false ? <p>Pending</p> : <p>Concluded</p>}
          </TableCell>
          <TableCell>{place}</TableCell>
          <TableCell>{cpfFormatted}</TableCell>
          <TableCell className="text-right">{date}</TableCell>
        </TableRow>
      </TableBody>
    </>
  );
}
