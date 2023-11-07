import Header from "@/components/header";
import { PlusCircle, Download } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="m-20">
        <div className="flex gap-4 justify-between items-center">
          <div className="flex gap-2">
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
      </div>
    </div>
  );
}
