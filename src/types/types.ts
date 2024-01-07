export type ClientesProps = {
  id: string;
  name: string;
  place: string;
  cpf: string;
  status?: boolean;
  createdAt: Date;
  updatedAt?: Date;
};


export type FormType = {
  name: string;
  cpf: string;
  place: string;
};
