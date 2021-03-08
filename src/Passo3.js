import React from 'react'
import { useHistory } from 'react-router-dom'
import { useData } from './DataContext'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import steps from './images/passo-3.jpg'

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

export const Passo3 = () => {
  const { setValues, data } = useData()
  const history = useHistory()
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      mother_full_name: data.mother_full_name,
      gender: data.gender,
      birth_state: data.birth_state,
      birth_city: data.birth_city,
      degree: data.degree,
      marital_status: data.marital_status,
      id_type: data.id_typ,
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
    // resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    console.log('hi');
    // history.push('/')
    // setValues(data)
  }

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: 30 }}>
        Você chegou no último passo!
        <br />
        <img
          style={{ marginTop: 30, width: 445, height: 79 }}
          src={steps}
          alt='Steps'
        />
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <button disabled>Completar</button>
      </form>
    </div>
  )
}
