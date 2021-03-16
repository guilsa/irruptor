import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LoanSelect } from './LoanSelect'
import { Passo1 } from './Passo1'
import { Passo2 } from './Passo2'
import { Passo3 } from './Passo3'
import { Dashboard } from './Dashboard'
import { Results } from './Results'
import { Footer } from './components/Footer'

import { Container, Navbar, Nav } from 'react-bootstrap'

function App() {
  return (
    <>
      <Container>
        <Container className='py-2'>
          <Navbar bg='primary' variant='dark' fixed='top'>
            <img
              className='px-2'
              alt='logo'
              src='https://hatscripts.github.io/circle-flags/flags/br.svg'
              width='48'
            />
            <Navbar.Brand href='#'>Credijá</Navbar.Brand>
            <Nav className='mr-auto'>
              <Nav.Link href=''>Perfil</Nav.Link>
              <Nav.Link href=''>Conta</Nav.Link>
              <Nav.Link href=''>Ajuda</Nav.Link>
            </Nav>
          </Navbar>
        </Container>
        <Router>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/emprestimo' component={LoanSelect} />
            <Route path='/passo' component={Passo1} />
            <Route path='/passo2' component={Passo2} />
            <Route path='/sucesso' component={Passo3} />
            <Route path='/dash' component={Dashboard} />
            <Route path='/resultados' component={Results} />
          </Switch>
        </Router>
        <Footer/>
      </Container>
    </>
  )
}

export default App
