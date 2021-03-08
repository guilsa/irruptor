import React from 'react'
import { useHistory } from 'react-router-dom'
import { useData } from './DataContext'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import steps from './images/passo-1.jpg'

const schema = yup.object().shape({
  fullName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'Nome não pode ter números')
    .required('Esse campo é necessário'),
  email: yup
    .string()
    // .matches(/^([^0-9]*)$/, 'Last name should not contain numbers')
    .required('Esse campo é necessário'),
});

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

  const onSubmit = (data) => {
    console.log('data', data);
    history.push('./passo2')
    setValues(data)
  }

  return (
    <div>
      <h2 style={{textAlign: 'center', marginBottom: 30}}>
        Preencha o cadastro e receba as melhores Ofertas de Crédito em menos de 3 minutos
        <img style={{marginTop: 30, width: 445, height: 79}} src={steps} alt='Steps' />
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        <label>Nome Completo</label>
        <input
          ref={register}
          id='fullName'
          type='text'
          label='Nome Completo'
          name='fullName'
        />
        <label className='helper-text'>
          {errors?.fullName?.message}
        </label>


        <label>E-mail</label>
        <input
          ref={register}
          id='email'
          type='text'
          label='email'
          name='email'
        />
        <label className='helper-text'>
          {errors?.email?.message}
        </label>


        <label>CPF</label>
        <input
          ref={register}
          id='cpf'
          type='text'
          label='cpf'
          name='cpf'
        />
        <label className='helper-text'>
          {errors?.cpf?.message}
        </label>

        <label>Data de nascimento</label>
        <input
          ref={register}
          id='dob'
          type='text'
          label='Data de nascimento'
          name='dob'
        />
        <label className='helper-text'>
          {errors?.dob?.message}
        </label>

        <label>Número de celular</label>
        <input
          ref={register}
          id='cel'
          type='text'
          label='Número de celular'
          name='cel'
        />
        <label className='helper-text'>
          {errors?.cel?.message}
        </label>

        <label>CEP</label>
        <input
          ref={register}
          id='cep'
          type='text'
          label='CEP'
          name='cep'
        />
        <label className='helper-text'>
          {errors?.cep?.message}
        </label>


        <label>De quanto é a sua renda?</label>
        <select ref={register} className='select optional valid' label='income' name='income' id='income-bracket' aria-invalid='false'>
          <option>Selecione</option>
          <option value='RENDA_MENOR_1000'>Até R$ 1.000</option>
          <option value='RENDA_MENOR_2000'>De R$ 1.000 até R$ 2.000</option>
          <option value='RENDA_MENOR_3000'>De R$ 2.000 até R$ 3.000</option>
          <option value='RENDA_MENOR_4000'>De R$ 3.000 até R$ 4.000</option>
          <option value='RENDA_MENOR_5000'>De R$ 4.000 até R$ 5.000</option>
          <option value='RENDA_MAIOR_5000'>Acima de R$ 5.000</option>
        </select>
        <label className='helper-text'>
          {errors?.incomeBracket?.message}
        </label>


        <label>Trabalha como</label>
        <select ref={register} className='select optional' label='job' name='job' id='job'>
          <option>Selecione</option>
          <option value='APOSENTADO_PENSIONISTA'>Aposentado ou Pensionista</option>
          <option value='AUTONOMO'>Autônomo</option>
          <option value='EMPRESARIO'>Empresário ou Empregador</option>
          <option value='PROFISSIONAL_LIBERAL'>Profissional Liberal</option>
          <option value='ASSALARIADO'>Funcionário com carteira assinada (CLT)</option>
          <option value='FUNCIONARIO_PUBLICO'>Funcionário Público ou Militar</option>
          <option value='DESEMPREGADO'>Desempregado</option>
        </select>


        <label className='helper-text'>
          {errors?.job?.message}
        </label>

        <label>Criar senha</label>
        <input
          ref={register}
          id='password'
          type='password'
          label='password'
          name='password'
        />
        <label className='helper-text'>
          {errors?.password?.message}
        </label>


        <button>Cadastrar</button>
      </form>
    </div>
  )
}
