class AppError {
  public readonly mensagem: string;
  public readonly codigoDoErro: number;

  constructor(mensagem: string, codigoDoErro: number = 400) {
    this.mensagem = mensagem;
    this.codigoDoErro = codigoDoErro;
  }
}

export default AppError;
