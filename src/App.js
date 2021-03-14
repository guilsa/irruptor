import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Passo1 } from './Passo1'
import { Passo2 } from './Passo2'
import { Passo3 } from './Passo3'
import { Dashboard } from './Dashboard'
import { Results } from './Results'

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
              <Nav.Link href='#conta'>Minha Conta</Nav.Link>
            </Nav>
          </Navbar>
        </Container>
        <Router>
          <Switch>
            <Route exact path='/' component={Passo1} />
            <Route path='/passo2' component={Passo2} />
            <Route path='/passo3' component={Passo3} />
            <Route path='/dash' component={Dashboard} />
            <Route path='/resultados' component={Results} />
          </Switch>
        </Router>
      </Container>
    </>
  )
}

export default App
