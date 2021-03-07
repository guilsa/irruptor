import React from 'react'
import { useHistory } from 'react-router-dom'
import { useData } from './DataContext'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "First name should not contain numbers")
    .required("First name is a required field"),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
    .required("Last name is a required field"),
});

export const Passo1 = () => {
  const { setValues, data } = useData()
  const history = useHistory()
  const { register, handleSubmit, errors } = useForm({
    defaultValues: { firstName: data.firstName, lastName: data.lastName },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    history.push('./passo2')
    setValues(data)
  }

  return (
    <div>
      <h2 style={{textAlign: 'center', marginBottom: 20}}>
        Preencha o cadastro e receba as melhores Ofertas de Crédito em menos de 3 minutos
      </h2>
      <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={handleSubmit(onSubmit)}>
        <input
          ref={register}
          id='firstName'
          type='text'
          label='First Name'
          name='firstName'
        />
        <label className="helper-text">
          {errors?.firstName?.message}
        </label>
        <input
          ref={register}
          id='lastName'
          type='text'
          label='Last Name'
          name='lastName'
        />
        <label className="helper-text">
          {errors?.lastName?.message}
        </label>
        <button>Cadastrar</button>
      </form>
    </div>
  )
}
