import { validator } from '@ioc:Adonis/Core/Validator'

import { cpf, cnpj } from 'cpf-cnpj-validator'

validator.rule('cpf', (value, _, options) => {
  if (!value) {
    return
  }
  if (!cpf.isValid(value)) {
    options.errorReporter.report(
      options.pointer,
      'cpf',
      'cpf validation failed',
      options.arrayExpressionPointer
    )
  }
})

validator.rule('cnpj', (value, _, options) => {
  if (!value) {
    return
  }
  if (!cnpj.isValid(value)) {
    options.errorReporter.report(
      options.pointer,
      'cnpj',
      'cnpj validation failed',
      options.arrayExpressionPointer
    )
  }
})

validator.rule('hour', (value, _, options) => {
  if (!value) return
  const regex = new RegExp('^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$')
  if (!regex.test(value))
    options.errorReporter.report(
      options.pointer,
      'hour',
      'hour validation failed',
      options.arrayExpressionPointer
    )
})

validator.rule('phone', (value, _, options) => {
  //Valido tanto para telefone fixo, quanto para celular
  if (!value) {
    return
  }
  const regex = new RegExp('^\\(?[1-9]{2}\\)? ?(?:[2-8]|9[1-9])[0-9]{3}\\-?[0-9]{4}$')
  if (!regex.test(value)) {
    options.errorReporter.report(
      options.pointer,
      'phone',
      'phone validation failed',
      options.arrayExpressionPointer
    )
  }
})

validator.rule('cep', (value, _, options) => {
  if (!value) {
    return
  }
  const regex = new RegExp('^[0-9]{2} ?[0-9]{3}-?[0-9]{3}$')
  if (!regex.test(value)) {
    options.errorReporter.report(
      options.pointer,
      'cep',
      'cep validation failed',
      options.arrayExpressionPointer
    )
  }
})

validator.rule('state', (value, _, options) => {
  if (!value) {
    return
  }
  const states = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
  ]
  const sanitizedValue = value.replace(/ /g, '').toUpperCase()
  const isState = states.includes(sanitizedValue)
  if (!isState) {
    options.errorReporter.report(
      options.pointer,
      'state',
      'state validation failed',
      options.arrayExpressionPointer
    )
  }
})
