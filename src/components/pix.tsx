import { Copy } from "lucide-react";

export default function Pix() {
  return (
    <>
      <div className="space-y-10 flex flex-col">
        <div>
          <h1 className="font-bold text-lg">Pix gerado</h1>
        </div>
        <div className="flex justify-center flex-col gap-5">
          <div>
            <p>Aponte a câmera do celular para o QR code:</p>
            <img
              src="data:image/png;base64,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"
              alt="QR code"
            />
          </div>
          <div>
            <div className="border p-2 rounded flex gap-2 items-center">
              <div>
                <p className="font-bold">Código:</p>
              </div>
              <div className="flex items-center">
                <p className="max-w-[350px] whitespace-nowrap overflow-hidden text-ellipsis">
                  00020126570014br.gov.bcb.pix0111811177100250220testede envio
                  de pix5204000053039865ara1313131041.235802BR5914testechave
                  cpf6008saopaulo62070503***6304E067.
                </p>
                <button className="border border-zinc-400 p-1">
                  <Copy size={20} strokeWidth={1.25} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
