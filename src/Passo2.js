import React from 'react'
import { useHistory } from 'react-router-dom'
import { useData } from './DataContext'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import steps from './images/passo-2.jpg'

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

export const Passo2 = () => {
  const { setValues, data } = useData()
  const history = useHistory()
  const { register, handleSubmit, errors } = useForm({
    defaultValues: { 
      mother_full_name: data.mother_full_name, 
      gender: data.gender, // MOTHERS?
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
      credit_reason: data.credit_reason,
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    console.log('data', data);
    history.push('./passo3')
    setValues(data)
  }

  return (
    <div>
      <h2 style={{textAlign: 'center', marginBottom: 30}}>
        precisamos saber um pouco mais sobre você.
        <br/>
        <strong>
          Em seguida selecionaremos as melhores ofertas de acordo com o seu perfil.
        </strong>
        
        <img style={{marginTop: 30, width: 445, height: 79}} src={steps} alt='Steps' />
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        <label>Nome completo mãe</label>
        <input
          ref={register}
          id='mother-full-name'
          type='text'
          label='Nome completo mãe'
          name='mother-full-name'
        />
        <label className='helper-text'>
          {errors?.mother_full_name?.message}
        </label>


        <label>Gênero</label>
        <select ref={register} className='select optional valid' label='Gênero' name='gender' id='gender' aria-invalid='false'>
          <option>Selecione</option>
          <option value='FEMALE'>Feminino</option>
          <option value='MALE'>Masculino</option>
        </select>
        <label className='helper-text'>
          {errors?.gender?.message}
        </label>
        <label className='helper-text'>
          {errors?.gender?.message}
        </label>


        <label>Nascido em qual estado</label>
        <select ref={register} className='select optional valid' label='Nascido em qual estado' name='id_issuer_state' id='id_issuer_state' aria-invalid='false'>
          <option>Selecione</option>
        </select>
        <label className='helper-text'>
          {errors?.id_issuer_state?.message}
        </label>


        <label>Nascido em qual cidade</label>
        <select ref={register} className='select optional valid' label='Nascido em qual cidade' name='id_issuer_city' id='id_issuer_city' aria-invalid='false'>
          <option>Selecione</option>
        </select>
        <label className='helper-text'>
          {errors?.id_issuer_city?.message}
        </label>

        <label>Escolaridade</label>
        <select ref={register} className='select optional valid' label='Escolaridade' name='degree' id='degree' aria-invalid='false'>
          <option>Selecione</option>
        </select>
        <label className='helper-text'>
          {errors?.degree?.message}
        </label>


        <label>Estado civil</label>
        <select ref={register} className='select optional valid' label='Estado civil' name='marital_status' id='marital_status' aria-invalid='false'>
          <option>Selecione</option>
        </select>
        <label className='helper-text'>
          {errors?.marital_status?.message}
        </label>

        <h1>Informações de identidade</h1>

        <label>Documento de identidade</label>
        <select ref={register} className='select optional valid' label='Documento de identidade' name='id_type' id='id_type' aria-invalid='false'>
          <option>Selecione</option>
        </select>
        <label className='helper-text'>
          {errors?.id_type?.message}
        </label>


        <label>Número do documento</label>
        <input
          ref={register}
          id='id_num'
          type='text'
          label='Número do documento'
          name='id_num'
        />
        <label className='helper-text'>
          {errors?.id_num?.message}
        </label>


        <label>Emissor do documento</label>
        <select ref={register} className='select optional valid' label='Emissor do documento' name='id_issuer' id='id_issuer' aria-invalid='false'>
          <option>Selecione</option>
        </select>
        <label className='helper-text'>
          {errors?.id_issuer?.message}
        </label>


        <label>UF do documento</label>
        <select ref={register} className='select optional valid' label='UF do documento' name='id_issuer_state' id='id_issuer_state' aria-invalid='false'>
          <option>Selecione</option>
        </select>
        <label className='helper-text'>
          {errors?.id_issuer_state?.message}
        </label>


        <label>Data de expedição do documento</label>
        <select ref={register} className='select optional valid' label='Data de expedição do documento' name='id_exp' id='id_exp' aria-invalid='false'>
          <option>Selecione</option>
        </select>
        <label className='helper-text'>
          {errors?.id_exp?.message}
        </label>

        <h1>Informações bancárias</h1>

        <label>Tipo de conta</label>
        <select ref={register} className='select optional valid' label='Tipo de conta' name='bank_name' id='bank_name' aria-invalid='false'>
          <option>Selecione</option>
        </select>
        <label className='helper-text'>
          {errors?.bank_name?.message}
        </label>


        <label>Tipo de conta</label>
        <input
          ref={register}
          id='bank_account_type'
          type='text'
          label='Tipo de conta'
          name='bank_account_type'
        />
        <label className='helper-text'>
          {errors?.bank_account_type?.message}
        </label>


        <div style={{fontSize: 12, borderRadius: 10, paddingLeft: 10, paddingRight: 10, backgroundColor: '#FEFBF1', marginBottom: 10}}>
          <p>
            <strong>Dica:</strong> Você tem chances maiores de ser aprovado se tiver conta nos bancos: Banco do Brasil, Bradesco, Caixa, Itaú e Satander.
          </p>
        </div>


        <label>Número da agência sem o dígito</label>
        <input
          ref={register}
          id='bank_account_num'
          type='text'
          label='Tipo de conta'
          name='bank_account_num'
        />
        <label className='helper-text'>
          {errors?.bank_account_num?.message}
        </label>

        <h1>Objetivo do crédito</h1>

        <label>Qual é a finalidade da sua solicitação?</label>
        <select ref={register} className='select optional valid' label='Qual é a finalidade da sua solicitação?' name='credit_reason' id='credit_reason' aria-invalid='false'>
          <option>Selecione</option>
        </select>
        <label className='helper-text'>
          {errors?.credit_reason?.message}
        </label>


        <button>Próximo</button>
      </form>
    </div>
  )
}
