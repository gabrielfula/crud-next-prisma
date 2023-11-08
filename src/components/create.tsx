"use client";

import { Download, PlusCircle } from "lucide-react";
import React, { FormEvent, useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";

export default function CreateUser() {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [cpf, setCpf] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await fetch("http://localhost:3000/api/create", {
      method: "POST",
      body: JSON.stringify({ name, place, cpf }),
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <button>
            <p className="flex gap-2 text-xs items-center text-blue-500 uppercase font-bold">
              New Client <PlusCircle size={20} />
            </p>
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create Client</DialogTitle>
            <DialogDescription>
              Make sure you fill in the information in the fields below.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Name's Client"
                className="col-span-3"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Place
              </Label>
              <Input
                id="place"
                placeholder="Place of Client"
                className="col-span-3"
                value={place}
                onChange={(event) => setPlace(event.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                CPF
              </Label>
              <Input
                id="username"
                placeholder="Client CPF"
                className="col-span-3"
                value={cpf}
                onChange={(event) => setCpf(event.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleSubmit}>
              Save Client
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      {/* 
      <button>
        <p className="flex gap-2 text-xs items-center text-blue-500 uppercase font-bold">
          Download <Download size={19} />
        </p>
      </button> */}
    </>
  );
}
