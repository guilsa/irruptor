import React from 'react'
import { Row, Col, Form } from 'react-bootstrap'

const renderForms = (inputs, register, errors) => {
  const form = []
  let fieldsRow = []
  const renderRow = (props, id) => <Row key={id}>{props}</Row>

  inputs.forEach((input, idx) => {
    const { label, id } = input
    const defaultProps = {
      ref: register,
      id: id,
      label: label,
      name: id,
      isInvalid: errors[id] && !!errors[id],
    }
    let field

    if (id === undefined) console.warn('Oops! Found a field without an id! Check the inputs variable.')

    if (label !== undefined) {
      if (input.selectOptions) {
        field = (
          <Form.Group key={id} as={Col} sm={12} md={6}>
            <Form.Label>{label}</Form.Label>
            <Form.Control {...defaultProps} as='select' className='select optional valid'>
              <option>Selecione</option>
              {input.selectOptions.map((select) => {
                return (
                  <option key={select.value} value={select.value}>
                    {select.label}
                  </option>
                )
              })}
            </Form.Control>
            <Form.Control.Feedback type='invalid'>
              {errors[id] && errors[id].message && errors[id].message}
            </Form.Control.Feedback>
          </Form.Group>
        )
      } else {
        field = (
          <Form.Group key={id} as={Col} sm={12} md={6}>
            <Form.Label>{label}</Form.Label>
            <Form.Control {...defaultProps} type='text' />
            <Form.Control.Feedback type='invalid'>
              {errors[id] && errors[id].message && errors[id].message}
            </Form.Control.Feedback>
          </Form.Group>
        )
      }
    } else {
      field = React.createElement(input.component, { key: id })
    }

    fieldsRow.push(field)

    if (idx % 2) {
      form.push(
        renderRow(
          fieldsRow.map((field) => field),
          id
        )
      )
      fieldsRow = []
    } else if (idx === inputs.length - 1) {
      form.push(
        renderRow(
          fieldsRow.map((field) => field),
          id
        )
      )
    }
  })

  return form
}

const parseSelectOptions = (options) => {
  const array = []
  const parser = new DOMParser()
  const doc = parser.parseFromString(options, 'text/html')
  const elements = doc.getElementsByTagName('option')
  for (const el of elements) {
    array.push({ value: el.value, label: el.text })
  }
  return array
}

const getCitiesSelect = (citiesToStateMapping, selectedState) => {
  try {
    let cities = citiesToStateMapping[selectedState]
    return cities.map((city) => {
      return { value: city, label: city }
    })
  } catch {
    console.warn('Incorrect selectedState value passed to getCitiesSelect.')
  }
}

export { parseSelectOptions, getCitiesSelect, renderForms }
