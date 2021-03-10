import React from 'react'
import { useHistory } from 'react-router-dom'
import { useData } from './DataContext'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Button, Row, Col, Form } from 'react-bootstrap'

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

  const onSubmit = (event, data) => {
    console.log('event', event);
    console.log('data', data)
    history.push('./passo2')
    setValues(data)
  }

  const incomeOptions = [
    { value: 'RENDA_MENOR_1000', label: 'Até R$ 1.000' },
    { value: 'RENDA_MENOR_2000', label: 'De R$ 1.000 até R$ 2.000' },
    { value: 'RENDA_MENOR_3000', label: 'De R$ 2.000 até R$ 3.000' },
    { value: 'RENDA_MENOR_4000', label: 'De R$ 3.000 até R$ 4.000' },
    { value: 'RENDA_MENOR_5000', label: 'De R$ 4.000 até R$ 5.000' },
    { value: 'RENDA_MAIOR_5000', label: 'Acima de R$ 5.000' },
  ]

  const jobOptions = [
    { value: 'APOSENTADO_PENSIONISTA', label: 'Aposentado ou Pensionista' },
    { value: 'AUTONOMO', label: 'Autônomo' },
    { value: 'EMPRESARIO', label: 'Empresário ou Empregador' },
    { value: 'PROFISSIONAL_LIBERAL', label: 'Profissional Liberal' },
    { value: 'ASSALARIADO', label: 'Funcionário com carteira assinada (CLT)' },
    { value: 'FUNCIONARIO_PUBLICO', label: 'Funcionário Público ou Militar' },
    { value: 'DESEMPREGADO', label: 'Desempregado' },
  ]

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

  const renderForms = (inputs) => {
    const form = []
    let fieldsRow = []
    const renderRow = (props, id) => <Row key={id}>{props}</Row>

    inputs.forEach((input, idx) => {

      const { label, id } = input
      let field

      if (id === undefined)
        console.warn('Oops! Found a field without an id! Check the inputs variable.')

      if (label !== undefined) {
        if (input.selectOptions) {
          field = ( 
            <Form.Group key={id} as={Col}>
              <Form.Label>{label}</Form.Label>
              <Form.Control
                as='select'
                ref={register}
                className='select optional valid'
                id={id}
                label={label}
                name={id}
                isInvalid={errors[id] && !!errors[id]}
              >
              <option>Selecione</option>
              {
                input.selectOptions.map(select => {
                  return <option value={select.value}>{select.label}</option>
                })
              }
              </Form.Control>
              <Form.Control.Feedback type='invalid'>
                {errors[id] && errors[id].message && errors[id].message}
              </Form.Control.Feedback>
            </Form.Group>
          )
        } else {
          field = ( 
            <Form.Group key={id} as={Col}>
              <Form.Label>{label}</Form.Label>
              <Form.Control
                ref={register}
                id={id}
                type='text'
                label={label}
                name={id}
                isInvalid={errors[id] && !!errors[id]}
              />
              <Form.Control.Feedback type='invalid'>
                {errors[id] && errors[id].message && errors[id].message}
              </Form.Control.Feedback>
            </Form.Group>
          )
        }
      } else {
        field = React.createElement(input.component, { key: id })
      }

      fieldsRow.push(field)

      if (idx % 2) {
        form.push(renderRow(fieldsRow.map(field => field), id))
        fieldsRow = []
      } else if (idx === inputs.length - 1) {
        form.push(renderRow(fieldsRow.map(field => field), id))
      }

    })

    return form
  }

  return (
    <div>
      <main>
        <div className='py-5 text-center'>
          <img
            className='d-block mx-auto mb-4'
            src='https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg'
            alt=''
            width='72'
            height='57'
          />
          <h2>Vamos Começar!</h2>
          <p className='lead'>
            Preencha o cadastro e receba as melhores Ofertas de Crédito em menos
            de 3 minutos!
          </p>
        </div>
        <Form noValidate onSubmit={handleSubmit(onSubmit)}>

          { renderForms(inputs) }

          <Row>
            <Form.Group as={Col}>
              <Form.Label>Criar senha</Form.Label>
              <Form.Control
                ref={register}
                id='password'
                type='password'
                label='password'
                name='password'
              />
              <Form.Control.Feedback type='invalid'>
                {errors?.password?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <hr className='my-4' />
          <Button size='lg' type='submit'>
            Cadastrar
          </Button>
        </Form>
      </main>

      <footer className='my-5 pt-5 text-muted text-center text-small'>
        <p className='mb-1'>&copy; 2121–2021 Easy Creditos</p>
        <ul className='list-inline'>
          <li className='list-inline-item'>
            <a href='/privacidade'>Privacidade</a>
          </li>
          <li className='list-inline-item'>
            <a href='/termos'>Termos</a>
          </li>
          <li className='list-inline-item'>
            <a href='/suporte'>Suporte</a>
          </li>
        </ul>
      </footer>
    </div>
  )
}
