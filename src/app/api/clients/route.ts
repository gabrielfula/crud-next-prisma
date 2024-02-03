import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const client = await prisma.client.findMany();

  return NextResponse.json({ client });
}

export async function POST(request: Request) {
  const body = await request.json();

  const { name, address, status, price, cpf, complement } = body;

  const statusVerify = status === "true" ? true : false;

  const client = await prisma.client.create({
    data: {
      name,
      cpf,
      status: statusVerify,
      address,
      price,
      complement,
    },
  });

  return NextResponse.json({ client });
}

export async function DELETE(request: Request) {
  const body = await request.json();

  const { id } = body;

  const client = await prisma.client.delete({
    where: {
      id,
    },
  });

  return NextResponse.json({ message: "Client delete succes !" });
}
