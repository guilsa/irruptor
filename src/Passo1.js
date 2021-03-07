import React from 'react'
import { useHistory } from 'react-router-dom'
import { useData } from './DataContext'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
  fullName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Nome não pode ter números")
    .required("Esse campo é necessário"),
  email: yup
    .string()
    // .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
    .required("Esse campo é necessário"),
});

export const Passo1 = () => {
  const { setValues, data } = useData()
  const history = useHistory()
  const { register, handleSubmit, errors } = useForm({
    defaultValues: { fullName: data.fullName, email: data.email },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    history.push('./passo2')
    setValues(data)
  }

  return (
    <div>
      <h2 style={{textAlign: 'center', marginBottom: 60}}>
        Preencha o cadastro e receba as melhores Ofertas de Crédito em menos de 3 minutos
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
        <label className="helper-text">
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
        <label className="helper-text">
          {errors?.email?.message}
        </label>


        <label>CPF</label>
        <input
          ref={register}
          id='cpf'
          type='text'
          label='CPF'
          name='cpf'
        />
        <label className="helper-text">
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
        <label className="helper-text">
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
        <label className="helper-text">
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
        <label className="helper-text">
          {errors?.cep?.message}
        </label>

        <label>De quanto é a sua renda?</label>
        <input
          ref={register}
          id='income'
          type='text'
          label='income'
          name='income'
        />
        <label className="helper-text">
          {errors?.income?.message}
        </label>

        <label>Trabalha como</label>
        <input
          ref={register}
          id='job'
          type='text'
          label='job'
          name='job'
        />
        <label className="helper-text">
          {errors?.job?.message}
        </label>

        <label>Criar senha</label>
        <input
          ref={register}
          id='password'
          type='text'
          label='password'
          name='password'
        />
        <label className="helper-text">
          {errors?.password?.message}
        </label>


        <button>Cadastrar</button>
      </form>
    </div>
  )
}
