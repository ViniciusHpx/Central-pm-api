declare namespace Express {
  export interface Request {
    user: {
      id: string;
      nome: string;
      usuario: string;
      isAdmin: boolean;
      resetarSenha: boolean;
      permissoes: Array<string>;
    };
  }
}
