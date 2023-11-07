import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { DataClientType } from "@/types/types";
import { Eye, Pen, Trash } from "lucide-react";

export default async function Client({
  name,
  status,
  place,
  cpf,
  createdAt,
}: DataClientType) {
  return (
    <>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">
            <div className="flex gap-2 mr-4">
              <Eye strokeWidth={1} color="#6b9cff" />
              <Pen size={20} color="#6b9cff" strokeWidth={1} />
              <Trash size={20} color="#6b9cff" strokeWidth={1} />
            </div>
          </TableCell>
          <TableCell>{name}</TableCell>
          <TableCell>
            {status === false ? <p>Pendente</p> : <p>Concluído</p>}
          </TableCell>
          <TableCell>{place}</TableCell>
          <TableCell>{cpf}</TableCell>
          <TableCell className="text-right">11-11-23</TableCell>
        </TableRow>
      </TableBody>
    </>
  );
}
