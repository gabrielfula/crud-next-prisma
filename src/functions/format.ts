import { z } from "zod";

export const dateFormatter = (date: Date, locale = "pt-BR") => {
  return new Intl.DateTimeFormat(locale).format(date);
};

export const priceFormatter = (price: number, locale = "pt-BR") => {
  return new Intl.NumberFormat(locale).format(price);
};

export const createClientSchema = z.object({
  name: z.string().nonempty("Nome é obrigatório"),
  address: z.string().nonempty("Endereço é obrigatório"),
  cpf: z
    .string()
    .nonempty("CPF é obrigatório")
    .min(11, "CPF precisa de 11 digítos")
    .max(11, "Limite de digítos excedido"),
  price: z.coerce.number(),
  complement: z.string().nonempty("Digite a descrição do serviço"),
});
