import React from 'react'

export const Footer = () => {
  return (
    <footer className='my-5 pt-5 text-muted text-center text-small'>
        <p className='mb-1'>&copy; 2121–2021 Credijá</p>
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
  )
}