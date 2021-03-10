import React from 'react'
import { useHistory } from 'react-router-dom'
import { useData } from './DataContext'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Button, Row, Col, Form } from 'react-bootstrap'

const schema = yup.object().shape({
  fullName: yup
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
      fullName: data.fullName,
      email: data.email,
      cpf: data.cpf,
      dob: data.dob,
      cel: data.cel,
      cep: data.cep,
      incomeBracket: data.incomeBracket,
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
          <Row>
            <Form.Group as={Col}>
              <Form.Label>Nome Completo</Form.Label>
              <Form.Control
                ref={register}
                id='fullName'
                type='text'
                label='Nome Completo'
                name='fullName'
                isInvalid={!!errors?.fullName}
              />
              <Form.Control.Feedback type='invalid'>
                {errors?.fullName?.message}
              </Form.Control.Feedback>
            </Form.Group>
            <Col>
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                ref={register}
                id='email'
                type='text'
                label='email'
                name='email'
              />
              <Form.Control.Feedback type='invalid'>
                {errors?.email?.message}
              </Form.Control.Feedback>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label>CPF</Form.Label>
              <Form.Control
                ref={register}
                id='cpf'
                type='text'
                label='cpf'
                name='cpf'
              />
              <Form.Control.Feedback type='invalid'>
                {errors?.cpf?.message}
              </Form.Control.Feedback>
            </Col>

            <Col>
              <Form.Label>Data de nascimento</Form.Label>
              <Form.Control
                ref={register}
                id='dob'
                type='text'
                label='Data de nascimento'
                name='dob'
              />
              <Form.Control.Feedback type='invalid'>
                {errors?.dob?.message}
              </Form.Control.Feedback>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label>Número de celular</Form.Label>
              <Form.Control
                ref={register}
                id='cel'
                type='text'
                label='Número de celular'
                name='cel'
              />
              <Form.Control.Feedback type='invalid'>
                {errors?.cel?.message}
              </Form.Control.Feedback>
            </Col>
            <Col>
              <Form.Label>CEP</Form.Label>
              <Form.Control
                ref={register}
                id='cep'
                type='text'
                label='CEP'
                name='cep'
              />
              <Form.Control.Feedback type='invalid'>
                {errors?.cep?.message}
              </Form.Control.Feedback>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label>De quanto é a sua renda?</Form.Label>
              <Form.Control
                as='select'
                ref={register}
                className='select optional valid'
                label='income'
                name='income'
                id='income-bracket'
                aria-invalid='false'
              >
                <option>Selecione</option>
                <option value='RENDA_MENOR_1000'>Até R$ 1.000</option>
                <option value='RENDA_MENOR_2000'>
                  De R$ 1.000 até R$ 2.000
                </option>
                <option value='RENDA_MENOR_3000'>
                  De R$ 2.000 até R$ 3.000
                </option>
                <option value='RENDA_MENOR_4000'>
                  De R$ 3.000 até R$ 4.000
                </option>
                <option value='RENDA_MENOR_5000'>
                  De R$ 4.000 até R$ 5.000
                </option>
                <option value='RENDA_MAIOR_5000'>Acima de R$ 5.000</option>
              </Form.Control>
              <Form.Control.Feedback type='invalid'>
                {errors?.incomeBracket?.message}
              </Form.Control.Feedback>
            </Col>

            <Col>
              <Form.Label>Trabalha como</Form.Label>
              <Form.Control
                as='select'
                ref={register}
                className='select optional'
                label='job'
                name='job'
                id='job'
              >
                <option>Selecione</option>
                <option value='APOSENTADO_PENSIONISTA'>
                  Aposentado ou Pensionista
                </option>
                <option value='AUTONOMO'>Autônomo</option>
                <option value='EMPRESARIO'>Empresário ou Empregador</option>
                <option value='PROFISSIONAL_LIBERAL'>
                  Profissional Liberal
                </option>
                <option value='ASSALARIADO'>
                  Funcionário com carteira assinada (CLT)
                </option>
                <option value='FUNCIONARIO_PUBLICO'>
                  Funcionário Público ou Militar
                </option>
                <option value='DESEMPREGADO'>Desempregado</option>
              </Form.Control>
              <Form.Control.Feedback type='invalid'>
                {errors?.job?.message}
              </Form.Control.Feedback>
            </Col>
          </Row>

          <Row>
            <Col>
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
            </Col>
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
