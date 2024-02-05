import { Copy } from "lucide-react";

export default function Boleto() {
  return (
    <>
      <div className="space-y-10 flex flex-col">
        <div>
          <h1 className="font-bold text-lg">Boleto gerado</h1>
        </div>
        <div>
          <p className="font-bold">Copiar Boleto:</p>

          <div className="flex items-center p-2 border rounded w-full">
            <div className="flex items-center">
              <p className="max-w-[430px] whitespace-nowrap overflow-hidden text-ellipsis">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
                nemo autem incidunt. Quasi ratione earum, possimus doloremque
                maiores assumenda cumque. Quos tenetur eveniet in autem iusto
                nam eum et beatae.
              </p>
              <button className="border border-zinc-400 p-1">
                <Copy size={20} strokeWidth={1.25} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
