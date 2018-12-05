import React from 'react'
import Form from '../../Components/form'
import Container from '../../Components/container'
import './complaint.css'


const Complaint = () => (
    <Container>
        <div>
            <Form title='O que você gostaria de expor sobre uma empresa?' 
                    text=''>
                <Form.Label 
                    htmlFor='companyName'>Nome da empresa</Form.Label>
                <Form.Input 
                    id='companyName' 
                    type='text' 
                    placeholder=""></Form.Input>
                <Form.Label 
                    htmlFor='cityState'>Cidade</Form.Label>
                <Form.Input 
                    id='cityList' 
                    type='text'></Form.Input>
                <Form.Label 
                    htmlFor='phone'>Telefone:</Form.Label>
                <Form.Input 
                    type='tel' 
                    id='phone'></Form.Input>
                <Form.Label 
                    htmlFor='passaword'>Senha:</Form.Label>
                <Form.Input 
                    type='password' 
                    id='passaword'></Form.Input>
            </Form>
        </div>
    </Container>
)

export default Complaint