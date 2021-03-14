import React from 'react'
import { useHistory } from 'react-router-dom'
import { useData } from './DataContext'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Container, Button, Row, Col, Form } from 'react-bootstrap'

import { PageContainer } from './components/PageContainer'

import { incomes, jobs } from './static/selectInputOptions'
import { parseSelectOptions, renderForms } from './utils/utils'

const schema = yup.object().shape({
  full_name: yup
    .string()
    .matches(/^([^0-9]*)$/, 'Nome não pode ter números')
    .required('Esse campo é necessário'),
  email: yup
    .string()
    // .matches(/^([^0-9]*)$/, 'Last name should not contain numbers')
    .required('Esse campo é necessário'),
})

export const Passo1 = () => {
  const { setValues, data } = useData()
  const history = useHistory()
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      full_name: data.full_name,
      email: data.email,
      cpf: data.cpf,
      dob: data.dob,
      cel: data.cel,
      cep: data.cep,
      income_bracket: data.income_bracket,
      job: data.job,
      password: data.password,
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    console.log('data', data)
    history.push('./passo2')
    setValues(data)
  }

  const jobOptions = parseSelectOptions(jobs)
  const incomeOptions = parseSelectOptions(incomes)

  // const hardCodedExampleForSelectOptions = [
  //   { value: '', label: '' }
  // ]

  const inputs = [
    { label: 'Nome Completo', id: 'full_name' },
    { label: 'E-mail', id: 'email' },
    { label: 'CPF', id: 'cpf' },
    { label: 'Data de Nascimento', id: 'dob' },
    { label: 'Número de celular', id: 'cel' },
    { label: 'CEP', id: 'cep' },
    {
      label: 'De quanto é a sua renda?',
      id: 'income_bracket',
      selectOptions: incomeOptions,
    },
    {
      label: 'Trabalha como',
      id: 'job',
      selectOptions: jobOptions,
    },
    // { id: 'demo', component: () => <div>I'm a div!</div> },
  ]

  return (
    <Container>
      <PageContainer>
        <div className='py-5 text-center'>
          <h2>Vamos Começar!</h2>
          <p className='lead'>
            Preencha o cadastro e receba as melhores Ofertas de Crédito em menos de 3 minutos!
          </p>
        </div>
        <Form noValidate onSubmit={handleSubmit(onSubmit)}>
          {renderForms(inputs, register, errors)}

          <Row>
            <Form.Group as={Col}>
              <Form.Label>Criar senha</Form.Label>
              <Form.Control ref={register} id='password' type='password' label='password' name='password' />
              <Form.Control.Feedback type='invalid'>{errors?.password?.message}</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <hr className='my-4' />
          <Button size='lg' type='submit'>
            Cadastrar
          </Button>
        </Form>
      </PageContainer>
    </Container>
  )
}
