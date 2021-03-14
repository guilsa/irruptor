import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export const PageContainer = (props) => {
  return (
    <Container fluid className='py-5'>
      <Row>
        <Col>{props.children}</Col>
      </Row>
    </Container>
  )
}
