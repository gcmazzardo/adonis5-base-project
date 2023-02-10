declare module '@ioc:Adonis/Core/Validator' {
  interface Rules {
    cpf(): Rule
    cnpj(): Rule
    phone(): Rule
    cep(): Rule
    state(): Rule
    hour(): Rule
  }
}
