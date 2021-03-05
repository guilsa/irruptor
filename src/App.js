import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Passo1 } from './Passo1'
// import { Passo2 } from './Passo2'
// import { Passo3 } from './Passo3'
// import { Resultado } from './Resultado'
import { Header } from './components/Header'

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path='/' component={Passo1} />
          {/* <Route path='/passo2' component={Passo2} />
          <Route path='/passo3' component={Passo3} /> */}
          {/* <Route path='/resultado' component={Resultado} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;