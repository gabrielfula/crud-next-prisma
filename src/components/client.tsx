import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { ClientesProps } from "@/types/types";
import Edit from "./edit";

export default async function Client({
  name,
  status,
  place,
  cpf,
  createdAt,
  id,
}: ClientesProps) {
  return (
    <>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">
            <Edit id={id}/>
          </TableCell>
          <TableCell>{name}</TableCell>
          <TableCell>
            {status === false ? <p>Pendente</p> : <p>Concluído</p>}
          </TableCell>
          <TableCell>{place}</TableCell>
          <TableCell>{cpf}</TableCell>
          <TableCell className="text-right">{createdAt}</TableCell>
        </TableRow>
      </TableBody>
    </>
  );
}
