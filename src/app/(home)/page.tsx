import Client from "@/components/client";
import CreateUser from "@/components/create";

export default function Home() {
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
        <Client />
      </div>
    </div>
  );
}
