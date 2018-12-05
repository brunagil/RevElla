import React from 'react'
import Form from '../../Components/form'
import Container from '../../Components/container'
import Button from '../../Components/button'
import Navbar from '../../Components/navbar'
import './complaint.css'


const Complaint = () => (
    <React.Fragment>
        <section className='complaint__firstForm'>
            <div className="container__form">
                <Form title='O que você gostaria de expor ou reportar sobre sua empresa?' 
                        text='Por favor, compartilhe as informações da empresa para que possamos criar '>
                    <Form.Label 
                        htmlFor='companyName'>Nome da empresa
                        </Form.Label>
                    <Form.Input 
                        id='companyName' 
                        type='text' 
                        placeholder="">
                        </Form.Input>

                    <Form.Label 
                        htmlFor='cityState'>Cidade em que você trabalha
                        </Form.Label>
                    <Form.Input 
                        id='cityList' 
                        type='text'>
                        </Form.Input>

                    <Form.Label 
                        htmlFor='select'>Sua relação atual com a empresa
                        </Form.Label>
                    <Form.Select
                        className='select'
                        lista={[
                            {'id': 1, 'text': 'some text1'},
                            {'id': 2, 'text': 'some text2'},
                          ]}>
                    </Form.Select>

                    <Form.Label 
                        htmlFor='companyArea'>Em qual área/departamento essa situação aconteceu?
                    </Form.Label>
                    <Form.Input 
                        id='companyArea' 
                        type='text'>
                    </Form.Input>



                    <div className="btn__form-boxes">
                        <Form.Link 
                            className="btn btn__form_next" href='/' >
                            Voltar para o site
                        </Form.Link>

                        <Form.Button 
                            className="btn btn__form_back">
                            Próxima
                        </Form.Button>
                    </div>
                </Form>
            </div>
        </section>

    
    <section className='complaint__secondForm'>
        <div className="container__form">
            <Form title='O que você gostaria de expor ou reportar sobre sua empresa?' 
                text='Todas as informações são anônimas e estão protegidas por criptografia'>
            <Form.Label 
                htmlFor='companyName'>Nome da empresa
            </Form.Label>

            <Form.Input 
                id='companyName' 
                type='text' 
                placeholder="">
            </Form.Input>

            <Form.Label 
                htmlFor='cityState'>Cidade
            </Form.Label>

            <Form.Input 
                id='cityList' 
                type='text'>
                </Form.Input>

                    <Form.Label 
                        htmlFor='select'>Sua relação atual com a empresa
                        </Form.Label>
                    <Form.Select
                        className='select'
                        lista={[
                            {'id': 1, 'text': 'some text1'},
                            {'id': 2, 'text': 'some text2'},
                          ]}>
                    </Form.Select>

                    <Form.Label 
                        htmlFor='textarea'>Narre a situação que você gostaria de expor
                        </Form.Label>
                    <Form.Textarea
                        type='textarea' 
                        id='passaword'>
                    </Form.Textarea>

                    <div className="btn__form-boxes">
                        <Form.Link 
                            className="btn btn__form_next" href='/' >
                            Voltar para o site
                        </Form.Link>

                        <Form.Button 
                            className="btn btn__form_back">
                            Próxima
                        </Form.Button>
                    </div>
                </Form>
            </div>


    </section>
</React.Fragment>

)

export default Complaint