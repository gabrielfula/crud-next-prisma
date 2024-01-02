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
  const data = await prisma.client.findMany({});

  return (
    <>
      <Table>
        <TableCaption>
          {data.length < 1 ? (
            <p>No Clients Registered at the moment.</p>
          ) : (
            <p>A list of your recents clients.</p>
          )}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Actions</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Place</TableHead>
            <TableHead>CPF</TableHead>
            <TableHead className="text-right">Date Created</TableHead>
          </TableRow>
        </TableHeader>
        {data.map((item, id) => {
          return (
            <InfoClient
              name={item.name}
              status={item.status}
              key={item.id}
              id={item.id}
              place={item.place}
              cpf={item.cpf}
              createdAt={item.createdAt}
            />
          );
        })}
      </Table>
    </>
  );
}
