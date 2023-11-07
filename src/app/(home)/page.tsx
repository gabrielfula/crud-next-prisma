import Client from "@/components/client";

import Header from "@/components/header";
import {
  Table,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import prisma from "@/lib/prisma";
import { PlusCircle, Download } from "lucide-react";

export default async function Home() {
  const data = await prisma.client.findMany({});

  return (
    <div>
      <Header />
      <div className="m-20">
        <div className="flex justify-between items-center">
          <div className="flex gap-10">
            <p className="flex gap-2 text-xs items-center text-blue-500 uppercase font-bold">
              Create Form <PlusCircle size={20} />
            </p>
            <p className="flex gap-2 text-xs items-center text-blue-500 uppercase font-bold">
              Download <Download size={20} />
            </p>
          </div>
          <div>
            <h2 className="uppercase text-blue-700 font-bold">Dashboard</h2>
          </div>
        </div>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
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
                createdAt={item.createdAt}
              />
            );
          })}
        </Table>
      </div>
    </div>
  );
}
