import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, CardDeck, Button, Badge } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faHome } from '@fortawesome/free-solid-svg-icons'

export const Dashboard = () => {
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

  const PropostaCard = (props) => {
    const Icon = () =>
      props.type === 'morgage' ? (
        <span className='d-inline'>
          <FontAwesomeIcon color='#343a40' icon={faHome} />
        </span>
      ) : (
        <span className='d-inline'>
          <FontAwesomeIcon color='#343a40' icon={faCar} />
        </span>
      )

    return (
      <Col md='6' style={{ padding: 10 }}>
        <Card style={{ minWidth: '20rem' }}>
          <Card.Body>
            <Row>
              <Col>
                <Card.Title>
                  <Icon />
                  <label className='d-inline' style={{ paddingLeft: 10 }}>{props.title}</label>
                </Card.Title>
                <Card.Subtitle className='mb-1 text-muted'>{props.price}</Card.Subtitle>
              </Col>
              <Col xs={4} sm={3} md={4} lg={3}>
                <Badge variant='light' className='font-weight-normal'>
                  {props.date}
                </Badge>
              </Col>
            </Row>
            <hr />
            <Card.Text>{props.text}</Card.Text>
            {props.status === 'pre_approved' && <Button variant='primary'>Continuar</Button>}
            {props.status === 'pending' && <Button variant='info'>Mais</Button>}
          </Card.Body>
        </Card>
      </Col>
    )
  }

  const PropostasContainer = (props) => (
    <Container className='py-4'>
      <CustomHeader title={props.title} text={props.text} />
      <Row>
        <CardDeck style={{ margin: '0 auto' }}>
          <PropostaCard
            title='Empréstimo Imóvel'
            price='$2,500'
            text='Empréstimo detalhes e benefícios.'
            date='03/21/2020'
            type='morgage'
            status={props.status}
          />
          <PropostaCard
            title='Empréstimo Automóvel'
            price='$1,500'
            text='Empréstimo detalhes e benefícios.'
            date='03/17/2020'
            type='automobile'
            status={props.status}
          />
          <PropostaCard
            title='Empréstimo Imóvel'
            price='$3,500'
            text='Empréstimo detalhes e benefícios.'
            date='03/11/2020'
            type='morgage'
            status={props.status}
          />
        </CardDeck>
      </Row>
    </Container>
  )

  const NovaProposta = (props) => (
    <Container>
      <CustomHeader
        title={props.title}
        text='Em apénas alguns dias, consiga empréstimos para imóveis ou automóveis.'
      />
      <Row className='justify-content-md-center'>
        <CardDeck>
          <Card className='text-center'>
            <Card.Body>
              <Badge variant='dark'>{props.date}</Badge>
              <Card.Text>{props.text}</Card.Text>
              <Link to='/passo'>
                <Button variant='success'>Solicitar um novo empréstimo</Button>
              </Link>
            </Card.Body>
          </Card>
        </CardDeck>
      </Row>
    </Container>
  )

  // statuses -> new | pre_approved | pending | declined

  return (
    <Container fluid className='py-5'>
      <Row>
        <Col>
          <NovaProposta
            title='Nova Proposta'
            text='Quer começar uma nova solicitação de empréstimo? É aqui!'
            status='new'
          />
          <PropostasContainer
            title='Pré-Aprovado'
            text='Conseguimos as seguintes ofertas pré-aprovadas. Você está mais perto do seu emprestimo!'
            status='pre_approved'
          />
          <PropostasContainer
            title='Pendente'
            text='Suas propostas estão pendentes. Estamos arguarando informações do nosso parceiro, iremos conseguir
          tirar os itens abaixo de pendente para confirmado. Entraremos em contato com voce!'
            status='pending'
          />
          <PropostasContainer
            title='Recusado'
            text='Chato, mas infelizmente algumas propostas foram reprovadas.'
            status='declined'
          />
        </Col>
      </Row>
    </Container>
  )
}
