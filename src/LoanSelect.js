import React from 'react'
import { useHistory } from 'react-router-dom'
import { useData } from './DataContext'

import { Container, Row, Col, Button } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faHome } from '@fortawesome/free-solid-svg-icons'

export const LoanSelect = () => {
  const { setValues, data } = useData()
  const history = useHistory()

  const handleSubmit = (loanType) => {
    setValues({ ...data, loan_type: loanType })
    history.push('./passo')
  }

  const SelectBox = (props) => {
    const Icon = () =>
      props.type === 'morgage' ? (
        <span className='d-inline'>
          <FontAwesomeIcon size='2x' color='#343a40' icon={faHome} />
        </span>
      ) : (
        <span className='d-inline'>
          <FontAwesomeIcon size='2x' color='#343a40' icon={faCar} />
        </span>
      )

    // backgroundColor: '#ebf8ff',
    // borderColor: '#2b6cb0',

    const selectStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 282,
      height: 274,
      borderRadius: '0.375rem',
      borderWidth: 3,
      cursor: 'pointer',
      borderColor: '#E2E8F0',
      borderStyle: 'solid',
      margin: 15,
      padding: 20,
    }

    const selectBoxInnerStyle = {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    }

    return (
      <Container onClick={() => handleSubmit(props.type)} style={selectStyle}>
        <Row style={selectBoxInnerStyle}>
          <Icon />
          <h4 className='font-weight-bold mt-3'>{props.title}</h4>
          <p className='py-2 text-center font-weight-light'>{props.desp}</p>
        </Row>
      </Container>
    )
  }

  return (
    <Container className='d-flex flex-column align-items-center' style={{ marginTop: 125 }}>
      <Button variant='primary' size='sm'>
        PASSO 1
      </Button>
      <Container className='py-2 text-center'>
        <Row className='py-lg-4'>
          <Col>
            <h1 className='font-weight-bold'>Escolha o seu próximo empréstimo</h1>
            <p className='lead text-muted'>
              Precisamos de 5-10 minutos do seu tempo. Depois que você preencher os formulários, nosso
              parceiro comercial entrará em contato com você.'
            </p>
          </Col>
        </Row>
        <Container fluid className='d-flex justify-content-center flex-wrap'>
          <SelectBox title='Imóvel' type='morgage' desp='Casas, apartamentos, e essas coisas!' />
          <SelectBox title='Automóvel' type='automobile' desp='Sua próxima moto ou automóvel é um passo.' />
        </Container>
      </Container>
    </Container>
  )
}
