import {
  Table,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import prisma from "@/lib/prisma";
import InfoClient from "./info";

export default async function Client() {
  const clients = await prisma.client.findMany();

  return (
    <>
      <Table>
        <TableCaption>
          {clients.length < 1 ? (
            <p>Nenhum cliente registrado até o momento.</p>
          ) : (
            <p>Uma lista de todos os clientes registrados recentemente.</p>
          )}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Ações</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Status do pagamento</TableHead>
            <TableHead>Preço</TableHead>
            <TableHead>Endereço</TableHead>
            <TableHead>CPF</TableHead>
            <TableHead className="text-right">Dia de cadastro</TableHead>
          </TableRow>
        </TableHeader>
        {clients.map((client) => (
          <InfoClient key={client.id} client={client} />
        ))}
      </Table>
    </>
  );
}
