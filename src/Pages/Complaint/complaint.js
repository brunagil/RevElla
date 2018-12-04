import React from 'react'
import Form from '../../Components/complaint-form/form'

import Container from '../../Components/container'
import './complaint.css'


const Complaint = () => (
    <Container>
    <div className ="loucura">Tentando entender o rolê>
      <Form title='Cadastre-se' text='Preencha os dados com suas informações'>
          <Form.Label htmlFor='name'>Nome</Form.Label>
          <Form.Input id='name' type='text'></Form.Input>
          <Form.Label htmlFor='email'>Email:</Form.Label>
          <Form.Input id='email' type='email'></Form.Input>
          <Form.Label htmlFor='phone'>Telefone:</Form.Label>
          <Form.Input type='tel' id='phone'></Form.Input>
          <Form.Label htmlFor='passaword'>Senha:</Form.Label>
          <Form.Input type='password' id='passaword'></Form.Input>
      </Form>
      </div>
    </Container>
)

export default Complaint