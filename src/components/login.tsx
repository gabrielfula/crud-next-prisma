import { signIn, useSession, signOut } from "next-auth/react";
import { Button } from "./ui/button";
import { LogIn, LogOut } from "lucide-react";

export default function Login() {
  const { status, data } = useSession();

  const handleLogin = () => {
    signIn("google");
  };
  const handleLogout = () => {
    signOut();
  };

  return (
    <>
      {status === "authenticated" && (
        <div className="flex items-center">
          <button
            className="flex items-center bg-blue-700 p-1 rounded cursor-pointer px-3 text-zinc-50"
            onClick={handleLogout}
          >
            <p className="flex gap-3 text-center items-center">
              Fazer Logout <LogOut size={20} />
            </p>
          </button>
        </div>
      )}
      {status === "unauthenticated" && (
        <button
          className="flex text-sm gap-2 items-center bg-blue-700 p-1 rounded cursor-pointer text-zinc-50 px-3"
          onClick={handleLogin}
        >
          <p className="flex gap-2 text-center">
            Fazer Login <LogIn size={20} />
          </p>
        </button>
      )}
    </>
  );
}
