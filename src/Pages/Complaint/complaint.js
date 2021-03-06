import React, { Component } from 'react'
import Form from '../../Components/form'
import './complaint.css'

class Complaint extends Component {
    state = {
        form1: {
            valid: false,
            submitted: false,
        },
        form2: {
            valid: false,
            submitted: false,
        },
        formFinal: {
            valid: false,
            submitted: false,
        },
        redirectToNewPage: false
    }

    form1 = React.createRef()
    form2 = React.createRef()
    formFinal = React.createRef()
    
    handleSubmit = (e, formName) => {
        e.preventDefault()
        this.setState({
            [formName]: {
                valid: e.target.checkValidity(),
                submitted: true,
            },
        });
    
        if(e.target.checkValidity()) {
            if (formName === 'form1'){
                window.scrollTo({
                    top: this.form2.current.offsetTop,  
                    behavior: 'smooth'
                })
                
            }else if (formName === 'form2'){
                window.scrollTo({
                    top: this.formFinal.current.offsetTop,  
                    behavior: 'smooth'
                })
            };
        }
    }
    handleFinish = (e) => {
        e.preventDefault()
        const formFinalValid = e.target.checkValidity();

        if(this.state.form1.valid && this.state.form2.valid && formFinalValid) {
            alert ('Obrigada por compartilhar essa experiência com a gente! Essas informações serão úteis para construir relatórios e ações para modificar a realidade dessas empresas')
            this.props.history.push('/')
        
    }
}
    render() {
        return (
            <React.Fragment>
            <section ref={this.form1} className='complaint__firstForm'>
                    <div className="container__form" id="firstForm">
                        <Form noValidate onSubmit={(e) => this.handleSubmit(e, 'form1')}
                                title='O que você gostaria de expor ou denunciar sobre sua empresa?' 
                                text='Para que possamos criar um relatório sobre essas empresas, precisamos saber sobre ela. Todas as informações são anônimas e estão seguras com a RevElla'>
                            <Form.Label 
                                htmlFor='companyName'>Nome da Empresa
                                </Form.Label>
                            <Form.Input
                                required 
                                id='companyName' 
                                type='text' 
                                placeholder="Google...">
                                </Form.Input>
                            <Form.Label 
                                htmlFor='cityState'>Cidade onde aconteceu essa situação na empresa
                                </Form.Label>
                            <Form.Input
                                required 
                                id='cityList' 
                                type='text'
                                placeholder="São Paulo...">
                                </Form.Input>
        
                            <Form.Label 
                                htmlFor='select'>Qual sua relação atual com essa empresa?
                                </Form.Label>
                            <Form.Select
                                required
                                className ='select'
                                listOfOptions = {[
                                    {'id': 1, 'text': 'Eu trabalho aqui'},
                                    {'id': 2, 'text': 'Eu já trabalhei aqui e fui demitida'},
                                    {'id': 3, 'text': 'Eu já trabalhei aqui e pedi para sair'},
                                    {'id': 4, 'text': 'Eu já fiz negócios com essa empresa'},
                                    {'id': 4, 'text': 'Eu fiz entrevista nessa empresa'},
                                  ]}
                                id='relationshipWithCompany' 
                                type='text'>
                            </Form.Select>
        
                            <Form.Label 
                                htmlFor='companyArea'>Em qual área ou departamento essa situação aconteceu?
                            </Form.Label>
        
                            <Form.Input 
                                required
                                id='companyArea' 
                                type='text'
                                placeholder='Financeiro, Recursos Humanos, Comercial...'>
                            </Form.Input>
        
                            {!this.state.form1.valid && this.state.form1.submitted && <p className='input__erro'>Por favor, preencha as informações solicitadas</p>}
                            
                            <div className="btn__form-boxes">
                                <Form.Link 
                                    className="btn btn__form_back" href='/' >
                                    Voltar para o site
                                </Form.Link>
                                <Form.Button
                                    type="submit"
                                    className="btn btn__form_next">
                                    Próxima
                                </Form.Button>
                            </div>
                        </Form>
                    </div>
                </section>
            
            <section ref={this.form2} className='complaint__secondForm'>
                <div className="container__form" id="form2">
                    <Form noValidate onSubmit={(e) => this.handleSubmit(e, 'form2')} 
                        title='Compartilhe com detalhes essa situação' 
                        text='Todas as informações aqui compartilhadas são anônimas e estão seguras com a RevElla.'>
        
                    <Form.Label 
                        htmlFor='select'>Escolha a experiência que você infelizmente viveu/vive?
                    </Form.Label>
                        <Form.Select
                        required
                        className='select'
                        listOfOptions={[
                            {'id': 1, 'text': 'Chantagem e exigência de favores sexuais explícitos, em troca de benefícios ou não prejuízo no meu trabalho'},
                            {'id': 2, 'text': 'Provocações inapropriadas e insistentes, com intimidação e/ou humilhação em grupo ou sem ninguém por perto'},
                            {'id': 3, 'text': 'Toques, abraços, beijos e invasão do meu espaço pessoal sem a minha permissão'},
                            {'id': 4, 'text': 'Conduta abusiva e repetitiva de um chefe ou superior, que fere minha integridade física/psicológica'},
                            {'id': 5, 'text': 'Conduta abusiva e repetitiva de um colega de trabalho, que fere minha integridade física/psicológica'},
                            {'id': 6, 'text': 'Comentários e atitudes machistas, com ações que questionam meu trabalho por ser mulher'},
                            {'id': 7, 'text': 'Bullying, piadas e comentários desagradáveis sobre quem sou ou sobre um grupo social e/ou minoritário ao qual pertenço'},
                        ]}>
                        </Form.Select>
        
                    <Form.Label 
                        htmlFor='select'>Quem foi a mulher que viveu essa experiência?
                    </Form.Label>
                    <Form.Select
                        required
                        className='select'
                        listOfOptions={[
                            {'id': 1, 'text': 'Eu'},
                            {'id': 2, 'text': 'Outra mulher'},

                        ]}>
                    </Form.Select>
                    <Form.Label 
                        htmlFor='select'>Quando essa situação aconteceu pela última vez?
                    </Form.Label>
                    <Form.Select
                        required
                        className='select'
                        listOfOptions={[
                            {'id': 1, 'text': 'Na última semana'},
                            {'id': 2, 'text': 'No último mês'},
                            {'id': 3, 'text': 'Nos últimos 6 meses'}, 
                            {'id': 4, 'text': 'Nos últimos 6 meses'},
                            {'id': 5, 'text': 'No último ano'},  
                            {'id': 6, 'text': 'Há mais de 1 ano'},  
                            {'id': 7, 'text': 'Há muitos anos, mas precisei expor o que vivi no passado'},  
                        ]}>
                    </Form.Select>
        
                    <Form.Label 
                        htmlFor='select'>Onde essa situação aconteceu pela última vez?
                    </Form.Label>
                    <Form.Select
                        required
                        className='select'
                        listOfOptions={[
                            {'id': 1, 'text': 'No escritório'},
                            {'id': 2, 'text': 'Fora do escritório, durante o horário de trabalho'},
                            {'id': 3, 'text': 'Fora de escritório, fora do horário de trabalho'}, 
                            {'id': 4, 'text': 'Em evento social da empresa/de um cliente'},
                            {'id': 5, 'text': 'Online, em rede social (Facebook, Instagram, Twitter, etc...)'},  
                            {'id': 6, 'text': 'Online (Slack, E-mail)'},  
                            {'id': 7, 'text': 'Celular (SMS, Mensagens ou áudios via whatsapp/telegram)'},  
                        ]}>
                    </Form.Select>
        
                    <Form.Label 
                        htmlFor='select'>A empresa apresenta um departamento, área ou canal de denúncia dessas situações?
                    </Form.Label>
                    <Form.Select
                        required
                        className='select'
                        listOfOptions={[
                            {'id': 1, 'text': 'Sim, e após expor a situação, sinto que melhorou'},
                            {'id': 1, 'text': 'Sim, mas após expor a situação, sinto que piorou'},
                            {'id': 1, 'text': 'Sim, mas após expor a situação, nada mudou'},
                            {'id': 1, 'text': 'Sim, mas após expor a situação, não recebi uma resposta'},
                            {'id': 1, 'text': 'Sim, mas não me senti segura para expor essa situação'},
                            {'id': 2, 'text': 'Não'},
         
                        ]}>
                    </Form.Select>
        
                    <Form.Label 
                        htmlFor='textarea'>Se estiver confortável, compartilhe sua história e exponha a situação vivida
                    </Form.Label>
                    <Form.Textarea
                        required
                        type='textarea' 
                        id='testemonyAtForm'>
                    </Form.Textarea>
        
                    <Form.Label 
                        htmlFor='select'>No geral, o quão respeitada você se sente nessa empresa?
        
                        </Form.Label>
                        <Form.Select
                            required
                            className ='select'
                            listOfOptions = {[
                                {'id': 1, 'text': '5 - Muito respeitada'},
                                {'id': 2, 'text': '4 - Respeitada na maior parte do tempo'},
                                {'id': 3, 'text': '3 - Às vezes respeitada'},
                                {'id': 4, 'text': '2 - Pouquíssimo respeitada'},
                                {'id': 5, 'text': '1 - Desrespeitada na maior parte do tempo'},
                            ]}
                            id='safetyRating'>
                        </Form.Select>
        
                           <div className="btn__form-boxes">
                                <Form.Button 
                                    type='submit'
                                    className="btn btn__form_next">
                                    Próxima
                                </Form.Button>
                            </div>
                        </Form>
                    </div>
            </section>
        
            <section ref={this.formFinal} className='complaint__submitForm'>
                <div className="container__form" id="complaintSubmit">
                    <Form onSubmit={this.handleFinish}  
                        title='Por favor, cadastre um e-mail válido para que possamos manter contato' 
                        text='Seu e-mail permanecerá anônimo e será criptografado para garantir a segurança do seu testemunho.'>
                        
                        <Form.Label 
                            htmlFor='email'>Email
                        </Form.Label>
                        <Form.Input 
                            id='email' 
                            type='email'
                            placeholder="juntasomos@poderosas.com">
                        </Form.Input>
                        
                        <Form.Button
                            type='submit'
                            className="btn btn__form_submit">
                            Enviar
                        </Form.Button>
                    </Form>
                </div>
            </section>
          </React.Fragment>

        );
    }
}

export default Complaint