import { z } from "zod";

export const dateFormatter = (date: Date, locale = "pt-BR") => {
  return new Intl.DateTimeFormat(locale).format(date);
};


export const createClientSchema = z.object({
  name: z.string().nonempty("Nome é obrigatório"),
  place: z.string().nonempty("Endereço é obrigatório"),
  cpf: z
    .string()
    .nonempty("CPF é obrigatório")
    .min(11, "O CPF precisa de 11 digítos")
    .max(11, "Limite de digítos excedido"),
});