import React, { createContext, useState, useContext } from 'react'

const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    fullName: 'Jorge Leao',
    email: 'jorge@leao.com',
    cpf: '696.604.737-61',
    dob: '15/09/1983',
    cel: '(85) 11934-9722',
    cep: '24904-495',
    incomeBracket: '$2000',
    job: 'EMPRESARIO',
    password: 'foobar123',
    mother_full_name: 'mae',
    gender: 'MALE',
    birth_state: 'AL',
    birth_city: 'Selecione',
    degree: 'ENSINO_FUNDAMENTAL_INCOMPLETO',
    marital_status: 'DIVORCIADO',
    id_type: 'RG',
    id_num: '123',
    id_issuer: 'SSI',
    id_issuer_state: 'PI',
    id_exp: '876',
    bank_name: 'BANCO_021',
    bank_account_type: 'CONTA_CORRENTE_INDIVIDUAL',
    bank_account_num: '132',
    loan_intent: 'BELEZA_E_SAUDE',
  })

  const setValues = (values) => {
    setData((prevData) => ({
      ...prevData,
      ...values,
    }))
  }

  return (
    <DataContext.Provider value={{ data, setValues }}>
      {children}
    </DataContext.Provider>
  )
}

export const useData = () => useContext(DataContext)
