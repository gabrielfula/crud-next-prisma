import Client from "@/components/client";
import CreateUser from "@/components/create";

import Header from "@/components/header";
import {
  Table,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import prisma from "@/lib/prisma";

export default async function Home() {
  const data = await prisma.client.findMany({});

  return (
    <div>
      <div className="m-20">
        <div className="flex justify-between items-center">
          <div className="flex gap-10 items-center ">
            <CreateUser />
          </div>
          <div>
            <h2 className="uppercase text-blue-700 font-bold">Dashboard</h2>
          </div>
        </div>
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
          {data.map((item) => {
            return (
              <Client
                key={item.id}
                name={item.name}
                status={item.status}
                place={item.place}
                cpf={item.cpf}
                createdAt={item.createdAt.toISOString()}
              />
            );
          })}
        </Table>
      </div>
    </div>
  );
}
