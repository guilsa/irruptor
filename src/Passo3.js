import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button, Alert } from 'react-bootstrap'


export const Passo3 = () => {
  const CustomHeader = (props) => (
    <section className='text-center container'>
      <div className='row py-lg-4'>
        <div className='col-lg-10 mx-auto'>
          <h1 className='fw-light'>{props.title}</h1>
          <p className='lead text-muted'>{props.text}</p>
        </div>
      </div>
    </section>
  )
  const NovaProposta = (props) => (
    <Container className='fw-light d-flex flex-column align-items-center'>
      <CustomHeader title={props.title} text='Por favor aguarde até completarmos a pré-análise.' />
      <Link style={{marginBottom: 50}} to='/'>
        <Button size='lg' variant='success'>
          Ir para o meu perfil
        </Button>
      </Link>
      
      <Alert style={{ maxWidth: 600}}  variant='success'>
        <Alert.Heading className='text-center'>O que é a pré-análise?</Alert.Heading>
        <p>
          Seu nome, endereço, CPF e outras informações foram enviadas de forma segura para o nosso parceiro
          Creditas. A Creditas é uma plataforma digital que atua como correspondente Bancário e Sociedade de
          Crédito Direto para facilitar o processo de contratação de empréstimos.
        </p>
        <hr />
        <Alert.Heading className='text-center'>Quanto tempo demora?</Alert.Heading>
        <p>O processo normalmente leva alguns dias.</p>
        <p>
          Na página do <a href='/#'>Perfil</a>, você pode monitorar essa e outras solicitações.
        </p>
        <hr />
        <Alert.Heading className='text-center'>Tenho mais dúvidas.</Alert.Heading>
        <p className='mb-0'>
          Estamos disponíveis para te ajudar de Segunda-Sexta, 10am-17pm. Mais informações em{' '}
          <a href='/#'>Ajuda</a>.
        </p>
      </Alert>

    </Container>
  )

  return (
    <Container fluid className='py-5'>
      <Row>
        <Col>
          <NovaProposta title='Sua solicitação foi recebida com sucesso.' status='new' />
        </Col>
      </Row>
    </Container>
  )
}
