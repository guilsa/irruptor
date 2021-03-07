
import React, { createContext, useState, useContext } from 'react'

const DataContext = createContext()

export const DataProvider = ({children}) => {
  const [data, setData] = useState({
    fullName: 'Jorge Leao',
    email: 'jorge@leao.com',
    cpf: '696.604.737-61',
    dob: '15/09/1983',
    cel: '(85) 11934-9722',
    cep: '24904-495',
    income: '$2000',
    job: 'Artista',
    password: 'foobar123',
  })

  const setValues = (values) => {
    setData(prevData => ({
      ...prevData,
      ...values
    }))
  }

  return <DataContext.Provider value={{data, setValues}}>
    {children}
  </DataContext.Provider>
}

export const useData = () => useContext(DataContext)