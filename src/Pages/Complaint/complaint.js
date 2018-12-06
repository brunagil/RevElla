import React from 'react'
import Form from '../../Components/form'
import './complaint.css'

const Complaint = () => (
    <React.Fragment>
        <section className='complaint__firstForm'>
            <div className="container__form">
                <Form title='O que você gostaria de expor ou denunciar sobre sua empresa?' 
                        text='Para que possamos criar um Mapa de Insegurança, precisamos saber sobre a empresa onde isso aconteceu. Todas as informações são anônimas e estão seguras com a RevElla'>
                    <Form.Label 
                        htmlFor='companyName'>Nome da Empresa
                        </Form.Label>
                    <Form.Input 
                        id='companyName' 
                        type='text' 
                        placeholder="Google...">
                        </Form.Input>
                    <Form.Label 
                        htmlFor='cityState'>Cidade onde aconteceu essa situação na empresa
                        </Form.Label>
                    <Form.Input 
                        id='cityList' 
                        type='text'
                        placeholder="São Paulo...">
                        </Form.Input>

                    <Form.Label 
                        htmlFor='select'>Qual sua relação atual com essa empresa?
                        </Form.Label>
                    <Form.Select
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
                        id='companyArea' 
                        type='text'
                        placeholder='Financeiro, Recursos Humanos, Comercial...'>
                    </Form.Input>

                    <div className="btn__form-boxes">

                        <Form.Link 
                            className="btn btn__form_back" href='/' >
                            Voltar para o site
                        </Form.Link>
                        <Form.Button 
                            className="btn btn__form_next">
                            Próxima
                        </Form.Button>
                    </div>
                </Form>
            </div>
        </section>

    
    <section className='complaint__secondForm'>
        <div className="container__form">
            <Form title='Compartilhe com detalhes essa situação' 
                text='Todas as informações aqui compartilhadas são anônimas e estão seguras com a RevElla. 
                Leia com atenção!'>

            <Form.Label 
                htmlFor='select'>Escolha a experiência que você infelizmente viveu/vive?
            </Form.Label>
                <Form.Select
                className='select'
                listOfOptions={[
                    {'id': 1, 'text': 'Assédio sexual: chantagem e exigência de favores sexuais explícitos, em troca de benefícios ou não prejuízo no meu trabalho'},
                    {'id': 2, 'text': 'Assédio sexual: provocações inapropriadas e insistentes, com intimidação e/ou humilhação em grupo ou sem ninguém por perto'},
                    {'id': 3, 'text': 'Assédio sexual: toques, abraços, beijos e invasão do meu espaço pessoal sem a minha permissão'},
                    {'id': 4, 'text': 'Conduta abusiva e repetitiva de um chefe ou superior, que fere minha integridade física e psicológica'},
                    {'id': 5, 'text': 'Conduta abusiva e repetitiva de um colega de trabalho, que fere minha integridade física e psicológica'},
                    {'id': 6, 'text': 'Comentários e atitudes machistas, com ações que questionam meu trabalho por ser mulher'},
                    {'id': 7, 'text': 'Bullying, piadas e comentários desagradáveis sobre quem sou ou sobre um grupo social e/ou minoritário ao qual pertenço'},
                ]}>
                </Form.Select>

            <Form.Label 
                htmlFor='select'>Quem foi a mulher que viveu essa experiência?
            </Form.Label>
            <Form.Select
                className='select'
                listOfOptions={[
                    {'id': 1, 'text': 'Eu'},
                    {'id': 2, 'text': 'Outra mulher (Estou expondo essa situação pois ela não quer se manifestar)'},
                    {'id': 2, 'text': 'Outra mulher (Ela não sabe que eu presenciei essa situação)'}, 
                ]}>
            </Form.Select>
            <Form.Label 
                htmlFor='select'>Quando essa situação aconteceu pela última vez?
            </Form.Label>
            <Form.Select
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
                className='select'
                listOfOptions={[
                    {'id': 1, 'text': 'Sim, e após expor a situação à esse canal/área/departamento, sinto que melhorou'},
                    {'id': 1, 'text': 'Sim, mas após expor a situação à esse canal/área/departamento, sinto que piorou'},
                    {'id': 1, 'text': 'Sim, mas após expor a situação à esse canal/área/departamento, nada mudou'},
                    {'id': 1, 'text': 'Sim, mas após expor a situação à esse canal/área/departamento, não recebi uma resposta'},
                    {'id': 1, 'text': 'Sim, mas não me senti segura para expor essa situação'},
                    {'id': 2, 'text': 'Não'},
 
                ]}>
            </Form.Select>

            <Form.Label 
                htmlFor='textarea'>Se estiver confortável, compartilhe sua história e exponha a situação vivida
            </Form.Label>
            <Form.Textarea
                type='textarea' 
                id='testemonyAtForm'>
            </Form.Textarea>

                             <Form.Label 
                        htmlFor='select'>O quão respeitada você, como mulher, se sente nessa empresa?

                </Form.Label>
                <Form.Select
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
                        <Form.Link 
                            className="" href='/' >
                            Perguntas anteriores
                        </Form.Link>

                        <Form.Button 
                            className="btn btn__form_next">
                            Próxima
                        </Form.Button>
                    </div>
                </Form>
            </div>
    </section>

    <section className='complaint__submitForm'>
        <div className="container__form">
            <Form title='Por favor, cadastre um e-mail válido para que possamos manter contato' 
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
                    className="btn btn__form_submit">
                    Enviar
                </Form.Button>
            </Form>
        </div>
    </section>

</React.Fragment>

);

export default Complaint