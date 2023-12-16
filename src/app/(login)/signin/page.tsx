"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function SignIn() {
  const handleLogin = () => {
    signIn("google");
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div>
            <Label className="block text-sm font-medium leading-6">
              Email address
            </Label>
            <div className="mt-2">
              <Input
                id="email"
                name="email"
                type="email"
                required
                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <Label className="block text-sm font-medium leading-6">
                Password
              </Label>
            </div>
            <div className="mt-2">
              <Input
                id="password"
                name="password"
                type="password"
                required
                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <Button
              type="submit"
              className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
            >
              Sign in
            </Button>
          </div>
        </form>
        <div
          className="text-sm p-2 rounded mt-4 bg-zinc-800 w-full flex gap-3 justify-center cursor-pointer"
          onClick={handleLogin}
        >
          <Image
            src="/imagens/googleLogo.png"
            alt="Google Logo"
            width={20}
            height={20}
          />
          Log in with Google
        </div>
      </div>
    </div>
  );
}
