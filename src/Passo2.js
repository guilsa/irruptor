import React from 'react'
import { useHistory } from 'react-router-dom'
import { useData } from './DataContext'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Container, Button, Form } from 'react-bootstrap'

import { PageContainer } from './components/PageContainer'

import {
  states,
  degrees,
  maritalStatuses,
  idTypes,
  idIssuers,
  loanIntents,
  bankNames,
} from './static/selectInputOptions'
import { parseSelectOptions, getCitiesSelect, renderForms } from './utils/utils'
import citiesToState from './static/citiesToState'

const schema = yup.object().shape({
  mother_full_name: yup
    .string()
    .matches(/^([^0-9]*)$/, 'Nome não pode ter números')
    .required('Esse campo é necessário'),
  gender: yup.string().required('Esse campo é necessário'),
})

export const Passo2 = () => {
  const { setValues, data } = useData()
  const history = useHistory()
  const { register, handleSubmit, watch, errors } = useForm({
    defaultValues: {
      mother_full_name: data.mother_full_name,
      gender: data.gender,
      birth_state: data.birth_state,
      birth_city: data.birth_city,
      degree: data.degree,
      marital_status: data.marital_status,
      id_type: data.id_type,
      id_num: data.id_num,
      id_issuer: data.id_issuer,
      id_issuer_state: data.id_issuer_state,
      id_exp: data.id_exp,
      bank_name: data.bank_name,
      bank_account_type: data.bank_account_type,
      bank_account_num: data.bank_account_num,
      loan_intent: data.loan_intent,
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })

  const watchBirthState = watch('birth_state')

  const onSubmit = (data) => {
    console.log('data', data)
    history.push('./sucesso')
    setValues(data)
  }

  // Parse from html string literal hack
  const statesSelect = parseSelectOptions(states)
  const degreesSelect = parseSelectOptions(degrees)
  const maritalStatusesSelect = parseSelectOptions(maritalStatuses)
  const idTypesSelect = parseSelectOptions(idTypes)
  const idIssuersSelect = parseSelectOptions(idIssuers)
  const bankNamesSelect = parseSelectOptions(bankNames)
  const loanIntentsSelect = parseSelectOptions(loanIntents)

  // Similar to above
  // Fills select options from context depending on other select field
  const birthCitiesSelect = getCitiesSelect(citiesToState, watchBirthState)

  const hardCoded_gendersSelect = [
    { value: 'FEMALE', label: 'Feminino' },
    { value: 'MALE', label: 'Masculino' },
  ]

  const hardCoded_AccountTypeSelect = [
    { value: 'CONTA_CORRENTE_INDIVIDUAL', label: 'Conta Corrente' },
    { value: 'CONTA_POUPANCA_INDIVIDUAL', label: 'Conta Poupança' },
  ]

  const inputs = [
    { label: 'Nome completo da mãe', id: 'mother_full_name' },
    { label: 'Gênero', id: 'gender', selectOptions: hardCoded_gendersSelect },
    { label: 'Nascido em qual estado', id: 'birth_state', selectOptions: statesSelect },
    { label: 'Nascido em qual cidade', id: 'birth_city', selectOptions: birthCitiesSelect },
    { label: 'Escolaridade', id: 'degree', selectOptions: degreesSelect },
    { label: 'Estado civil', id: 'marital_status', selectOptions: maritalStatusesSelect },
    { label: 'Documento de identidade', id: 'id_type', selectOptions: idTypesSelect },
    { label: 'Número do documento', id: 'id_num' },
    { label: 'Emissor do documento', id: 'id_issuer', selectOptions: idIssuersSelect },
    { label: 'UF do documento', id: 'id_issuer_state', selectOptions: statesSelect },
    { label: 'Data de expedição do documento', id: 'id_exp' },
    { label: 'Selecione seu Banco', id: 'bank_name', selectOptions: bankNamesSelect },
    { label: 'Tipo de conta', id: 'bank_account_type', selectOptions: hardCoded_AccountTypeSelect },
    { label: 'Número da agência sem o dígito', id: 'bank_account_num' },
    { label: 'Objetivo do crédito', id: 'loan_intent', selectOptions: loanIntentsSelect },
    // { id: 'demo', component: () => <div>I'm a div!</div> },
  ]

  return (
    <Container>
      <PageContainer>
        <div className='py-5 text-center'>
          <h2>O seu novo crédito está mais próximo!</h2>
          <p className='lead'>Precisamos de mais algumas informações.</p>
        </div>
        <Form noValidate onSubmit={handleSubmit(onSubmit)}>
          {renderForms(inputs, register, errors)}
          <hr className='my-4' />
          <Button variant='success' size='lg' type='submit' block>
            Concluir
          </Button>
        </Form>
      </PageContainer>
    </Container>
  )
}
